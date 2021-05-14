import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-definition';
import Part3 from './3-define-in-code';
import Part4 from './4-examples';

export default () => (
    <Page chapter={2}>
        <Part1 />
        <Part2 />
        <Part3 />
        <Section.Divider />
        <Part4 />
    </Page>
);
