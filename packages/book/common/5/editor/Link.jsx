import React, { useCallback } from 'react';
import pt from 'prop-types';
import { updateZIndex } from './utils';
import s from './editor.css';

const getPart = name => document.querySelector(`[data-editor-part="${name}"]`);

const Link = ({ name, children }) => {
    const handleMouseOver = useCallback(() => {
        const $part = getPart(name);
        if ($part) {
            updateZIndex($part);
            $part.dataset.active = 'true';
        }
    }, [name]);

    const handleMouseLeave = useCallback(() => {
        const $part = getPart(name);
        if ($part) delete $part.dataset.active;
    }, [name]);

    return (
        <span className={s.link} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {children}
        </span>
    );
};

Link.propTypes = {
    name: pt.string.isRequired
};

export default Link;
