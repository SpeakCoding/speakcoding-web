import React from 'react';
import { Achievement, Section } from '@sc/ui';
import Example from './example';

export default () => (
    <>
        <Section>
            <Section.Main>
                <Example />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>Text → Structure → Definition using code</p>
                <p>Again, this is the essence of programming.</p>
                <Achievement>
                    <h2>New skill!</h2>
                    What you have learnt in this chapter will help you create a PRD - product
                    requirement document
                </Achievement>
            </Section.Main>
            <Section.Side />
        </Section>
    </>
);
