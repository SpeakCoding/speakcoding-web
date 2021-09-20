import React from 'react';
import { Card } from '@sc/ui';
import L from '../localize';

const Skill = ({ children }) => (
    <Card mode='skill'>
        <h2>
            <L lang='en'>New skill!</L>
            <L lang='ru'>Новый скил добавлен!</L>
        </h2>
        {children}
    </Card>
);

export default Skill;
