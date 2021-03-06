import React from 'react';
import s from './header.css';

const Header = ({ children }) => <div className={s.box}>{children}</div>;

Header.Left = ({ children }) => <div className={s.left}>{children}</div>;
Header.Right = ({ children }) => <div className={s.right}>{children}</div>;

export default Header;
