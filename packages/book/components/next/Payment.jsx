import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import CourseSelect from '../course-select';
import { usePayment } from '../../payment/utils';
import { interceptor } from '../../phone';
import s from './next.css';
import m from './modal.css';

const Payment = () => {
    const [opened, setOpened] = useState(false),
        [intensity, setIntensity] = useState('extensive'),
        pay = usePayment(),
        $ref = useRef();

    useEffect(() => {
        function handler(entries) {
            if (entries[0].isIntersecting) interceptor.close();
        }

        const observer = new IntersectionObserver(handler);
        observer.observe($ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={$ref} className={s.box}>
                <div className={s.button} onClick={() => setOpened(true)}>
                    <L book='en'>Continue</L>
                    <L book='ru'>Далее</L>
                </div>
            </div>

            <Modal opened={opened} onClose={() => setOpened(false)}>
                <div className={m.box}>
                    <div className={m.img} />

                    <div className={m.title}>
                        <L book='en'>
                            You've reached the end of the introduction of Chapter&nbsp;I
                        </L>
                        <L book='ru'>Поздравляем, вы закончили вводную часть первой&nbsp;главы</L>
                    </div>

                    <div className={m.text}>
                        <L book='en'>Proceed to payment to unlock the whole course</L>
                        <L book='ru'>Перейдите к оплате, чтобы получить полный доступ к курсу</L>
                    </div>

                    <div className={m.choose}>
                        <L book='en'>Choose your course:</L>
                        <L book='ru'>Выберите курс:</L>
                    </div>

                    <div className={m.intensity}>
                        <CourseSelect onChange={setIntensity} />
                    </div>

                    <Button size='large' block onClick={() => pay(intensity)}>
                        <L book='en'>Proceed to payment</L>
                        <L book='ru'>Перейти к оплате</L>
                    </Button>
                </div>
            </Modal>
        </>
    );
};
export default Payment;
