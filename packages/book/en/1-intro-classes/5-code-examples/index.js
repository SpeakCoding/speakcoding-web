import React from 'react';
import { Section } from '@sc/ui';
import { Skill } from '../../../components';
import Example from '../../../common/1/class-examples';

export default () => (
    <>
        <Section>
            <Section.Main>
                <p>
                    Please ignore unfamiliar words. Instead,{' '}
                    <b>
                        note how the text from the structured definition (left column) is
                        transformed into code (right column)
                    </b>
                    ; this is the essence of programming.
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Section>
            <Section.Main>
                <Example />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>Text → Structure → Definition using code</p>
                <p>Again, this is the essence of programming.</p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Skill>
            What you have learnt in this chapter will help you create a PRD - product requirement
            document
        </Skill>
    </>
);
