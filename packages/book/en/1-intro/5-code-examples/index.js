import React from 'react';
import { Card, Section } from '@sc/ui';
import Example from '../../../common/class-examples';

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
                <Example label='In writing' />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>Text → Structure → Definition using code</p>
                <p>Again, this is the essence of programming.</p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Card mode='skill'>
            <h2>New skill!</h2>
            What you have learnt in this chapter will help you create a PRD - product requirement
            document
        </Card>
    </>
);
