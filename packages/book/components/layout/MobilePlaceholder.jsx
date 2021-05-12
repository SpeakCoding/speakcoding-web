import React from 'react';
import L from '../localize';
import s from './placeholder.css';

const MobilePlaceholder = () => (
    <div className={s.box}>
        <div className={s.content}>
            <L book='en'>
                This product was created for desktop. Mobile version is yet to be released.
            </L>
            <L book='ru'>
                This product was created for desktop. Mobile version is yet to be released.
            </L>
        </div>
    </div>
);

export default MobilePlaceholder;
