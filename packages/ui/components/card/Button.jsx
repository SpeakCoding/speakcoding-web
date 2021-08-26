import React from 'react';
import pt from 'prop-types';
import Button from '../button';
import Link from '../link';
import s from './card.css';

const CardButton = ({ href, children, onClick }) => {
    if (!href)
        return (
            <div className={s.action}>
                <Button icon='chevron-right-square' size='small' variant='white' onClick={onClick}>
                    {children}
                </Button>
            </div>
        );

    return (
        <div className={s.action}>
            <Link href={href} blank>
                <Button icon='chevron-right-square' size='small' variant='white'>
                    {children}
                </Button>
            </Link>
        </div>
    );
};

CardButton.propTypes = {
    href: pt.string,
    onClick: pt.func
};

CardButton.defaultProps = {
    href: undefined,
    onClick: undefined
};

export default CardButton;
