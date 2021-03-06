import React, { useCallback, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { Icon } from '@sc/ui';
import classNames from 'classnames';
import s from './post.css';

const ActionIcon = ({ active, name, onClick }) => {
    const [value, setValue] = useState(active),
        count = useRef(0);

    const inc = () => {
        count.current = Math.min(count.current + 1, 2);
    };

    const handleClick = useCallback(() => {
        inc();
        onClick();
    }, [onClick]);

    useEffect(() => {
        inc();
        setValue(active);
    }, [active]);

    return (
        <div
            className={classNames(s.action, {
                [s.freeze]: count.current < 2,
                [s.active]: value,
                [s.inactive]: !value
            })}
            onClick={handleClick}
        >
            <Icon name={name} size={24} />
        </div>
    );
};

ActionIcon.propTypes = {
    active: pt.bool,
    name: pt.string.isRequired,
    onClick: pt.func
};

ActionIcon.defaultProps = {
    active: false,
    onClick: () => {}
};

export default ActionIcon;
