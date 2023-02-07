import React from 'react';
import { Section } from '@sc/ui';
import { Feedback, Next } from '../../components';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-definition';
import Part3 from './3-define-in-code';
import Part4 from './4-examples';
import Part5 from './5-sequences-sentences';

export default () => (
    <Page chapter={2} phone={false}>
        <Part1 />
        <Part2 />
        <Part3 />
        <Section.Divider />
        <Part4 />
        <Section.Divider />
        <Part5 />
        <Feedback />
        <Next />
    </Page>
);
