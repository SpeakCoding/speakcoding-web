import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { state } from './utils';
import s from './lottie.css';

const IntersectionBox = ({ rootMargin, threshold, children }) => {
    const $ref = useRef(),
        [intersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let prev = false;

        function handler(entries) {
            const entry = entries[0];

            if (entry.isIntersecting === prev) return;
            prev = entry.isIntersecting;

            setIntersecting(entry.isIntersecting);
        }

        const observer = new IntersectionObserver(handler, { rootMargin, threshold });

        observer.observe($ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={$ref} className={s.box}>
            <state.Provider value={{ type: 'intersection', intersecting }}>
                {children}
            </state.Provider>
        </div>
    );
};

IntersectionBox.propTypes = {
    rootMargin: pt.string,
    threshold: pt.oneOfType([pt.number, pt.array])
};

IntersectionBox.defaultProps = {
    rootMargin: '-400px 0px -400px 0px',
    threshold: 0
};

export default IntersectionBox;
