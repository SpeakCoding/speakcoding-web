import React from 'react';
import pt from 'prop-types';
import s from './example.css';
import Left from './Left';
import Right from './Right';

const Example = ({ label }) => (
    <div className={s.box}>
        <div className={s.left}>
            <Left label={label} />
        </div>
        <div className={s.right}>
            <Right />
        </div>
    </div>
);

Example.propTypes = {
    label: pt.string.isRequired
};

export default Example;
