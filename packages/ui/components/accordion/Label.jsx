import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import pt from 'prop-types';
import { context, item } from './utils';
import s from './accordion.css';

const Label = ({ name, expanded: initial, children }) => {
    const { expanded, setExpanded } = useContext(context),
        value = useMemo(() => ({ name, expanded }), [name, expanded]);

    const handleClick = useCallback(() => setExpanded(name), [name, setExpanded]);

    useEffect(() => {
        if (initial) setExpanded(name);
    }, []);

    return (
        <div className={s.label} onClick={handleClick}>
            <item.Provider value={value}>{children}</item.Provider>
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
