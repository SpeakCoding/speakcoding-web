import React, { useContext } from 'react';
import pt from 'prop-types';
import { createPortal } from 'react-dom';
import Button from '../button';
import Link from '../link';
import { context } from './utils';
import s from './card.css';

const CardButton = ({ href, children }) => {
    const { $action } = useContext(context);

    if (!$action) return null;

    return createPortal(
        <div className={s.action}>
            <Link href={href} blank>
                <Button icon='chevron-right' size='small'>
                    {children}
                </Button>
            </Link>
        </div>,
        $action
    );
};

CardButton.propTypes = {
    href: pt.string.isRequired
};

export default CardButton;
