import React from 'react';
import pt from 'prop-types';
import terms from './terms';
import { Glossary } from '../../components';

const Term = ({ id, tooltip, children }) => (
    <Glossary.Term
        data={terms[id]}
        link='Открыть глоссарий'
        href={`/ru/glossary/#${id}`}
        tooltip={tooltip}
    >
        {children}
    </Glossary.Term>
);

Term.propTypes = {
    id: pt.string.isRequired,
    tooltip: pt.bool
};

Term.defaultProps = {
    tooltip: undefined
};

export default Term;
