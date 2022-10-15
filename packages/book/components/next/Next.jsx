import React from 'react';
import pt from 'prop-types';
import { Button, Link } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import Payment from './Payment';
import s from './next.css';

const Next = ({ href, children }) => {
    const { profile, courses } = useApp(),
        lang = localStorage.getItem('lang'),
        max = profile.group.last_chapter_number,
        current = courses[lang]?.pos?.chapter,
        disabled = !href && current >= max;

    if (!href && !current) return null;

    const url = href || `../chapter-${current + 1}`;

    if (!profile.is_paid && current >= max) return <Payment />;

    return (
        <div className={s.box}>
            {disabled && (
                <Button color='black' size='large' variant='arrow'>
                    {children}
                    {!children && (
                        <>
                            <L lang='en'>Next chapter</L>
                            <L lang='ru'>Следующая часть</L>
                        </>
                    )}
                </Button>
            )}

            {!disabled && (
                <Link href={url}>
                    <Button color='black' size='large' variant='arrow'>
                        {children}
                        {!children && (
                            <>
                                <L lang='en'>Next chapter</L>
                                <L lang='ru'>Следующая часть</L>
                            </>
                        )}
                    </Button>
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
