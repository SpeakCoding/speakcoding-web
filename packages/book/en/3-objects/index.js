import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-examples';
import Part3 from './3-more-using-classes';
import Part4 from './4-storing-objects';

export default () => (
    <Page chapter={3} phone={false}>
        <Section>
            <Part1 />
            <Part2 />
        </Section>
        <Part3 />
        <Part4 />
    </Page>
);
