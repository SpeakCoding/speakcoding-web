import React, { useMemo } from 'react';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import L from '../localize';
import s from './layout.css';

const GlossaryLink = () => {
    const [{ pathname }, , , goBack] = useLocationState(),
        glossary = useMemo(() => /\/(en|ru)\/glossary/.test(pathname), [pathname]);

    return (
        <>
            {glossary && (
                <div className={s.glossary} onClick={goBack}>
                    <L book='en'>Go back</L>
                    <L book='ru'>Назад</L>
                </div>
            )}
            {!glossary && (
                <>
                    <L book='en'>
                        <Link href='/en/glossary'>
                            <div className={s.glossary}>Glossary</div>
                        </Link>
                    </L>
                    <L book='ru'>
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
