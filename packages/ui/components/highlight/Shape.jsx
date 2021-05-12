import React, { cloneElement, useEffect, useRef } from 'react';
import pt from 'prop-types';
import s from './highlight.css';

const $overlay = document.createElement('div');
$overlay.classList.add(s.overlay);
$overlay.id = 'phone-overlay';

const $bg = document.createElement('div');
$bg.classList.add(s.bg);
$overlay.append($bg);

const Shape = ({ label, variant, children }) => {
    const $ref = useRef(),
        basic = typeof children.type === 'string';

    useEffect(() => {
        const $layout = document.getElementById('mobile-layout'),
            $shape = document.createElement('div'),
            $clone = document.createElement('div'),
            $item = basic ? $ref.current : $ref.current.children[0],
            box = $layout.getBoundingClientRect(),
            item = $item.getBoundingClientRect();

        if (!document.getElementById($overlay.id)) $layout.append($overlay);

        $shape.classList.add(s.shape);
        $shape.dataset.highlightLabel = label;
        $shape.dataset.passive = 'true';

        $clone.classList.add(s.clone, s[variant]);
        $clone.style.top = `${item.top - box.top}px`;
        $clone.style.left = `${item.left - box.left}px`;
        $clone.style.width = `${item.width}px`;
        $clone.style.height = `${item.height}px`;

        $clone.append($item.cloneNode(true));
        $shape.append($clone);
        $overlay.prepend($shape);
    }, [label]);

    if (basic) return cloneElement(children, { ref: $ref });

    return <span ref={$ref}>{children}</span>;
};
Shape.propTypes = {
    label: pt.string.isRequired,
    variant: pt.oneOf(['rect', 'circle', 'inset'])
};

Shape.defaultProps = {
    variant: 'rect'
};

export default Shape;
