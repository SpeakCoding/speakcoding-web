import React from 'react';
import pt from 'prop-types';
import Time from '../time';
import s from './card.css';

const CardTime = ({ value }) => (
    <div className={s.time}>
        <Time.Task value={value} />
    </div>
);

CardTime.propTypes = {
    value: pt.string
};

CardTime.defaultProps = {
    value: ''
};

export default CardTime;
