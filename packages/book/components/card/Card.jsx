import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './card.css';

const Card = ({ variant, children }) => (
    <div className={s.wrapper}>
        <div className={classNames(s.box, s[variant])}>
            <div className={s.content}>{children}</div>
            <div className={s.icon} />
        </div>
    </div>
);

Card.propTypes = {
    variant: pt.oneOf(['quiz', 'assignment', 'skill'])
};

Card.defaultProps = {
    variant: undefined
};

export default Card;
