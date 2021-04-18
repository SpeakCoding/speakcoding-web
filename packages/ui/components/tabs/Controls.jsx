import React from 'react';
import pt from 'prop-types';
import s from './tabs.css';

const Controls = ({ top, children }) => (
    <div className={s.controls} style={{ top }}>
        {children}
    </div>
);

Controls.propTypes = {
    top: pt.string
};

Controls.defaultProps = {
    top: undefined
};

export default Controls;
