import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import s from './expand.css';

const Expand = ({ id, opened, children }) => {
    const [height, setHeight] = useState(),
        $ref = useRef();

    const init = () => {
        const { height: next } = $ref.current.getBoundingClientRect();
        setHeight(next);
    };

    useEffect(() => {
        window.addEventListener('resize', init);
        setTimeout(init, 500);
        return () => {
            window.removeEventListener('resize', init);
        };
    }, []);

    return (
        <div
            className={s.box}
            data-expanded={opened}
            id={id}
            style={{
                '--height': height && `${height}px`
            }}
        >
            <div ref={$ref}>
                <div className={s.content}>{children}</div>
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
