import React from 'react';
import Value from './Value';
import s from './time.css';

const Chapter = props => (
    <div className={s.chapter}>
        <Value mode='chapter' {...props} />
    </div>
);

export default Chapter;
