import React, { useCallback } from 'react';
import pt from 'prop-types';
import s from './highlight.css';

const Highlight = ({ color, label, children }) => {
    const handleMouseEnter = useCallback(() => {
        if (!label) return;

        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);

        [...items].forEach($item => $item.classList.add(s.active));
    }, [label]);

    const handleMouseLeave = useCallback(() => {
        if (!label) return;

        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);

        [...items].forEach($item => $item.classList.remove(s.active));
    }, [label]);

    return (
        <span
            className={s.box}
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
    color: 'orange',
    label: undefined
};

export default Highlight;
