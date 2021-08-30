import React from 'react';
import { Section } from '@sc/ui';
import { QuizNew as Quiz } from '../../../components';
import EditProfile from './EditProfile';
import WaysToChange from './WaysToChange';
import ReplaceCaption from './ReplaceCaption';

export default () => (
    <>
        <Section>
            <EditProfile />
            <WaysToChange />
            <ReplaceCaption />
        </Section>

        <Quiz id='ru/6' />
    </>
);
