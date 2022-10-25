import React, { useState } from 'react';
import pt from 'prop-types';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import CourseSelect from '../course-select';
import { usePayment } from '../../payment/utils';
import s from './modal.css';

const PaymentModal = ({ opened, onClose }) => {
    const [intensity, setIntensity] = useState(),
        pay = usePayment();

    return (
        <Modal opened={opened} onClose={onClose}>
            <div className={s.box}>
                <div className={s.img} />

                <div className={s.title}>
                    <L lang='en'>You’ve reached the end of the introductory&nbsp;part</L>
                    <L lang='ru'>Поздравляем, вы закончили вводную&nbsp;часть</L>
                </div>

                <div className={s.text}>
                    <L lang='en'>Proceed to payment to unlock the whole course</L>
                    <L lang='ru'>Перейдите к оплате, чтобы получить полный доступ к курсу</L>
                </div>

                <div className={s.choose}>
                    <L lang='en'>Choose your course:</L>
                    <L lang='ru'>Выберите курс:</L>
                </div>

                <div className={s.intensity}>
                    <CourseSelect onChange={setIntensity} />
                </div>

                <Button block disabled={!intensity} onClick={() => pay(intensity)}>
                    <L lang='en'>Proceed to payment</L>
                    <L lang='ru'>Перейти к оплате</L>
                </Button>
            </div>
        </Modal>
    );
};

PaymentModal.propTypes = {
    opened: pt.bool,
    onClose: pt.func
};

PaymentModal.defaultProps = {
    opened: false,
    onClose: () => {}
};

export default PaymentModal;
