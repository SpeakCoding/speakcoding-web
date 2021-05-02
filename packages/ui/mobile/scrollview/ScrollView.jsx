import React from 'react';
import pt from 'prop-types';
import s from './scrollview.css';

const ScrollView = ({ children, ...props }) => (
    <div className={s.box}>
        <div className={s.scroll} data-role={props['data-role']}>
            {children}
        </div>
    </div>
);

ScrollView.propTypes = {
    'data-role': pt.string
};

ScrollView.defaultProps = {
    'data-role': 'scroll-view'
};

export default ScrollView;
