import React, { useCallback, useContext, useEffect } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import { context } from './utils';
import s from './accordion.css';

const Label = ({ name, expanded: initial, children }) => {
    const { expanded, setExpanded } = useContext(context);

    const handleClick = useCallback(() => setExpanded(name), [name, setExpanded]);

    useEffect(() => {
        if (initial) setExpanded(name);
    }, []);

    return (
        <div className={s.label} onClick={handleClick}>
            <div className={s.control}>{children}</div>
            <div className={classNames(s.icon, expanded === name && s.expanded)}>
                <Icon name='chevron-right' size={24} />
            </div>
        </div>
    );
};

Label.propTypes = {
    expanded: pt.bool,
    name: pt.oneOfType([pt.string, pt.number]).isRequired
};

Label.defaultProps = {
    expanded: false
};

export default Label;
