import React from 'react';
import pt from 'prop-types';
import { Item as GlossaryItem } from '../../components/glossary';
import terms from './terms';

const Item = ({ id }) => <GlossaryItem data={terms[id]} />;

Item.propTypes = {
    id: pt.string.isRequired
};

export default Item;
