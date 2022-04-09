import React, { useEffect, useMemo, useRef, useState } from 'react';
import pt from 'prop-types';
import { context, expanded } from './utils';
import s from './expand.css';

const Expand = ({ id, opened: initial, children }) => {
    const [height, setHeight] = useState(),
        $box = useRef(),
        $ref = useRef();

    if (!expanded.has(id)) expanded.set(id, initial);
    const opened = expanded.get(id);

    const init = () => {
        const { height: next } = $ref.current.getBoundingClientRect();
        setHeight(next);
    };

    const value = useMemo(
        () => ({
            expand: () => {
                if (!$box.current) return null;

                const current = $box.current.dataset.expanded === 'false';
                expanded.set(id, true);
                $box.current.dataset.expanded = true;

                return new Promise(r => {
                    setTimeout(r, current ? 240 : 0);
                });
            }
        }),
        [id]
    );

    useEffect(() => {
        window.addEventListener('resize', init);
        setTimeout(init, 500);
        return () => {
            window.removeEventListener('resize', init);
        };
    }, []);

    return (
        <div
            ref={$box}
            className={s.box}
            data-expanded={opened}
            id={id}
            style={{
                '--height': height && `${height}px`
            }}
        >
            <div ref={$ref}>
                <div className={s.content} data-expand-content='yes'>
                    <context.Provider value={value}>{children}</context.Provider>
                </div>
            </div>
        </div>
    );
};

Expand.propTypes = {
    id: pt.string,
    opened: pt.bool
};

Expand.defaultProps = {
    id: undefined,
    opened: false
};

export default Expand;
