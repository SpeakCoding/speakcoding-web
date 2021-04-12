import React from 'react';
import s from './section.css';

const Section = ({ children }) => {
    return <div className={s.box}>{children}</div>;
};

export default Section;
