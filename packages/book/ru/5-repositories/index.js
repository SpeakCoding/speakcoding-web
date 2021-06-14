import React from 'react';
import { Section } from '@sc/ui';
import { Next } from '../../components';
import Page from '../Page';
import Part1 from './1-about';
import Part2 from './2-files-folders';
import Part3 from './3-clone-repo';
import Part4 from './4-code-editors';
import Part5 from './5-layout';

export default () => (
    <Page chapter={5} phone={false}>
        <Part1 />
        <Part2 />
        <Section.Divider />
        <Part3 />
        <Section.Divider />
        <Part4 />
        <Part5 />
        <Next href='/ru/chapter-6' />
    </Page>
);
