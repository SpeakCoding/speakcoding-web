import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Link } from '@sc/ui';
import L from '../localize';
import s from './next.css';

const Next = ({ disabled, href }) => (
    <div className={s.box}>
        {disabled && (
            <div className={classNames(s.button, s.disabled)}>
                <L book='en'>Next chapter</L>
                <L book='ru'>Следующая часть</L>
            </div>
        )}
        {!disabled && (
            <Link href={href}>
                <div className={s.button}>
                    <L book='en'>Next chapter</L>
                    <L book='ru'>Следующая часть</L>
                </div>
            </Link>
        )}
    </div>
);

Next.propTypes = {
    disabled: pt.bool,
    href: pt.string.isRequired
};

Next.defaultProps = {
    disabled: false
};

export default Next;
