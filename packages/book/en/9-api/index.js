import React from 'react';
import Page from '../Page';
import { Next } from '../../components';
import Part1 from './1-intro';
import Part2 from './2-reading-objects';
import Part3 from './3-creating-objects';
import Part4 from './4-log-in';

export default () => (
    <Page chapter={9} phone={false}>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Next href='/en/chapter-10' disabled />
    </Page>
);
