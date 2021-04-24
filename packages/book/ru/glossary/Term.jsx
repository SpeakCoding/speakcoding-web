import React from 'react';
import pt from 'prop-types';
import terms from './terms';
import { Glossary } from '../../components';

const Term = ({ id, children }) => (
    <Glossary.Term data={terms[id]} link='Открыть глоссарий' href={`/ru/glossary/#${id}`}>
        {children}
    </Glossary.Term>
);

Term.propTypes = {
    id: pt.string.isRequired
};

export default Term;
