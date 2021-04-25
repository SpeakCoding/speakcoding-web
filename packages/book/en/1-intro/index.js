import React from 'react';
import { Section } from '@sc/ui';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-instagram';
import Part3 from './3-twitter-venmo';
import Part4 from './4-classes';
import Part5 from './5-code-examples';
import Part6 from './6-components-properties';
import Part7 from './7-using-classes';

export default () => (
    <Page nav='Introduction'>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Section.Divider />
        <Part3 />
        <Section.Divider />
        <Part4 />
        <Section.Divider />
        <Part5 />
        <Part6 />
        <Part7 />
    </Page>
);
