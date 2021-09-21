import React from 'react';
import { Grid, HL, Section } from '@sc/ui';
import { Assignment, Skill } from '../../../components';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Another option is to record information about objects in a database. A{' '}
                        <Term id='database' tooltip>
                            database
                        </Term>{' '}
                        is a specific way of storing data, and can be thought of as an Excel table.
                        The data type (e.g. number or text string) is defined for each of the
                        table’s columns.
                    </p>
                    <p>
                        However, not all data can be written directly into the database. For
                        example, if we wish to save a specific post, we won’t be able to save the
                        ‘Set of Comments’ data type directly. To save it, we do the following:
                    </p>
                    <ul>
                        <li>
                            Write all comments in a separate table, listing what each one consists
                            of (text comment,{' '}
                            <HL color='orange' active>
                                which user left it
                            </HL>
                            , and to which post is belongs)
                        </li>
                        <li>Add a column with the number (id) of the post</li>
                        <li>
                            There will also be a posts table that will have a column containing{' '}
                            <HL color='green' active>
                                the post number
                            </HL>
                        </li>
                    </ul>
                    <p>
                        This links the values in the posts table to the comments table (examples
                        below).
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        <b>Comments</b> Table
                    </p>
                    <Grid cols='repeat(5, 1fr)'>
                        <Grid.Cell border='right bottom'>id</Grid.Cell>
                        <Grid.Cell border='right bottom'>
                            <HL color='green' active>
                                post_id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>
                            <HL color='orange' active>
                                user_id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>text</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                    <p>
                        <b>Posts</b> Table
                    </p>
                    <Grid cols='repeat(4, 1fr)'>
                        <Grid.Cell border='right bottom'>
                            <HL color='green' active>
                                id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>
                            <HL color='orange' active>
                                user_id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>text</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                    <p>
                        <b>Users</b> Table
                    </p>
                    <Grid cols='repeat(4, 1fr)'>
                        <Grid.Cell border='right bottom'>
                            <HL color='orange' active>
                                id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>username</Grid.Cell>
                        <Grid.Cell border='right bottom'>email</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        When classes are saved, their names typically match how they will be
                        displayed in the database (though this is not always the case, as their
                        names are assigned by programmers).
                    </p>
                    <p>
                        For example, the Post class in the database corresponds to the Posts table.
                        Each table generally has an id field which stores a unique number for each
                        of the table’s strings. This is like passport numbers for people, with each
                        passport holder having their own unique number. Almost all databases
                        automatically create a unique number for each new string (new comments,
                        posts, users, etc.), saving you from having to do so yourself.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/18' />

        <Section>
            <Section.Main narrow>
                <p>
                    For each class object, we need to add a function that describes the steps
                    necessary to write to or read from the databases containing all of the object’s
                    components (we will revisit this topic later).
                </p>
                <p>
                    A similar process is used to save data on servers. We convert the object data
                    into text form, and, using standard functions found on the device’s operating
                    system, transfer it to the server. A program runs on the server (device) that,
                    upon receiving a message, converts it from text back into object data and stores
                    it in the database.
                </p>
                <p>
                    Some modern languages automatically create functions that save and transfer
                    data, so you don’t have to write them yourself.
                </p>
            </Section.Main>
        </Section>

        <Skill>
            Understanding how data is stored is an important aspect of properly documenting a
            project. You can then use this knowledge to design data-storage systems.
        </Skill>

        <Section>
            <Section.Main narrow>
                <p>
                    Let’s start by understanding how databases work, then how data is transferred to
                    and loaded from the server.
                </p>
            </Section.Main>
        </Section>
    </>
);
