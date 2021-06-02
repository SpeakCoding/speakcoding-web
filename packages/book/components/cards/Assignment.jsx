import React from 'react';
import pt from 'prop-types';
import { Card } from '@sc/ui';
import L from '../localize';

const Assignment = ({ number, href, children }) => (
    <Card mode='assignment'>
        <h2>
            <L book='en'>Assignment #{number}</L>
            <L book='ru'>Задание №{number}</L>
        </h2>
        {children}
        <Card.Button href={href}>
            <L book='en'>Complete</L>
            <L book='ru'>Пройти</L>
        </Card.Button>
    </Card>
);

Assignment.propTypes = {
    number: pt.number.isRequired,
    href: pt.string.isRequired
};

export default Assignment;
