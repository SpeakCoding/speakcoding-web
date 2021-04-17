import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './structure.css';

const Structure = ({ bordered, children }) => (
    <div className={classNames(s.box, bordered && s.bordered)}>{children}</div>
);

Structure.propTypes = {
    bordered: pt.bool
};

Structure.defaultProps = {
    bordered: true
};

export default Structure;
