import React, { useCallback, useContext } from 'react';
import pt from 'prop-types';
import { context, zoomIn, zoomOut } from './utils';
import s from './editor.css';

const getPart = (editorID, name) =>
    document.querySelector(`#${editorID} [data-editor-part="${name}"]`);

const Link = ({ name, children }) => {
    const { id } = useContext(context);

    const handleMouseOver = useCallback(() => {
        const $part = getPart(id, name);
        if ($part) zoomIn($part);
    }, [name]);

    const handleMouseLeave = useCallback(() => {
        const $part = getPart(id, name);
        if ($part) zoomOut($part);
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
