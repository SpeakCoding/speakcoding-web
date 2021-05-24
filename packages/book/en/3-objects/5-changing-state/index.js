import React from 'react';
import { Card, Section } from '@sc/ui';
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

        <Card mode='quiz'>
            <h2>Quiz #6</h2>
            Changing objects’ states
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSe8JQt1-zAID7_pevMCiFYmcyPKs65qBE7VMeJz-kbidHyLDg/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
    </>
);
