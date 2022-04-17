import React, { cloneElement, useContext, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { shape } from './utils';
import s from './highlight.css';

const $overlay = document.createElement('div');
$overlay.classList.add(s.overlay);
$overlay.dataset.role = 'phone-overlay';
$overlay.id = 'phone-overlay';

const $bg = document.createElement('div');
$bg.classList.add(s.bg);
$overlay.append($bg);

const Shape = ({ active, caption, label, variant, children }) => {
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

        if (!document.getElementById($overlay.id)) {
            $layout.after($overlay);
        }

        $shape.classList.add(s.shape);
        if (active) $shape.classList.add(s.active);
        if (label) $shape.dataset.highlightLabel = label;
        if (variant !== 'caption') $shape.dataset.passive = 'true';

        $clone.classList.add(s.clone, s[variant]);
        $clone.style.top = `${(item.top - box.top) / scale}px`;
        $clone.style.left = `${(item.left - box.left) / scale}px`;
        $clone.style.width = `${item.width / scale}px`;
        $clone.style.height = `${item.height / scale}px`;
        if (variant === 'caption') $clone.dataset.caption = caption;

        $clone.append($item.cloneNode(true));
        $shape.append($clone);
        $overlay.prepend($shape);

        return () => {
            $shape.remove();
        };
    }, [active, caption, label, rand, variant]);

    useEffect(() => {
        setTimeout(() => {
            setRand(Math.random());
        }, 500);
    }, [scale, refresh]);

    if (basic) return cloneElement(children, { ref: $ref });

    return <span ref={$ref}>{children}</span>;
};
Shape.propTypes = {
    active: pt.bool,
    caption: pt.string,
    label: pt.string,
    variant: pt.oneOf(['rect', 'circle', 'inset', 'caption'])
};

Shape.defaultProps = {
    active: false,
    caption: undefined,
    label: undefined,
    variant: 'rect'
};

export default Shape;
