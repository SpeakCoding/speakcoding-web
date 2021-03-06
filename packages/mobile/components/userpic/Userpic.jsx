import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './userpic.css';

const Userpic = ({ href, size, onClick }) => (
    <img
        className={classNames(s.box, !!onClick && s.active)}
        style={{
            width: size && `${size}px`,
            height: size && `${size}px`
        }}
        src={href}
        alt=''
        onClick={onClick}
    />
);

Userpic.propTypes = {
    href: pt.string,
    size: pt.number,
    onClick: pt.func
};

Userpic.defaultProps = {
    href: undefined,
    size: undefined,
    onClick: undefined
};

export default Userpic;
