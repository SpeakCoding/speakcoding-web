import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { context } from './utils';
import s from './card.css';

const Card = ({ mode, children }) => {
    const $action = useRef(),
        [value, setValue] = useState({ $action: null });

    useEffect(() => {
        setValue({ $action: $action.current });
    }, []);

    return (
        <div className={s.area}>
            <div className={classNames(s.box, s[mode])}>
                <div className={s.pic} />
                <div className={s.content}>
                    <context.Provider value={value}>{children}</context.Provider>
                </div>
                <div ref={$action} />
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
