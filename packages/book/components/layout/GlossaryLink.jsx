import React, { useCallback, useMemo } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import s from './layout.css';

const GlossaryLink = () => {
    const { profile } = useApp(),
        [{ pathname }, navigate] = useLocationState(),
        glossary = useMemo(() => /\/(en|ru)\/glossary/.test(pathname), [pathname]);

    const goBack = useCallback(() => navigate(-1), []);

    if (!profile.is_paid) return null;

    return (
        <>
            {glossary && (
                <div className={s.link} onClick={goBack}>
                    <div className={s.back}>
                        <L lang='en'>Back to chapter</L>
                        <L lang='ru'>Вернуться к главе</L>
                    </div>
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
