import React from 'react';
import s from './modal.css';

const Title = ({ children }) => (
    <div className={s.title}>
        <h1>{children}</h1>
    </div>
);

export default Title;
