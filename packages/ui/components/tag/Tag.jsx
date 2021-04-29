import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './tag.css';

const Tag = ({ color, children }) => <div className={classNames(s.box, s[color])}>{children}</div>;

Tag.propTypes = {
    color: pt.oneOf(['primary', 'grey'])
};

Tag.defaultProps = {
    color: 'primary'
};

export default Tag;
