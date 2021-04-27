import React, { useContext } from 'react';
import pt from 'prop-types';
import { createPortal } from 'react-dom';
import { Link } from '@sc/ui';
import { context } from './utils';
import s from './layout.css';

const GlossaryLink = ({ href, children }) => {
    const { $menu } = useContext(context);

    if (!$menu) return null;

    return createPortal(
        <Link href={href}>
            <div className={s.glossary}>{children}</div>
        </Link>,
        $menu
    );
};

GlossaryLink.propTypes = {
    href: pt.string.isRequired
};

export default GlossaryLink;
