/* eslint-disable react/no-array-index-key,import/no-unresolved */
import React, { useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './flags.css';

const Step = ({ active, current, onClick }) => (
    <div className={classNames(s.step, active && s.active, current && s.current)} onClick={onClick}>
        <div className={s.circle} />
        <div className={s.bar} />
    </div>
);

Step.propTypes = {
    active: pt.bool,
    current: pt.bool,
    onClick: pt.func
};

Step.defaultProps = {
    active: false,
    current: false,
    onClick: () => {}
};

const Flags = ({ count, step: initial, onChange }) => {
    const [step, setStep] = useState(initial);

    const select = i => {
        setStep(i);
        onChange(i);
    };

    return (
        <div className={s.box}>
            {[...Array(count)].map((_, i) => (
                <Step
                    key={i}
                    active={i < step}
                    current={i + 1 === step}
                    onClick={() => select(i + 1)}
                />
            ))}
        </div>
    );
};

Flags.propTypes = {
    count: pt.number,
    step: pt.number,
    onChange: pt.func
};

Flags.defaultProps = {
    count: 1,
    step: 1,
    onChange: () => {}
};

export default Flags;
