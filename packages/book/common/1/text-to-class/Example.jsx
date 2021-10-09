import React, { useState } from 'react';
import { Img } from '@sc/ui';
import Flags from './Flags';
import img from './instagram.png';
import { context } from './utils';
import s from './example.css';

const Example = ({ children }) => {
    const [step, setStep] = useState(1);

    return (
        <div className={s.box}>
            <context.Provider value={{ step }}>
                <div className={s.code}>{children}</div>
            </context.Provider>
            <div className={s.view}>
                <Img src={img} className={s.img} />
            </div>
            <div className={s.flags}>
                <Flags count={4} onChange={setStep} />
            </div>
        </div>
    );
};

export default Example;
