import React from 'react';
import pt from 'prop-types';
import terms from './terms';
import { Term as GlossaryTerm } from '../../components';

const Term = ({ id, children }) => (
    <GlossaryTerm data={terms[id]} link='Открыть глоссарий' href={`/ru/glossary/#${id}`}>
        {children}
    </GlossaryTerm>
);

Term.propTypes = {
    id: pt.string.isRequired
};

export default Term;
