import React, { useState } from 'react';
import Code from './Code';
import Flags from './Flags';
import s from './example.css';

const Example = () => {
    const [step, setStep] = useState(1);

    return (
        <div className={s.box}>
            <div className={s.code}>
                <Code step={step} />
            </div>
            <div className={s.img}>img</div>
            <div className={s.flags}>
                <Flags count={4} onChange={setStep} />
            </div>
        </div>
    );
};

export default Example;
