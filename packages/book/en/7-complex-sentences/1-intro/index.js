import React from 'react';
import { Section } from '@sc/ui';
import { Intro, Quiz, Time } from '../../../components';
import Example1 from './Example1';
import Example2 from './Example2';
import intro from './intro.png';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Complex sentences</h1>
                    <Time.Chapter value='~30 min' />
                    <Intro pic={intro} video='https://kinescope.io/embed/202448163' />
                    <p>
                        As you may remember, a code string usually equates to a particular action,
                        and in the chapter on functions, we decided to treat these as sentences.
                        However, sometimes we come across more complex sentences that describe
                        several actions simultaneously.
                    </p>
                    <p>
                        The logic behind writing complex sentences is often the opposite of how we
                        structure our thoughts in speech, though it resembles a complex sentence.
                    </p>
                </Section.Main>
            </Section.Block>
            <Example1 />
            <Example2 />
        </Section>

        <Quiz id='en/11' />
    </>
);
