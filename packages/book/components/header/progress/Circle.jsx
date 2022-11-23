import React, { useMemo } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { calcPath } from './utils';
import s from './circle.css';

const Circle = ({ value }) => {
    const d = useMemo(() => calcPath(value === 0 ? 100 : value), [value]);

    return (
        <div className={s.box}>
            <svg
                className={classNames(s.svg, value === 0 && s.empty)}
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d={d} stroke='currentColor' strokeWidth='6' />
            </svg>
            {value}%
        </div>
    );
};

Circle.propTypes = {
    value: pt.number
};

Circle.defaultProps = {
    value: 0
};

export default Circle;
