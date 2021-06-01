import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';

let current;

const InterceptorView = ({ rootMargin, threshold, children, onEnter, onExit }) => {
    const $ref = useRef(),
        [id] = useState(Math.random());

    useEffect(() => {
        let prev = false;

        function handler(entries) {
            const entry = entries[0];

            if (entry.isIntersecting === prev) return;
            prev = entry.isIntersecting;

            if (entry.isIntersecting) {
                current = id;
                onEnter();
            } else if (id === current) {
                onExit();
            }
        }

        const observer = new IntersectionObserver(handler, { rootMargin, threshold });

        observer.observe($ref.current);

        return () => {
            observer.disconnect();
        };
    }, [onEnter, onExit]);

    return <div ref={$ref}>{children}</div>;
};

InterceptorView.propTypes = {
    rootMargin: pt.string,
    threshold: pt.oneOfType([pt.number, pt.array]),
    onEnter: pt.func,
    onExit: pt.func
};

InterceptorView.defaultProps = {
    rootMargin: '-400px 0px -400px 0px',
    threshold: 0,
    onEnter: () => {},
    onExit: () => {}
};

export default InterceptorView;
