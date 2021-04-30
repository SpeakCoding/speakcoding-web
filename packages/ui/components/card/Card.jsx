import React, { Children, useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import CardButton from './Button';
import s from './card.css';

const Card = ({ mode, children }) => {
    const { content, action } = useMemo(() => {
        const res = { content: [], action: null };
        Children.forEach(children, child => {
            if (child.type === CardButton) res.action = child;
            else res.content.push(child);
        });
        return res;
    }, []);

    return (
        <div className={s.area}>
            <div className={classNames(s.box, s[mode])}>
                <div className={s.pic} />
                <div className={s.content}>{content}</div>
                {action}
            </div>
        </div>
    );
};

Card.propTypes = {
    mode: pt.oneOf(['assignment', 'quiz', 'skill'])
};

Card.defaultProps = {
    mode: undefined
};

export default Card;
