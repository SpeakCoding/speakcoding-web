import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import HL from '../highlight';
import s from './grid.css';

const Cell = ({ border, dense, hlactive, semidense, children }) => (
    <div
        className={classNames(s.cell, {
            [s.borderRight]: border.indexOf('right') > -1,
            [s.borderBottom]: border.indexOf('bottom') > -1,
            [s.denseTop]: dense && (dense === true || dense.indexOf('top') > -1),
            [s.denseBottom]: dense && (dense === true || dense.indexOf('bottom') > -1),
            [s.semiDenseTop]: semidense && (semidense === true || semidense.indexOf('top') > -1),
            [s.semiDenseBottom]:
                semidense && (semidense === true || semidense.indexOf('bottom') > -1)
        })}
    >
        <HL.Context active={hlactive} inline>
            {children}
        </HL.Context>
    </div>
);

Cell.propTypes = {
    border: pt.string,
    dense: pt.oneOfType([pt.bool, pt.string]),
    hlactive: pt.bool,
    semidense: pt.oneOfType([pt.bool, pt.string])
};

Cell.defaultProps = {
    border: '',
    dense: false,
    hlactive: false,
    semidense: false
};

export default Cell;
