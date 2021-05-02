import React, { useEffect, useRef } from 'react';
import pt from 'prop-types';
import * as interceptor from './interceptor';

const InterceptorView = ({ rootMargin, threshold, children, onOpen, onClose }) => {
    const $ref = useRef();

    useEffect(() => {
        let prev = false;

        function handler(entries) {
            const entry = entries[0];

            if (entry.isIntersecting === prev) return;
            prev = entry.isIntersecting;

            if (entry.isIntersecting) {
                interceptor.open();
                onOpen(interceptor);
            } else {
                interceptor.close();
                onClose(interceptor);
            }
        }

        const observer = new IntersectionObserver(handler, { rootMargin, threshold });

        observer.observe($ref.current);

        return () => {
            observer.disconnect();
        };
    }, [onOpen, onClose]);

    return <div ref={$ref}>{children}</div>;
};

InterceptorView.propTypes = {
    rootMargin: pt.string,
    threshold: pt.oneOfType([pt.number, pt.array]),
    onOpen: pt.func,
    onClose: pt.func
};

InterceptorView.defaultProps = {
    rootMargin: '-400px 0px -400px 0px',
    threshold: 0,
    onOpen: () => {},
    onClose: () => {}
};

export default InterceptorView;
