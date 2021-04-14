import React from 'react';
import { Achievement, Callout } from '@sc/ui';
import { Section, Task } from '../../../components';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <Section.Badge>Introduction to Software Engineering</Section.Badge>
                    <h1>Introduction: from text to structure to definitions using code</h1>
                    <p>
                        Programming is a language. As with any language, we use it to describe the
                        world around us, to define objects and occurrences.
                    </p>
                    <p>
                        Human language is rich, with speakers generally possessing active
                        vocabularies of over <b>10,000 words</b> in their native tongue. Programming
                        languages, meanwhile, are much more basic, with each word being more
                        succinct and precise. This allows for deeper, richer narratives to be
                        constructed using fewer characters.
                    </p>
                    <p>
                        Creating a complex language immediately from scratch would be impractical;
                        seeking to identify appropriate word combinations and suitable expressions
                        would quickly become too complicated.
                    </p>
                    <Callout>
                        Programming is like any other language we use. It's meant to describe the
                        world around us.
                    </Callout>
                    <p>
                        If we begin by describing what we see using words, then recast this
                        narrative into a structured format, the result starts to resemble computer
                        code. A few stages later and we see clearly that programming language is
                        similar to human language, only simpler (always comprising fewer than{' '}
                        <b>1,000 words</b>).
                    </p>
                    <p>
                        Anybody can create a structured narrative of the world around them. A
                        capable programmer can determine the most succinct expression of this
                        narrative, making it as clear and informative as possible. We will return to
                        this idea towards the end of our course.
                    </p>
                    <p>
                        Our first step is to learn to read text and understand its structure; this
                        is one of the key skills of the programmer. So, what are the main{' '}
                        <b>‘speech areas’</b> of this language?
                    </p>
                    <p>Let’s look at Instagram, and unpack it into its component parts.</p>
                    <Task>
                        <Task.Title>Assignment #1:</Task.Title>
                        Opening the app, what do you see on the screen? Let’s describe this in
                        words.
                        <Task.Button>Start assignment</Task.Button>
                    </Task>
                    <Achievement>
                        <h2>ololo</h2>
                        azaza
                    </Achievement>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>ololo</Section.Sticky>
                </Section.Side>
            </Section.Block>
        </Section>
        <Section.Divider />
    </>
);
