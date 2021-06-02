import React from 'react';
import { Card } from '@sc/ui';
import L from '../localize';

const Skill = ({ children }) => (
    <Card mode='skill'>
        <h2>
            <L book='en'>New skill!</L>
            <L book='ru'>Новый скил добавлен!</L>
        </h2>
        {children}
    </Card>
);

export default Skill;
