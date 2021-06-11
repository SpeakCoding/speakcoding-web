import React from 'react';
import pt from 'prop-types';
import { hl } from './utils';

const Context = ({ active, inline, children }) => (
    <hl.Provider value={{ active, inline }}>{children}</hl.Provider>
);

Context.propTypes = {
    active: pt.bool,
    inline: pt.number
};

Context.defaultProps = {
    active: false,
    inline: undefined
};

export default Context;
