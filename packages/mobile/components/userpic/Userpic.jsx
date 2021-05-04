import React, { useCallback, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './userpic.css';
import placeholder from './placeholder.svg';

const Userpic = ({ href, size, onClick, ...props }) => {
    const [src, setSrc] = useState(href || placeholder),
        initial = useRef(true);

    const handleError = useCallback(() => setSrc(placeholder), []);

    useEffect(() => {
        if (!initial.current) setSrc(href);
        initial.current = false;
    }, [href]);

    return (
        <img
            key={src}
            className={classNames(s.box, !!onClick && s.active)}
            style={{
                width: size && `${size}px`,
                height: size && `${size}px`
            }}
            src={src}
            alt=''
            loading='lazy'
            data-role={props['data-role']}
            onClick={onClick}
            onError={handleError}
        />
    );
};

Userpic.propTypes = {
    href: pt.string,
    size: pt.number,
    'data-role': pt.string,
    onClick: pt.func
};

Userpic.defaultProps = {
    href: placeholder,
    size: undefined,
    'data-role': undefined,
    onClick: undefined
};

export default Userpic;
