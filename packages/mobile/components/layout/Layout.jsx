import React from 'react';
import pt from 'prop-types';
import s from './layout.css';

const Layout = ({ children, onReset }) => (
    <div className={s.box}>
        <div className={s.content}>{children}</div>
        <div className={s.reset} onClick={onReset} />
    </div>
);

Layout.propTypes = {
    onReset: pt.func
};

Layout.defaultProps = {
    onReset: () => {}
};

export default Layout;
