import React from 'react';
import Code from './Code';
import s from './pre.css';

const Pre = ({ children, ...props }) => (
    <div className={s.box}>
        <Code {...props}>{children}</Code>
    </div>
);

export default Pre;
