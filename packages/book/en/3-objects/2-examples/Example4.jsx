import React from 'react';
import { Code, Grid, Hint, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `class [[Post]](orange _ 1) {
    [[Post]](light-sky-blue _ 1)([[inputUser User, inputImage Image, inputText Text]](aquamarine _ 1)) {
        [[self.time = System.CurrentTime()]](plum _ 1)
    }
}`;

export default () => (
    <Section.Block>
        <Section.Main>
            <p>
                <b>Example:</b> The Time <Term id='component'>component</Term> can be created when
                the computer checks the time on its clock.
            </p>
            <Grid cols='36% 1fr'>
                <Grid.Cell border='right bottom'>
                    <b>Description of the function in writing</b>
                </Grid.Cell>
                <Grid.Cell border='bottom'>
                    <b>What it looks like in code</b>
                </Grid.Cell>
                <Grid.Cell border='right'>
                    A function of the class{' '}
                    <HL color='orange' active inline={3}>
                        Post
                    </HL>{' '}
                    that is called when a specific Post is created;{' '}
                    <HL color='plum' active inline={3}>
                        this function uses the current time on the device/phone being used to create
                        the post to specify what time the post was created
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
            <p>
                In our Instagram example, the definition of the Post class contains the component
                Set of Comments, and when a post is created, this Set of Comments is always empty.
                Therefore, the program can create the post without needing any inputs.
            </p>
            <Grid cols='36% 1fr'>
                <Grid.Cell border='right' />
                <Grid.Cell>
                    <pre>
                        var comments = [Comment]
                        <Hint>
                            ()
                            <Hint.Tooltip>
                                You can create a set with the init function () or, since all objects
                                of this class have a default value (no comments/ 0 comments). You
                                can also add it directly into the class definition var number of
                                comments = 0
                            </Hint.Tooltip>
                        </Hint>
                    </pre>
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section.Block>
);
