import React, { useState } from 'react';
import { Button } from '@sc/ui';
import { CourseSelect, Logo } from '../components';
import { usePayment } from './utils';
import s from './payment.css';

const Payment = () => {
    const pay = usePayment(),
        [intensity, setIntensity] = useState('extensive');

    return (
        <div className={s.box}>
            <div className={s.logo}>
                Speak <Logo size={80} /> Coding
            </div>
            <div className={s.content}>
                <div className={s.title}>Payment processing</div>
                <div className={s.message}>
                    When you click the button below, you'll be redirected to our Stripe account for
                    secure payment. SpeakCoding does not store your information
                </div>

                <div className={s.choose}>Choose your course:</div>
                <div className={s.intensity}>
                    <CourseSelect lang='en' onChange={setIntensity} />
                </div>

                <div className={s.action}>
                    <Button block size='large' onClick={() => pay(intensity)}>
                        Proceed to payment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
