/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import s from './header.css';

const Header = ({ children }) => <div className={s.box}>{children}</div>;

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
