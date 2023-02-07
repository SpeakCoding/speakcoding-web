import React from 'react';
import { Callout, Img, Section } from '@sc/ui';
import { Assignment, Skill } from '../../../components';
import Term from '../../glossary/Term';
import img from './function.svg';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Sequences and Sentences</h1>
                <p>
                    Usually in a code’s definition of a <Term id='function'>function’s</Term>{' '}
                    sequence of actions, each line equates to a specific action; this can be
                    compared to a single{' '}
                    <Term id='sentence' tooltip>
                        sentence
                    </Term>{' '}
                    in regular text. In the programming languages of 20-30 years ago,{' '}
                    <Term id='sentence'>sentences</Term> were separated from one another. However,
                    more modern languages simply utilise a new line, akin to pressing the Enter key
                    within a piece of text.
                </p>
                <p>
                    As with regular language, the more fluent you are, the more complex yet concise
                    sentences you can construct. You can think of this as the difference between
                    simple and compound sentences, we'll talk more about this later.
                </p>
                <Callout>
                    <b>Let’s repeat</b> <br />
                    As our program is running, it performs a sequence of actions that:
                    <ul>
                        <li>
                            create instances belonging to the classes that we defined (specific
                            posts/user profiles, etc.);
                        </li>
                        <li>
                            change their properties (make user profiles public or private, change
                            the text of posts, etc.).
                        </li>
                    </ul>
                </Callout>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section>

        <Skill>
            Understanding functions lets you evaluate and describe how the classes you defined in
            the structure can interact with one another, which actions can be performed with these
            classes, and how specific instances of classes can be altered.
        </Skill>

        <Assignment id='en/3' />
    </>
);
