import React from 'react';
import s from './pre.css';

const Pre = ({ children }) => <pre className={s.box}>{children}</pre>;

export default Pre;
