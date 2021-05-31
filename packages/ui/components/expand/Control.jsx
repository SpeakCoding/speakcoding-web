import { cloneElement, useCallback } from 'react';
import pt from 'prop-types';

const Control = ({ htmlFor, children }) => {
    const onClick = useCallback(() => {
        const $node = document.getElementById(htmlFor);
        if ($node) $node.dataset.expanded = $node.dataset.expanded === 'false';
    }, [htmlFor]);

    return cloneElement(children, { onClick });
};

Control.propTypes = {
    htmlFor: pt.string.isRequired
};

export default Control;
