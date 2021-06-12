import { cloneElement, useCallback } from 'react';
import pt from 'prop-types';
import { expanded } from './utils';

const Control = ({ htmlFor, children }) => {
    const onClick = useCallback(() => {
        const $node = document.getElementById(htmlFor);
        if ($node) {
            const value = $node.dataset.expanded === 'false';
            expanded.set(htmlFor, value);
            $node.dataset.expanded = value;
        }
    }, [htmlFor]);

    return cloneElement(children, { onClick });
};

Control.propTypes = {
    htmlFor: pt.string.isRequired
};

export default Control;
