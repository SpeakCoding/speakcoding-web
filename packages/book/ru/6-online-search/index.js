import React from 'react';
import { Feedback, Next } from '../../components';
import Page from '../Page';
import Part1 from './1-search';
import Part2 from './2-libraries';

export default () => (
    <Page chapter={6} phone={false}>
        <Part1 />
        <Part2 />
        <Feedback />
        <Next />
    </Page>
);
