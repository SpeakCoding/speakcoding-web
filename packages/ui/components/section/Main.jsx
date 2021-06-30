import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import HL from '../highlight';
import s from './section.css';

const Main = ({ hlactive, narrow, children }) => (
    <div className={classNames(s.main, narrow && s.narrow)}>
        <HL.Context active={hlactive}>{children}</HL.Context>
    </div>
);

Main.propTypes = {
    hlactive: pt.bool,
    narrow: pt.bool
};

Main.defaultProps = {
    hlactive: undefined,
    narrow: false
};

export default Main;
