import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-reading-objects';
import Part3 from './3-creating-objects';
import Part4 from './4-log-in';

export default () => (
    <Page chapter={9} phone={false}>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Part3 />
        <Part4 />
    </Page>
);
