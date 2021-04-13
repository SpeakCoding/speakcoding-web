import React from 'react';
import { Button } from '@sc/ui';
import s from './task.css';

const TaskButton = ({ children }) => (
    <div className={s.button}>
        <Button icon='chevron-right'>{children}</Button>
    </div>
);

export default TaskButton;
