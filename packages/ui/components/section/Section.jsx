import React from 'react';
import s from './section.css';

const Section = ({ children }) => <div className={s.box}>{children}</div>;

export default Section;
