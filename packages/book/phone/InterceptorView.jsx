import React, { useEffect, useRef } from 'react';
import pt from 'prop-types';
import * as interceptor from './interceptor';

const InterceptorView = ({ rootMargin, threshold, children, onEnter, onExit }) => {
    const $ref = useRef();

    useEffect(() => {
        let prev = false;

        function handler(entries) {
            const entry = entries[0];

            if (entry.isIntersecting === prev) return;
            prev = entry.isIntersecting;

            if (entry.isIntersecting) onEnter(interceptor);
            else onExit(interceptor);
        }

        const observer = new IntersectionObserver(handler, { rootMargin, threshold });

        observer.observe($ref.current);

        return () => {
            observer.disconnect();
        };
    }, [onEnter, onExit]);

    useEffect(() => {
        interceptor.init();
    }, []);

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
