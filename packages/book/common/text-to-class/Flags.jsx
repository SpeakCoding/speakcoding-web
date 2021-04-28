/* eslint-disable react/no-array-index-key,import/no-unresolved */
import React, { useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './flags.css';

const Step = ({ active, current, hint, onClick }) => (
    <div className={classNames(s.step, active && s.active, current && s.current)} onClick={onClick}>
        <div className={s.circle}>{hint && <div className={s.hint}>Click here</div>}</div>
        <div className={s.bar} />
    </div>
);

Step.propTypes = {
    active: pt.bool,
    current: pt.bool,
    hint: pt.bool,
    onClick: pt.func
};

Step.defaultProps = {
    active: false,
    current: false,
    hint: true,
    onClick: () => {}
};

const Flags = ({ count, step: initial, onChange }) => {
    const [step, setStep] = useState(initial),
        [pure, setPure] = useState(true);

    const select = i => {
        setStep(i);
        setPure(false);
        onChange(i);
    };

    return (
        <div className={s.box}>
            {[...Array(count)].map((_, i) => (
                <Step
                    key={i}
                    active={i < step}
                    current={i + 1 === step}
                    hint={i === 1 && pure}
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
