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
        [intensity, setIntensity] = useState(),
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
                <Button color='black' size='large' variant='arrow' onClick={() => setOpened(true)}>
                    <L lang='en'>Continue</L>
                    <L lang='ru'>Далее</L>
                </Button>
            </div>

            <Modal opened={opened} onClose={() => setOpened(false)}>
                <div className={m.box}>
                    <div className={m.img} />

                    <div className={m.title}>
                        <L lang='en'>
                            You've reached the end of the introduction of Chapter&nbsp;I
                        </L>
                        <L lang='ru'>Поздравляем, вы закончили вводную часть первой&nbsp;главы</L>
                    </div>

                    <div className={m.text}>
                        <L lang='en'>Proceed to payment to unlock the whole course</L>
                        <L lang='ru'>Перейдите к оплате, чтобы получить полный доступ к курсу</L>
                    </div>

                    <div className={m.choose}>
                        <L lang='en'>Choose your course:</L>
                        <L lang='ru'>Выберите курс:</L>
                    </div>

                    <div className={m.intensity}>
                        <CourseSelect onChange={setIntensity} />
                    </div>

                    <Button block disabled={!intensity} onClick={() => pay(intensity)}>
                        <L lang='en'>Proceed to payment</L>
                        <L lang='ru'>Перейти к оплате</L>
                    </Button>
                </div>
            </Modal>
        </>
    );
};
export default Payment;
