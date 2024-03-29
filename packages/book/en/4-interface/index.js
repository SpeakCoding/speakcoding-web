import React from 'react';
import { Section } from '@sc/ui';
import { Feedback, Next } from '../../components';
import Page from '../Page';
import Part1 from './1-display';
import Part2 from './2-all-displays';
import Part3 from './3-view';
import Part4 from './4-to-code';
import Part5 from './5-changing-components';
import Part6 from './6-another-example';

export default () => (
    <Page chapter={4}>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Part3 />
        <Part4 />
        <Section.Divider />
        <Part5 />
        <Part6 />
        <Feedback />
        <Next />
    </Page>
);
