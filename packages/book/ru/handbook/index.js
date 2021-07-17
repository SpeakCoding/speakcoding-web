import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-blocks';

export default () => (
    <Page phone={false}>
        <Part1 />
        <Section.Divider />
        <Part2 />
    </Page>
);
