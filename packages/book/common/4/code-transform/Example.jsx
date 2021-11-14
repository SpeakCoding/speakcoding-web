import React, { useState } from 'react';
import { FlagSteps } from '../../../components';
import { context } from './utils';
import { Step1, Step2, Step3 } from './Steps';
import s from './example.css';

const Example = () => {
    const [step, setStep] = useState(1);

    return (
        <div className={s.box}>
            <context.Provider value={{ step }}>
                <div className={s.code}>
                    <Step1 />
                    <Step2 />
                    <Step3 />
                </div>
            </context.Provider>
            <div className={s.flags}>
                <FlagSteps count={3} onChange={setStep} />
            </div>
        </div>
    );
};

export default Example;
