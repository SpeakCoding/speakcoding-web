import React, { useMemo } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import s from './layout.css';

const GlossaryLink = () => {
    const { profile } = useApp(),
        [{ pathname }, , , goBack] = useLocationState(),
        glossary = useMemo(() => /\/(en|ru)\/glossary/.test(pathname), [pathname]);

    if (!profile.is_paid) return null;

    return (
        <>
            {glossary && (
                <div className={s.glossary} onClick={goBack}>
                    <L lang='en'>Go back</L>
                    <L lang='ru'>Назад</L>
                </div>
            )}
            {!glossary && (
                <>
                    <L lang='en'>
                        <Link href='/en/glossary'>
                            <div className={s.glossary}>Glossary</div>
                        </Link>
                    </L>
                    <L lang='ru'>
                        <Link href='/ru/glossary'>
                            <div className={s.glossary}>Глоссарий</div>
                        </Link>
                    </L>
                </>
            )}
        </>
    );
};

export default GlossaryLink;
