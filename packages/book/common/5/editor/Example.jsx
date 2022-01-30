import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import Pic from './Pic';
import Part from './Part';
import xcode1 from './xcode-1.png';
import xcode2 from './xcode-2.png';
import { context } from './utils';
import s from './editor.css';

const threshold = 0.6;

const getID = () => `editor-${Math.floor(Math.random() * 10e8)}`;

const Example = ({ variant, children }) => {
    const [value] = useState({ id: getID() }),
        $editor = useRef(),
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
        <div id={value.id} className={s.box}>
            <div ref={$editor} className={s.content}>
                {variant === 1 && (
                    <Pic src={xcode1} minimized={minimized}>
                        <Part name='tree' x1={0} y1={0} x2={0.24} y2={1} />
                        <Part name='main' x1={0.24} y1={0} x2={1} y2={1} />
                        <Part name='classes' x1={0} y1={0.206} x2={0.24} y2={0.261} />
                        <Part name='controllers' x1={0} y1={0.718} x2={0.24} y2={0.75} />
                    </Pic>
                )}

                {variant === 2 && (
                    <Pic src={xcode2} minimized={minimized}>
                        <Part name='tree' x1={0} y1={0} x2={0.183} y2={1} />
                        <Part name='xib' x1={0} y1={0.25} x2={0.183} y2={0.286} />
                        <Part name='interface' x1={0.196} y1={0} x2={0.815} y2={1} />
                        <Part name='parameters' x1={0.827} y1={0} x2={1} y2={1} />
                    </Pic>
                )}
            </div>

            <context.Provider value={value}>{children}</context.Provider>
        </div>
    );
};

Example.propTypes = {
    variant: pt.number.isRequired
};

export default Example;
