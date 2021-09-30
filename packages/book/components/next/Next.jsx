import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Link } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import s from './next.css';

const Next = ({ href, children }) => {
    const { profile, courses } = useApp(),
        lang = localStorage.getItem('lang'),
        max = profile.group.last_chapter_number,
        current = courses[lang]?.pos?.chapter,
        disabled = !href && current >= max;

    if (!href && !current) return null;

    const url = href || `chapter-${current + 1}`;

    return (
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
                <Link href={url}>
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
};

Next.propTypes = {
    href: pt.string
};

Next.defaultProps = {
    href: undefined
};

export default Next;
