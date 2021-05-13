import React, { cloneElement, useContext, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { shape } from './utils';
import s from './highlight.css';

const $overlay = document.createElement('div');
$overlay.classList.add(s.overlay);
$overlay.id = 'phone-overlay';

const $bg = document.createElement('div');
$bg.classList.add(s.bg);
$overlay.append($bg);

const Shape = ({ label, variant, children }) => {
    const $ref = useRef(),
        basic = typeof children.type === 'string',
        { scale, refresh } = useContext(shape),
        [rand, setRand] = useState(0);

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
        $clone.style.top = `${(item.top - box.top) / scale}px`;
        $clone.style.left = `${(item.left - box.left) / scale}px`;
        $clone.style.width = `${item.width / scale}px`;
        $clone.style.height = `${item.height / scale}px`;

        $clone.append($item.cloneNode(true));
        $shape.append($clone);
        $overlay.prepend($shape);

        return () => {
            $shape.remove();
        };
    }, [label, rand]);

    useEffect(() => {
        setTimeout(() => {
            setRand(Math.random());
        }, 300);
    }, [scale, refresh]);

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
