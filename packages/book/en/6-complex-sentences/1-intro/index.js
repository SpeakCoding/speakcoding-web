import React from 'react';
import { Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Example1 from './Example1';
import Example2 from './Example2';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Complex sentences</h1>
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

        <Quiz
            number={11}
            href='https://docs.google.com/forms/d/e/1FAIpQLSfzkLWetSxFS9t6ZvKNspeJbVwvSbCA9p_dAV4bOHyCdK0WNA/viewform?usp=sf_link'
        >
            Complex sentences
        </Quiz>
    </>
);
