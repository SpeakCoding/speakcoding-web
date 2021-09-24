import React from 'react';
import { Section } from '@sc/ui';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-tables';
import Part3 from './3-model';
import Part4 from './4-class-links';
import Part5 from './5-db-read-write';

export default () => (
    <Page chapter={10} phone={false}>
        <Part1 />
        <Part2 />
        <Part3 />
        <Section.Divider />
        <Part4 />
        <Part5 />
        <Next href='/ru/chapter-11' />
    </Page>
);
