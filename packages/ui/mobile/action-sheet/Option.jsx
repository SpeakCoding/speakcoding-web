import React, { useCallback, useContext, useEffect, useRef } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { context } from './utils';
import s from './action-sheet.css';

const delay = 300;

const Option = ({ emphasis, children, onClick }) => {
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
        <div className={classNames(s.item, emphasis && s.emphasis)} onClick={handleClick}>
            {children}
        </div>
    );
};

Option.propTypes = {
    emphasis: pt.bool,
    onClick: pt.func
};

Option.defaultProps = {
    emphasis: false,
    onClick: () => {}
};

export default Option;
