import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { context, item } from './utils';
import s from './accordion.css';

const Label = ({ align, expanded: initial, name, children }) => {
    const { expanded, setExpanded } = useContext(context),
        value = useMemo(() => ({ name, expanded }), [name, expanded]);

    const handleClick = useCallback(() => setExpanded(name), [name, setExpanded]);

    useEffect(() => {
        if (initial) setExpanded(name);
    }, []);

    return (
        <div className={classNames(s.label, s[align])} onClick={handleClick}>
            <item.Provider value={value}>{children}</item.Provider>
        </div>
    );
};

Label.propTypes = {
    align: pt.oneOf(['top', 'center']),
    expanded: pt.bool,
    name: pt.oneOfType([pt.string, pt.number]).isRequired
};

Label.defaultProps = {
    align: 'top',
    expanded: false
};

export default Label;
