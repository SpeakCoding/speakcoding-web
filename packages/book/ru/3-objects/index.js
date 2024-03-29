import React from 'react';
import { Section } from '@sc/ui';
import { Feedback, Next } from '../../components';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-examples';
import Part3 from './3-more-using-classes';
import Part4 from './4-storing-objects';
import Part5 from './5-changing-state';

export default () => (
    <Page chapter={3}>
        <Section>
            <Part1 />
            <Part2 />
        </Section>
        <Section.Divider />
        <Part3 />
        <Part4 />
        <Part5 />
        <Feedback />
        <Next />
    </Page>
);
