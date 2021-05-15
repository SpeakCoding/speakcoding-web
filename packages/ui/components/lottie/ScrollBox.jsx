import React, { useEffect, useRef, useState } from 'react';
import { throttle } from '@sc/tools/function';
import { state } from './utils';
import s from './lottie.css';

const ScrollBox = ({ children }) => {
    const $ref = useRef(),
        [part, setPart] = useState(0);

    useEffect(() => {
        const handler = throttle(() => {
            const { top, height } = $ref.current.getBoundingClientRect(),
                d = Math.max(0, Math.min(height, -top + window.innerHeight / 2));

            setPart(d / height);
        }, 25);

        document.addEventListener('scroll', handler);

        return () => {
            document.removeEventListener('scroll', handler);
        };
    }, []);

    return (
        <div ref={$ref} className={s.box}>
            <state.Provider value={{ type: 'scroll', part }}>{children}</state.Provider>
        </div>
    );
};

export default ScrollBox;
