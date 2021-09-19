import React from 'react';
import { Section } from '@sc/ui';
import { Quiz } from '../../../components';
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

        <Quiz id='en/6' />
    </>
);
