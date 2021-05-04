import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './highlight.css';

const Highlight = ({ active, color, label, children, onHover, onLeave }) => {
    const handleMouseEnter = useCallback(() => {
        if (!label) return;
        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);
        [...items].forEach($item => $item.classList.add(s.hover));
        onHover(color, label);
    }, [color, label, onHover]);

    const handleMouseLeave = useCallback(() => {
        if (!label) return;
        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);
        [...items].forEach($item => $item.classList.remove(s.hover));
        onLeave(color, label);
    }, [color, label, onLeave]);

    return (
        <span
            className={classNames(s.box, active && s.active)}
            data-highlight-label={label}
            style={{ '--bg-color': `var(--bg-${color})` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </span>
    );
};

Highlight.propTypes = {
    active: pt.bool,
    color: pt.oneOf([
        'orange',
        'green',
        'blue',
        'red',
        'aquamarine',
        'steel-blue',
        'turquoise',
        'light-sky-blue',
        'sandy-brown',
        'green-yellow',
        'wheat',
        'powder-blue',
        'thistle',
        'floral-white',
        'plum',
        'plum-hover',
        'grey'
    ]),
    label: pt.string,
    onHover: pt.func,
    onLeave: pt.func
};

Highlight.defaultProps = {
    active: false,
    color: 'orange',
    label: undefined,
    onHover: () => {},
    onLeave: () => {}
};

export default Highlight;
