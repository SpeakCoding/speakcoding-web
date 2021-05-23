import React from 'react';
import s from './example.css';

const Body = ({ children }) => <div className={s.box}>{children}</div>;

Body.Input = ({ children }) => <div className={s.input}>{children}</div>;
Body.Type = ({ children }) => <div className={s.type}>{children}</div>;
Body.Equal = ({ children }) => <div className={s.equal}>{children}</div>;

export default Body;
