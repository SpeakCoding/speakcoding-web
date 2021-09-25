import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `
class {{hl:Post}}(orange) {
    {{hl:Post}}(light-sky-blue)({{hl:inputUser User, inputImage Image, inputText Text}}(aquamarine)) {
        {{hl:self.user = inputUser}}(plum)
        {{hl:self.image = inputImage}}(plum)
        {{hl:self.text = inputText}}(plum)  
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>Another example:</b> when creating a specific <b>Post</b>, we need an
                    already-created <b>User</b>, <b>Image</b> and <b>Caption</b> for the Post, which
                    are transferred as inputs to the Post constructor function.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Description of the function in writing</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        A function of the class <HL color='orange'>Post</HL> that is called when a{' '}
                        <HL color='light-sky-blue'>specific Post</HL> is created for which{' '}
                        <HL color='aquamarine'>
                            the user that created the post, picture, and text for the post is
                            indicated;
                        </HL>{' '}
                        <HL color='plum'>
                            the function uses these inputs to specify the corresponding components
                            of that instance (object)
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Some <Term id='component'>components</Term> do not need to be created in
                    advance; they can be created at the same time as the{' '}
                    <Term id='instance'>object (instance)</Term> by adding the corresponding action
                    to the constructor function.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
