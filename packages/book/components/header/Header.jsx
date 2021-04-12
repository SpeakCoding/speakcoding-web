import React from 'react';
import s from './header.css';

const Header = ({ children }) => {
    return <div className={s.box}>{children}</div>;
};

export default Header;
