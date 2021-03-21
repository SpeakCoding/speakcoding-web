import React, { useCallback, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './userpic.css';
import placeholder from './placeholder.svg';

const Userpic = ({ href, size, onClick }) => {
    const [src, setSrc] = useState(href || placeholder);

    const handleError = useCallback(() => setSrc(placeholder), []);

    return (
        <img
            className={classNames(s.box, !!onClick && s.active)}
            style={{
                width: size && `${size}px`,
                height: size && `${size}px`
            }}
            src={src}
            alt=''
            loading='lazy'
            onClick={onClick}
            onError={handleError}
        />
    );
};

Userpic.propTypes = {
    href: pt.string,
    size: pt.number,
    onClick: pt.func
};

Userpic.defaultProps = {
    href: placeholder,
    size: undefined,
    onClick: undefined
};

export default Userpic;
