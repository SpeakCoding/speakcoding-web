import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-on-launch';
import Part3 from './3-in-code';
import Part4 from './4-screens';

export default () => (
    <Page chapter={12} phone={false}>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Section.Divider />
        <Part3 />
        <Section.Divider />
        <Part4 />
    </Page>
);
