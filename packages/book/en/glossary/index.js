import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import { Glossary } from '../../components';
import terms from './terms';

const GlossaryPage = () => (
    <Page phone={false}>
        <Page.Title>Glossary</Page.Title>
        <Section>
            <Section.Main>
                <h1>Glossary</h1>
                <Glossary data={terms} />
            </Section.Main>
        </Section>
    </Page>
);

export default GlossaryPage;
