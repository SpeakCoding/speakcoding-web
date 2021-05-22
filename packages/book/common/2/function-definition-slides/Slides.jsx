import React, { useEffect, useRef, useState } from 'react';
import { slide } from './utils';
import s from './slides.css';

const Slides = ({ children }) => {
    const $ref = useRef(),
        [current, setCurrent] = useState(0);

    useEffect(() => {
        const slides = [...$ref.current.querySelectorAll('[data-slide]')],
            threshold = Math.floor(window.innerHeight / 2);

        function handler() {
            const i = slides.findIndex($slide => $slide.getBoundingClientRect().top > threshold);

            setCurrent(i > -1 ? i : slides.length);
        }

        const observer = new IntersectionObserver(handler, {
            rootMargin: `-${threshold}px 0px -${threshold}px 0px`,
            threshold: 0
        });

        [...$ref.current.querySelectorAll('[data-slide]')].forEach($slide => {
            observer.observe($slide);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={$ref} className={s.box}>
            <slide.Provider value={current}>{children}</slide.Provider>
        </div>
    );
};

export default Slides;
