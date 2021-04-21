import React from 'react';
import pt from 'prop-types';
import { Hint } from '@sc/ui';

const Term = ({ data, children }) => {
    if (!data) return children;

    const { name, Definition } = data;

    return (
        <Hint>
            {children}
            <Hint.Tooltip>
                {name}: <Definition />
            </Hint.Tooltip>
        </Hint>
    );
};

Term.propTypes = {
    data: pt.object.isRequired
};

export default Term;
