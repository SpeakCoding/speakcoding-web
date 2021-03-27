import React, { useCallback, useContext, useEffect, useRef } from 'react';
import pt from 'prop-types';
import { context } from './utils';
import s from './action-sheet.css';

const delay = 300;

const Option = ({ children, onClick }) => {
    const { close } = useContext(context),
        timer = useRef(0);

    const handleClick = useCallback(() => {
        close();

        // Wait until closing animation is finished
        timer.current = setTimeout(() => onClick(), delay);
    }, [onClick]);

    useEffect(
        () => () => {
            clearTimeout(timer.current);
        },
        []
    );

    return (
        <div className={s.item} onClick={handleClick}>
            {children}
        </div>
    );
};

Option.propTypes = {
    onClick: pt.func
};

Option.defaultProps = {
    onClick: () => {}
};

export default Option;
