import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
class [[User]](orange _ 1) {
    [[User]](light-sky-blue _ 1)([[inputUsername Text, inputEmail Text, inputPassword Text]](aquamarine _ 1 3)) {
        [[self.username = inputUsername]](plum _ 1)
        [[self.email= inputEmail]](plum _ 1)
        [[self.password= inputPassword]](plum _ 1)  
    }
}`;

export default () => (
    <Section.Block>
        <Section.Main>
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
                        User
                    </HL>{' '}
                    that is called when a{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        specific User
                    </HL>{' '}
                    is created for which{' '}
                    <HL color='aquamarine' active inline={3}>
                        a username, email, and password are indicated
                    </HL>
                    , and{' '}
                    <HL color='plum' active inline={3}>
                        which uses these inputs to substitute values for the components of this
                        instance of the User class
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section.Block>
);
