import React, { useCallback } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './highlight.css';

const Highlight = ({ active, color, label, children }) => {
    const handleMouseEnter = useCallback(() => {
        if (!label) return;

        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);

        [...items].forEach($item => $item.classList.add(s.hover));
    }, [label]);

    const handleMouseLeave = useCallback(() => {
        if (!label) return;

        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);

        [...items].forEach($item => $item.classList.remove(s.hover));
    }, [label]);

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
        'turquoise:',
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
    label: pt.string
};

Highlight.defaultProps = {
    active: false,
    color: 'orange',
    label: undefined
};

export default Highlight;