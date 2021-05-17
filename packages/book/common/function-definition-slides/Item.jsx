import React from 'react';
import s from './slides.css';

const Item = ({ children }) => (
    <div className={s.slide} data-slide='true'>
        {children}
    </div>
);

export default Item;
