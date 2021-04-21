import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Item from './Item';

const Glossary = () => (
    <Page>
        <Section>
            <Section.Main>
                <h1>Glossary</h1>
                <Item id='class' />
                <Item id='instance' />
                <Item id='component' />
                <Item id='property' />
                <Item id='function' />
            </Section.Main>
        </Section>
    </Page>
);

export default Glossary;
