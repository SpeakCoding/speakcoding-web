import React from 'react';
import { Button, Expand, Section } from '@sc/ui';
import { Assignment } from '../../../components';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional) Branches{' '}
                    <Expand.Control htmlFor='5-3-1'>
                        <Button variant='rounded'>read ⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-3-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                As other students are also taking this course, we can’t let you
                                change the main version of the code. However, you can create your
                                own branch (copy of the code) and make your changes there.
                                (Programmers working on projects usually start by making their
                                changes to individual branches.)
                            </p>
                            <p>
                                <b>
                                    <i>Checkout</i>
                                </b>
                                : Switches between branches (or creates a new branch if no branch
                                with the indicated destination name exists). A checkout of the
                                branch updates the local file versions to match the version on the
                                server.
                            </p>
                            <p>
                                There are two ways to view the list of existing branches. One is in
                                the web interface, using the branch-selection button on the left of
                                the screen immediately above the folders containing the code. The
                                other is in GitHub Desktop, by pressing the Current Branch button.
                                You can create a new branch there, too. In the web version of GitHub
                                just start typing the name of a branch, for example your
                                Name_LastName and click “create branch”. In GitHub Desktop click
                                Current Branch, choose New Branch → type in your Name_LastName.
                            </p>
                        </Section.Main>
                    </Section.Block>

                    <Assignment id='en/8' />

                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Changes to the main branch do not appear in your branch
                                automatically; this is done using the{' '}
                                <b>
                                    <i>Merge</i>
                                </b>{' '}
                                command. This command also allows you to transfer changes made to
                                your branch to the main branch. Don’t forget to go through the
                                changes in the files to check for errors before uploading.
                            </p>
                            <p>
                                As you may have noticed, the process of coding using Git is
                                collaborative and parallel, but not simultaneous.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
