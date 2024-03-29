import React from 'react';
import { Section } from '@sc/ui';
import { Feedback, Next } from '../../components';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-databases';
import Part3 from './3-sql';
import Part4 from './4-in-code';

export default () => (
    <Page chapter={8} phone={false}>
        <Part1 />
        <Part2 />
        <Section.Divider />
        <Part3 />
        <Section.Divider />
        <Part4 />
        <Feedback />
        <Next />
    </Page>
);
