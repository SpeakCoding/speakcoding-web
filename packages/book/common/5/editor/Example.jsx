import React, { useEffect, useRef, useState } from 'react';
import { Img } from '@sc/ui';
import Pic from './Pic';
import xcode from './xcode.png';
import s from './editor.css';

const threshold = 0.6;

const Example = ({ children }) => {
    const $editor = useRef(),
        [minimized, setMinimized] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0],
                    { top, height } = entry.boundingClientRect;

                setMinimized(top < -height * (1 - threshold));
            },
            { threshold: [threshold] }
        );

        observer.observe($editor.current);
    }, []);

    return (
        <div className={s.box}>
            <div ref={$editor} className={s.content}>
                <div className={s.placeholder}>
                    <Img src={xcode} />
                </div>
                <Pic minimized={minimized} />
            </div>

            {children}
        </div>
    );
};

export default Example;
