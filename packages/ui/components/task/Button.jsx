import React from 'react';
import pt from 'prop-types';
import Button from '../button';
import Link from '../link';
import s from './task.css';

const TaskButton = ({ href, icon, children }) => (
    <div className={s.button}>
        <Link href={href}>
            <Button icon={icon}>{children}</Button>
        </Link>
    </div>
);

TaskButton.propTypes = {
    href: pt.string,
    icon: pt.string
};

TaskButton.defaultProps = {
    href: '#',
    icon: undefined
};

export default TaskButton;
