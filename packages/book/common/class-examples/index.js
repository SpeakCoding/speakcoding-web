import React from 'react';
import s from './example.css';
import Left from './Left';
import Right from './Right';

const Example = () => (
    <div className={s.box}>
        <div className={s.left}>
            <Left />
        </div>
        <div className={s.right}>
            <Right />
        </div>
    </div>
);

export default Example;
