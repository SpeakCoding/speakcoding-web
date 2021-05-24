import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './section.css';

const Main = ({ narrow, children }) => (
    <div className={classNames(s.main, narrow && s.narrow)}>{children}</div>
);

Main.propTypes = {
    narrow: pt.bool
};

Main.defaultProps = {
    narrow: false
};

export default Main;
