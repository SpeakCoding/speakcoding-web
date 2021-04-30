import React from 'react';
import pt from 'prop-types';
import Button from '../button';
import Link from '../link';
import s from './card.css';

const CardButton = ({ href, children }) => (
    <div className={s.action}>
        <Link href={href} blank>
            <Button icon='chevron-right' size='small' variant='white'>
                {children}
            </Button>
        </Link>
    </div>
);

CardButton.propTypes = {
    href: pt.string.isRequired
};

export default CardButton;
