import React from 'react';
import { Callout, Card, Lottie, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import animationData from './img-lottie.json';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Sequences and Sentences</h1>
                <p>
                    Usually in a code’s definition of a <Term id='function'>function’s</Term>{' '}
                    sequence of actions, each line equates to a specific action; this can be
                    compared to a single <Term id='sentence'>sentence</Term> in regular text. In the
                    programming languages of 20-30 years ago, <Term id='sentence'>sentences</Term>{' '}
                    were separated from one another. However, more modern languages simply utilise a
                    new line, akin to pressing the Enter key within a piece of text.
                </p>
                <p>
                    As with regular language, the more fluent you are, the more complex yet concise
                    sentences you can construct.
                </p>
                <p>
                    Defining a function is an integral part of defining a class (we record their
                    respective definitions in the same location). And each function relates to a
                    specific class; so when defining the actions that can be performed with
                    instances of that class, we should remember that each instance will contain all
                    of the components listed in the definition of its particular class.
                </p>
                <p>
                    Therefore, when defining the actions that a function performs, we can refer
                    directly to the components of the relevant instance of this class; thus we won’t
                    need to add them as inputs.
                </p>
                <p>Let’s take a look at the example below.</p>
                <p>
                    Let’s assume that we want to edit the caption of a post. To do this, we create
                    the editCaption() function in the definition of the Post class. For this
                    function to be performed, we require the post’s updated caption, which will be
                    the function’s input, while the function itself will appear as the following
                    sequence of actions:
                </p>
                <ul>
                    <li>Take the post’s current caption</li>
                    <li>Change it to the new version</li>
                </ul>
                <p>
                    As we wrote here, a Caption is a component of the Post class. And when we create
                    a specific Post, we have access to all of the components of this class.
                </p>
                <p>
                    Therefore, we don’t need to add a step to the code that indicates a specific
                    Caption in that post. Since each Post always contains a Caption, and as the
                    editCaption() function is defined in the Post class, so that the function has
                    direct access to the Caption of this particular post.
                </p>
                <Callout>
                    <b>Let’s repeat</b> <br />
                    As our program is running, it performs a sequence of actions that:
                    <ul>
                        <li>create instances belonging to the classes that we defined;</li>
                        <li>
                            change their properties. [The properties change as the functions that we
                            defined are performed]
                        </li>
                    </ul>
                </Callout>
            </Section.Main>
            <Section.Side>
                <Lottie.IntersectionBox>
                    <Section.Sticky>
                        <Lottie animationData={animationData} />
                    </Section.Sticky>
                </Lottie.IntersectionBox>
            </Section.Side>
        </Section>
        <Card mode='skill'>
            <h2>New skill!</h2>
            Understanding functions lets you evaluate and describe how the classes you defined in
            the structure can interact with one another, which actions can be performed with these
            classes, and how specific instances of classes can be altered.
        </Card>
        <Card mode='assignment'>
            <h2>Assignment #3</h2>
            In addition to the definition of the Post class, list all functions of this class.
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSff8V8v7z941DvCwAGAOVcNeOefRpfw3Jdw8CYAzcMBlnEyGA/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
    </>
);
