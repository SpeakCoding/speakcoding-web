import React, { useCallback, useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Img } from '@sc/ui';
import { updateZIndex } from './utils';
import xcode from './xcode.png';
import s from './editor.css';

const f = n => (n === 0 ? 1 : n);

const Part = ({ name, x1, y1, x2, y2 }) => {
    const style = useMemo(
        () => ({
            top: `${y1 * 100}%`,
            left: `${x1 * 100}%`,
            width: `${(x2 - x1) * 100}%`,
            height: `${(y2 - y1) * 100}%`,
            backgroundSize: `${100 / (x2 - x1)}% ${100 / (y2 - y1)}%`,
            backgroundPosition: `${(x1 / f(1 - x2 + x1)) * 100}% ${(y1 / f(1 - y2 + y1)) * 100}%`
        }),
        [x1, y1, x2, y2]
    );

    const handleHover = useCallback(event => {
        updateZIndex(event.target);
    }, []);

    return (
        <div className={s.part} style={style} data-editor-part={name} onMouseOver={handleHover} />
    );
};

Part.propTypes = {
    name: pt.string,
    x1: pt.number,
    y1: pt.number,
    x2: pt.number,
    y2: pt.number
};

Part.defaultProps = {
    name: undefined,
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 1
};

const Pic = ({ minimized }) => (
    <div className={classNames(s.pic, minimized && s.minimized)}>
        <Img src={xcode} />
        <Part name='tree' x1={0} y1={0} x2={0.195} y2={1} />
        <Part name='main' x1={0.195} y1={0} x2={0.813} y2={1} />

        {/*<Part name='tree' x1={0} y1={0.113} x2={0.195} y2={1} />*/}
        {/*<Part name='main' x1={0.195} y1={0.104} x2={0.813} y2={0.969} />*/}
        {/*<P/art name='project' x1={0.014} y1={0.078} x2={0.1} y2={0.117} />*/}
        {/*<Part name='play' x1={0.161} y1={0} x2={0.191} y2={0.043} />*/}
        {/*<Part name='device' x1={0.379} y1={0} x2={0.461} y2={0.043} />*/}
    </div>
);

Pic.propTypes = {
    minimized: pt.bool
};

Pic.defaultProps = {
    minimized: false
};

export default Pic;
