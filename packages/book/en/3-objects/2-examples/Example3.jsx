import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `
class [[Post]](orange _ 1) {
    [[Post]](light-sky-blue _ 1)([[inputUser User, inputImage Image, inputText Text]](aquamarine _ 1)) {
        [[self.user = inputUser]](plum _ 1)
        [[self.image = inputImage]](plum _ 1)
        [[self.text = inputText]](plum _ 1)  
    }
}`;

export default () => (
    <Section.Block>
        <Section.Main>
            <p>
                <b>Another example:</b> when creating a specific <b>Post</b>, we need an
                already-created <b>User</b>, <b>Image</b> and <b>Caption</b> for the Post, which are
                transferred as inputs to the Post constructor function.
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
                    that is called when a{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        specific Post
                    </HL>{' '}
                    is created for which{' '}
                    <HL color='aquamarine' active inline={3}>
                        the user that created the post, picture, and text for the post is indicated;
                    </HL>{' '}
                    <HL color='plum' active inline={3}>
                        the function uses these inputs to specify the corresponding components of
                        that instance (object)
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
            <p>
                Some <Term id='component'>components</Term> do not need to be created in advance;
                they can be created at the same time as the{' '}
                <Term id='instance'>object (instance)</Term> by adding the corresponding action to
                the constructor function.
            </p>
        </Section.Main>
    </Section.Block>
);
