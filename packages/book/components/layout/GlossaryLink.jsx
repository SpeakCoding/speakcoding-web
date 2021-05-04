import React, { useContext, useMemo } from 'react';
import pt from 'prop-types';
import { createPortal } from 'react-dom';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import L from '../localize';
import { context } from './utils';
import s from './layout.css';

const GlossaryLink = ({ href, children }) => {
    const { $menu } = useContext(context),
        [{ pathname }, , , goBack] = useLocationState(),
        glossary = useMemo(() => /\/(en|ru)\/glossary/.test(pathname), [pathname]);

    if (!$menu) return null;

    return createPortal(
        <>
            {glossary && (
                <div className={s.glossary} onClick={goBack}>
                    <L book='en'>Go back</L>
                    <L book='ru'>Назад</L>
                </div>
            )}
            {!glossary && (
                <Link href={href}>
                    <div className={s.glossary}>{children}</div>
                </Link>
            )}
        </>,
        $menu
    );
};

GlossaryLink.propTypes = {
    href: pt.string.isRequired
};

export default GlossaryLink;
