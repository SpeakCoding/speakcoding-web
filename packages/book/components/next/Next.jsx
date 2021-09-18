import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Link } from '@sc/ui';
import L from '../localize';
import s from './next.css';

const Next = ({ disabled, href, children }) => (
    <div className={s.box}>
        {disabled && (
            <div className={classNames(s.button, s.disabled)}>
                {children}
                {!children && (
                    <>
                        <L lang='en'>Next chapter</L>
                        <L lang='ru'>Следующая часть</L>
                    </>
                )}
            </div>
        )}
        {!disabled && (
            <Link href={href}>
                <div className={s.button}>
                    {children}
                    {!children && (
                        <>
                            <L lang='en'>Next chapter</L>
                            <L lang='ru'>Следующая часть</L>
                        </>
                    )}
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
