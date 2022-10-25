import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@sc/ui';
import L from '../localize';
import PaymentModal from './PaymentModal';
import { interceptor } from '../../phone';
import s from './next.css';

const Payment = () => {
    const [opened, setOpened] = useState(false),
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

            <PaymentModal opened={opened} onClose={() => setOpened(false)} />
        </>
    );
};
export default Payment;
