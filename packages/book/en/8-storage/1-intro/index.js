import React from 'react';
import { Grid, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment, Time } from '../../../components';
import Term from '../../glossary/Term';
import img from './phone-cloud.svg';

const code1 = `'{ "post": { "caption": "This is my first post!", "user": "liberman1984", "comments": [] } }'`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Storing information about objects long-term</h1>
                    <Time.Chapter value='~15 min' />
                    <p>
                        We have covered how to save class objects to enable us to work with them in
                        code. Storing information in variables is only a temporary measure, as these
                        variables disappear when we exit the program. If you write a program that
                        doesn’t need its current condition to be saved, and that starts from zero
                        each time it’s started up, then you won’t need to consider how to store this
                        data. One example is a calculator: the program stores minimal information
                        during its working process, and deletes it when the program is closed. But
                        more often than not, we need information from the program. For example, in
                        Instagram we store data about recent posts that have received comments. We
                        can store this data in a number of ways:
                    </p>
                    <ol>
                        <li>
                            The device we use (e.g. phone, computer etc.) is called the client, and
                            each client has a certain amount of local memory.{' '}
                            <b>
                                We can store data in the client’s local storage, i.e. the phone or
                                computer’s memory
                            </b>
                            . The data is thus saved and accessible only on that device. We don’t
                            lose apps when we close them. Every time the program is launched, it
                            ‘recreates’ particular posts, users etc. from the information saved in
                            its local storage.
                        </li>
                        <li>
                            <b>Data can be stored on a server or in the ‘cloud’</b> (online storage)
                            to avoid losing it if the device itself is lost, and to make it
                            accessible to other users if need be.
                        </li>
                    </ol>
                    <p>
                        When we save a particular post, we don’t save the actual post, but rather
                        all the data that we need from that post in order to ‘recreate’ the object.
                        For example, in the case of a particular Instagram user, this would be their
                        name, unique account number, and profile picture.
                    </p>
                    <p>
                        If we wish to save a book, we would write everything we know about it: its
                        color, the number of pages, margin notes, text etc.
                    </p>
                    <p>
                        If we wish to save information about a specific post locally, we need to
                        ‘unpack’ it and convert the information about it into text.
                    </p>
                    <p>
                        The procedure for recording information about{' '}
                        <Term id='instance'>class objects</Term> in text form is called{' '}
                        <Term id='serialization' tooltip>
                            serialization
                        </Term>
                        .
                    </p>
                    <p>
                        When an object is restored, the reverse operation (
                        <Term id='deserialization' tooltip>
                            deserialization
                        </Term>
                        ) is performed, recreating the object from the text and ‘substituting’ the
                        data in the template of the restored <Term id='instance'>object</Term>. For
                        both of these operations, we need to write ‘save and restore’ functions for
                        the objects.
                    </p>
                    <p>
                        <b>An example of how to write post as a string:</b>
                    </p>
                    <Pre>{code1}</Pre>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right bottom'>
                            <b>Example clarification</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>How this is rendered in code</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' dense='bottom' />
                        <Grid.Cell dense='bottom'>
                            <pre>
                                {
                                    '{ "caption": "This is my first post!", "user": "liberman1984", "comments": [] }'
                                }
                            </pre>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            In the code for the serialization and deserialization functions,
                            information about an object looks like a set of{' '}
                            <HL color='plum'>any values</HL>, written as a{' '}
                            <HL color='wheat'>text string</HL>
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <pre>
                                String -> [<HL color='wheat'>String</HL> : <HL color='plum'>Any</HL>
                                ] -> Post
                            </pre>
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Having written the information about the object in the form of strings, we
                        can save it in the local memory of the device on which the program is
                        running. Data written like this is saved in a normal text file
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/17' />
    </>
);
