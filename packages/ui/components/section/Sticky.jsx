import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './section.css';

const Sticky = ({ top, center, children }) => (
    <div className={classNames(s.sticky, center && s.center)} style={{ top }}>
        {children}
    </div>
);

Sticky.propTypes = {
    top: pt.string,
    center: pt.bool
};

Sticky.defaultProps = {
    top: '30vh',
    center: false
};

export default Sticky;
