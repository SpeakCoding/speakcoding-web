import React from 'react';
import pt from 'prop-types';
import Code from '../code';
import s from './pre.css';

const Pre = ({ value, children }) =>
    value ? (
        <div className={s.box}>
            <Code value={value} />
        </div>
    ) : (
        <pre className={s.box}>{children}</pre>
    );

Pre.propTypes = {
    value: pt.string
};

Pre.defaultProps = {
    value: undefined
};

export default Pre;
