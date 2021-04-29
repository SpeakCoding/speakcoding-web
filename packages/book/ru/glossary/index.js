import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import { Glossary } from '../../components';
import terms from './terms';

const GlossaryPage = () => (
    <Page bar={false} phone={false}>
        <Section>
            <Section.Main>
                <h1>Глоссарий</h1>
                <Glossary data={terms} />
            </Section.Main>
        </Section>
    </Page>
);

export default GlossaryPage;
