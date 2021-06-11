import React, { useCallback, useContext } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { hl } from './utils';
import s from './highlight.css';

const Highlight = ({ color, label, children, ...props }) => {
    const context = useContext(hl),
        active = context.active || props.active,
        inline = context.inline || props.inline;

    const handleMouseEnter = useCallback(() => {
        if (!label) return;
        const items = document.querySelectorAll(`[data-highlight-label="${label}"]`);
        [...items].forEach($item => {
            if ($item.dataset.passive)
                $item.setAttribute('style', `--bg-color: var(--bg-${color})`);
            $item.classList.add(s.hover);
        });
    }, [color, label]);

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
                '--bg-color': `var(--bg-${color})`,
                paddingTop: inline && `${inline}px`,
                paddingBottom: inline && `${inline}px`
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
        'grey'
    ]),
    inline: pt.number,
    label: pt.string
};

Highlight.defaultProps = {
    active: false,
    color: 'orange',
    inline: undefined,
    label: undefined
};

export default Highlight;
