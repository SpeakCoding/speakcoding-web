import React from 'react';
import { Section } from '@sc/ui';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-controller';
import Part2 from './2-api';
import Part3 from './3-ruby-on-rails';

export default () => (
    <Page chapter={11} phone={false}>
        <Part1 />
        <Section.Divider />
        <Part2 />
        <Part3 />
        <Next href='/en/chapter-12' />
    </Page>
);
