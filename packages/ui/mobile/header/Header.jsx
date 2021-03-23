/* eslint-disable react/prop-types */
import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './header.css';

const Header = ({ border, children }) => (
    <div className={classNames(s.box, border && s.border)}>{children}</div>
);

Header.propTypes = {
    border: pt.bool
};

Header.defaultProps = {
    border: true
};

Header.Left = ({ children, onClick }) => (
    <div className={classNames(s.left, !!onClick && s.active)} onClick={onClick}>
        {children}
    </div>
);

Header.Right = ({ children, onClick }) => (
    <div className={classNames(s.right, !!onClick && s.active)} onClick={onClick}>
        {children}
    </div>
);

export default Header;
