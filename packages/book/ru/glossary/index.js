import React from 'react';
import { Section } from '@sc/ui';
import Item from './Item';

const Glossary = () => (
    <Section>
        <Section.Main>
            <h1>Глоссарий</h1>
            <Item id='class' />
            <Item id='instance' />
            <Item id='component' />
            <Item id='property' />
            <Item id='function' />
        </Section.Main>
    </Section>
);

export default Glossary;
