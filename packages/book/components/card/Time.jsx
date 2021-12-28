import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import Time from '../time';
import s from './card.css';

const CardTime = ({ absolute, color, value }) => (
    <div className={classNames(s.time, absolute && s.absolute)}>
        <Time.Task color={color} value={value} />
    </div>
);

CardTime.propTypes = {
    color: pt.string,
    absolute: pt.bool,
    value: pt.string
};

CardTime.defaultProps = {
    color: undefined,
    absolute: false,
    value: ''
};

export default CardTime;
