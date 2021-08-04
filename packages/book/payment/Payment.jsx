import React from 'react';
import { Button } from '@sc/ui';
import { Logo } from '../components';
import { usePayment } from './utils';
import s from './payment.css';

const Payment = () => {
    const pay = usePayment();

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
                <div className={s.action}>
                    <Button block onClick={pay}>
                        Proceed to payment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
