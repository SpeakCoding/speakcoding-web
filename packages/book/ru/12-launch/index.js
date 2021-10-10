import React from 'react';
import { Section } from '@sc/ui';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-on-launch';
import Part2 from './2-screens';

export default () => (
    <Page chapter={12} phone={false}>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Next href='/ru/handbook' />
    </Page>
);
