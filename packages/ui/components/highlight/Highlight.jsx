import React, { useCallback, useContext } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { hl } from './utils';
import s from './highlight.css';

const contrast = {
    'sc-green': true,
    'sc-purple': true
};

const Highlight = ({ color, label, children, ...props }) => {
    const context = useContext(hl),
        active = context.active || props.active,
        inline = context.inline || props.inline,
        colorVar = /^sc/.test(color) ? `--c-${color}` : `--bg-${color}`;

    const handleMouseEnter = useCallback(() => {
        if (!label) return;
        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);
        [...items].forEach($item => {
            if ($item.dataset.passive) $item.setAttribute('style', `--bg-color: var(${colorVar})`);
            $item.classList.add(s.hover);
        });
    }, [colorVar, label]);

    const handleMouseLeave = useCallback(() => {
        if (!label) return;
        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);
        [...items].forEach($item => $item.classList.remove(s.hover));
    }, [label]);

    return (
        <span
            className={classNames(s.box, {
                [s.active]: context.active || active,
                [s.inline]: inline
            })}
            data-highlight-label={label}
            style={{
                '--bg-color': `var(${colorVar})`,
                color: contrast[color] ? 'var(--c-white)' : 'inherit'
            }}
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
        'grey',
        'sc-red',
        'sc-green',
        'sc-purple',
        'sc-yellow',
        'sc-aero'
    ]),
    inline: pt.bool,
    label: pt.string
};

Highlight.defaultProps = {
    active: false,
    color: 'orange',
    inline: false,
    label: undefined
};

export default Highlight;
