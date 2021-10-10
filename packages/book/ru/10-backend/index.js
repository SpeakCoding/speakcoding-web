import React from 'react';
import { Section } from '@sc/ui';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-model';
import Part3 from './3-class-links';

export default () => (
    <Page chapter={10} phone={false}>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Section.Divider />
        <Part3 />
        <Next />
    </Page>
);
