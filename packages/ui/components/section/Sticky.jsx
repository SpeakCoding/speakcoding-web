import React from 'react';
import pt from 'prop-types';
import s from './section.css';

const Sticky = ({ top, children }) => (
    <div className={s.sticky} style={{ top }}>
        {children}
    </div>
);

Sticky.propTypes = {
    top: pt.string
};

Sticky.defaultProps = {
    top: '30vh'
};

export default Sticky;
