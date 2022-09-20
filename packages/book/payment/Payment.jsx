import React, { useState } from 'react';
import { Button } from '@sc/ui';
import { CourseSelect, L, Logo } from '../components';
import { usePayment } from './utils';
import s from './payment.css';

const Payment = () => {
    const pay = usePayment(),
        [intensity, setIntensity] = useState();

    return (
        <div className={s.box}>
            <div className={s.logo}>
                Speak <Logo size={80} /> Coding
            </div>
            <div className={s.content}>
                <h1 className={s.title}>
                    <L lang='en'>Payment processing</L>
                    <L lang='ru'>Оплата</L>
                </h1>
                <div className={s.message}>
                    <L lang='en'>
                        When you click the button below, you'll be redirected to our Stripe account
                        for secure payment. SpeakCoding does not store your information.
                    </L>
                    <L lang='ru'>
                        После нажатия кнопки ниже вы будете перенаправлены на нашу страницу в Stripe
                        для безопасной оплаты. SpeakCoding не хранит вашу платежную информацию.
                    </L>
                </div>

                <div className={s.choose}>
                    <L lang='en'>Choose your course:</L>
                    <L lang='ru'>Выберите курс:</L>
                </div>
                <div className={s.intensity}>
                    <CourseSelect onChange={setIntensity} />
                </div>

                <div className={s.action}>
                    <Button block disabled={!intensity} onClick={() => pay(intensity)}>
                        <L lang='en'>Proceed to payment</L>
                        <L lang='ru'>Перейти к оплате</L>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
