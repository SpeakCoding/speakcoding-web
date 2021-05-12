import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@sc/ui';
import { useAPI } from '../tools';
import { Logo } from '../components';
import s from './payment.css';

const key =
    'pk_live_51Ii7pwBqu9giiF9Su68omb9BAomy4pthUTcOaExyQSiAsatbAjBymqfpBhdduLJkxjuGDbCf4L4HcfZN7J2UEHxS00jJriFOuQ';

const stripePromise = loadStripe(key);

const Payment = () => {
    const fetch = useAPI();

    const handlePay = useCallback(async () => {
        const stripe = await stripePromise,
            { data } = await fetch('/stripe/checkout_sessions.json', { method: 'POST' });

        stripe.redirectToCheckout({ sessionId: data?.id });
    }, []);

    return (
        <div className={s.box}>
            <div className={s.logo}>
                Speak <Logo size={80} /> Coding
            </div>
            <div className={s.content}>
                <div className={s.title}>Pay for the course</div>
                <div className={s.message}>
                    Please make the payment, after that you can <br /> enjoy the course
                </div>
                <div className={s.action}>
                    <Button block onClick={handlePay}>
                        Proceed to payment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
