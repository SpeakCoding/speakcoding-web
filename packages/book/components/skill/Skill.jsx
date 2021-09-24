import React from 'react';
import Card from '../card';
import L from '../localize';

const Skill = ({ children }) => (
    <Card variant='skill'>
        <Card.Title>
            <L lang='en'>New skill!</L>
            <L lang='ru'>Новый скил добавлен!</L>
        </Card.Title>
        {children}
    </Card>
);

export default Skill;
