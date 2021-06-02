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

        <Quiz
            number={6}
            href='https://docs.google.com/forms/d/e/1FAIpQLSe8JQt1-zAID7_pevMCiFYmcyPKs65qBE7VMeJz-kbidHyLDg/viewform?usp=sf_link'
        >
            Changing objects’ states
        </Quiz>
    </>
);
