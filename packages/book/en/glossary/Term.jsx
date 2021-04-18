import React from 'react';
import pt from 'prop-types';
import { Hint } from '@sc/ui';
import terms from './terms';

const Term = ({ id, children }) => {
    const { name, Definition } = terms[id];

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
    id: pt.string.isRequired
};

export default Term;
