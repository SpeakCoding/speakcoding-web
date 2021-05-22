import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import s from './grid.css';

const Cell = ({ border, dense, children }) => (
    <div
        className={classNames(s.cell, {
            [s.borderRight]: border.indexOf('right') > -1,
            [s.borderBottom]: border.indexOf('bottom') > -1,
            [s.denseTop]: dense && (dense === true || dense.indexOf('top') > -1),
            [s.denseBottom]: dense && (dense === true || dense.indexOf('bottom') > -1)
        })}
    >
        {children}
    </div>
);

Cell.propTypes = {
    border: pt.string,
    dense: pt.oneOfType([pt.bool, pt.string])
};

Cell.defaultProps = {
    border: '',
    dense: false
};

export default Cell;
