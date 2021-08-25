import React from 'react';
import { Section } from '@sc/ui';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-paragraphs';
import Part3 from './3-sets';

export default () => (
    <Page chapter={6} phone={false}>
        <Part1 />
        <Part2 />
        <Section.Divider />
        <Part3 />
        <Next href='/en/chapter-7' />
    </Page>
);
