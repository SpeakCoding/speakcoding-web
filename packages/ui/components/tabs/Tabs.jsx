import React, { useCallback, useState } from 'react';
import pt from 'prop-types';
import { context } from './utils';
import s from './tabs.css';

const Tabs = ({ value, children, onChange }) => {
    const [tab, setTab] = useState(value);

    const handleChange = useCallback(
        next => {
            setTab(next);
            onChange(next);
        },
        [onChange]
    );

    return (
        <context.Provider value={{ tab, setTab: handleChange }}>
            <div className={s.box}>{children}</div>
        </context.Provider>
    );
};

Tabs.propTypes = {
    value: pt.string,
    onChange: pt.func
};

Tabs.defaultProps = {
    value: undefined,
    onChange: () => {}
};

export default Tabs;
