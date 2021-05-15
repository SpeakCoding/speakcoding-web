import React from 'react';
import pt from 'prop-types';
import { Link } from '@sc/ui';
import L from '../localize';
import s from './next.css';

const Next = ({ href }) => (
    <div className={s.box}>
        <Link href={href}>
            <div className={s.button}>
                <L book='en'>Next chapter</L>
                <L book='ru'>Следующая часть</L>
            </div>
        </Link>
    </div>
);

Next.propTypes = {
    href: pt.string.isRequired
};

export default Next;
