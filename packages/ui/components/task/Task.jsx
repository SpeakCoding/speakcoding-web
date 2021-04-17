import React from 'react';
import s from './task.css';

const Task = ({ children }) => <div className={s.box}>{children}</div>;

export default Task;
