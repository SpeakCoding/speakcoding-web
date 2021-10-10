import React from 'react';
import { Section } from '@sc/ui';
import Intro from './Intro';
import Tables from './Tables';
import { Assignment } from '../../../components';

export default () => (
    <>
        <Section>
            <Intro />
            <Tables />
        </Section>

        <Assignment id='en/26' />

        <Section>
            <Section.Main narrow>
                <p>
                    Now we know how to create tables on a server, let’s see what descriptions of
                    structured classes (or models, the main elements of our program) look like, and
                    how they differ from descriptions of structured classes on the client.
                </p>
            </Section.Main>
        </Section>
    </>
);
