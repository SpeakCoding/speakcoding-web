import React, { useCallback, useMemo } from 'react';
import pt from 'prop-types';
import { zoomIn, zoomOut } from './utils';
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

    const handleMouseOver = useCallback(event => {
        zoomIn(event.target);
    }, []);

    const handleMouseLeave = useCallback(event => {
        zoomOut(event.target);
    }, []);

    return (
        <div
            className={s.part}
            style={style}
            data-editor-part={name}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        />
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

export default Part;
