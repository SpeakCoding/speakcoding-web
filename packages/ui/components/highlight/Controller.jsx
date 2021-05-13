import React, { useMemo } from 'react';
import pt from 'prop-types';
import { shape } from './utils';

const Controller = ({ scale, refresh, children }) => {
    const context = useMemo(() => ({ scale, refresh }), [scale, refresh]);

    return <shape.Provider value={context}>{children}</shape.Provider>;
};

Controller.propTypes = {
    scale: pt.number,
    refresh: pt.number
};

Controller.defaultProps = {
    scale: 1,
    refresh: 0
};

export default Controller;
