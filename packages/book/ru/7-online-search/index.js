import React from 'react';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-search';
import Part2 from './2-libraries';

export default () => (
    <Page chapter={7} phone={false}>
        <Part1 />
        <Part2 />
        <Next />
    </Page>
);
