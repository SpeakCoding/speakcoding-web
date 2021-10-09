import React from 'react';
import { Callout, Img, Section } from '@sc/ui';
import img from './numbers.svg';

export default () => (
    <Section>
        <Section.Main>
            <h1>Introduction: from text to structure to definitions using code</h1>
            <p>
                The language of programming is a language like any other. We use it to describe the
                world around us, to define objects and events.
            </p>
            <p>
                Human language is rich, with speakers generally having active vocabularies of over{' '}
                <b>10,000 words</b> in their native tongue. Programming languages are much more
                basic, with each word being more specific and precise. This allows us to write
                richer narratives using fewer characters.
            </p>
            <p>
                Creating a complex language from scratch would be impractical, and trying to find
                suitable word combinations and expressions would quickly become too complicated.
            </p>
            <p>
                If we start by using words to describe what we see, then put this narrative into a
                structured format, the result begins to resemble computer code. A few stages later
                and we see clearly that programming language is similar to human language, only
                simpler (always consisting of fewer than <b>1,000 words</b>).
            </p>
            <p>
                Anybody can write a structured description of the world around them. A capable
                programmer can do so using expressions that are clear and concise. We will return to
                this idea towards the end of our course.
            </p>
            <p>
                One of a programmer’s skills is to know how to read ‘text’ and understand its
                structure. So, what are the main <b>‘speech areas’</b> of this language?
            </p>
            <p>Let’s look at Instagram, and unpack it into its components.</p>
            <Callout>
                <b>Opening the app, what do you see on the screen? Let’s describe this in words.</b>{' '}
                There is no one ‘right’ way to define an existing or future program. However, there
                is some underlying logic that we hope will become familiar to you as you progress
                through the course.
            </Callout>
        </Section.Main>
        <Section.Side>
            <Section.Sticky>
                <Img src={img} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
