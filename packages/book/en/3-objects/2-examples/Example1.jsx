import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
class [[User]](orange) {
    [[User]](light-sky-blue)([[inputUsername Text, inputEmail Text, inputPassword Text]](aquamarine)) {
        [[self.username = inputUsername]](plum)
        [[self.email= inputEmail]](plum)
        [[self.password= inputPassword]](plum)  
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
                <Grid.Cell border='right' hlactive>
                    A function of the class <HL color='orange'>User</HL> that is called when a{' '}
                    <HL color='light-sky-blue'>specific User</HL> is created for which{' '}
                    <HL color='aquamarine'>a username, email, and password are indicated</HL>, and{' '}
                    <HL color='plum'>
                        which uses these inputs to substitute values for the components of this
                        instance of the User class
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell hlactive>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section.Block>
);
