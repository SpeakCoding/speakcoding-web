import React from 'react';
import pt from 'prop-types';
import { Card } from '@sc/ui';
import L from '../localize';

const Quiz = ({ number, href, children }) => (
    <Card mode='quiz'>
        <h2>
            <L book='en'>Quiz #{number}</L>
            <L book='ru'>Тест №{number}</L>
        </h2>
        {children}
        <Card.Button href={href}>
            <L book='en'>Complete</L>
            <L book='ru'>Пройти</L>
        </Card.Button>
    </Card>
);

Quiz.propTypes = {
    number: pt.number.isRequired,
    href: pt.string.isRequired
};

export default Quiz;
