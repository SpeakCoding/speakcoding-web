import React, { useContext, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { context } from './utils';
import s from './accordion.css';

const Content = ({ name, children }) => {
    const { expanded } = useContext(context),
        $ref = useRef(),
        height = useRef(0),
        [ready, setReady] = useState(false);

    useEffect(() => {
        height.current = $ref.current.clientHeight;
        setReady(true);
    }, []);

    return (
        <div
            ref={$ref}
            className={s.content}
            style={{
                height: ready && (name === expanded ? height.current : 0)
            }}
        >
            {children}
        </div>
    );
};

Content.propTypes = {
    name: pt.oneOfType([pt.string, pt.number]).isRequired
};

export default Content;
