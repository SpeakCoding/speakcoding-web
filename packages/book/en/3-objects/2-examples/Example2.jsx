import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `[[func onClickCreateButton()]](green _ 1) {
    [[newUsername = textFieldUsername.text]](orange _ 1)
    [[newEmail = textFieldEmail.text]](orange _ 1)
    [[newPassword = textFieldPassword.text]](orange _ 1)
    [[newUser = new User]](plum _ 1 3) [[(newUsername, newEmail, newPassword)]](aquamarine _ 3)
    ...
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    The <Term id='constructor'>constructor function</Term> that creates a specific
                    object (<Term id='instance'>instance</Term>) of a class should be titled in a
                    specific way. The title is hardcoded for each language. In some languages it
                    takes the name of its class, while in others, such as Python, it is titled
                    __init__. This title can always be found by entering the relevant language in a
                    search engine.
                </p>
                <p>
                    Now, having specified the constructor function, we can call it to create{' '}
                    <Term id='instance'>objects (instances)</Term> of a class. In many languages,
                    calling this function is accompanied by the indicator word{' '}
                    <HL color='orange' active>
                        new
                    </HL>
                    .
                </p>
                <Pre>
                    <HL color='orange' active>
                        new
                    </HL>{' '}
                    User(usernameText, emailText, passwordText)
                </Pre>
                <p>
                    Taking the example from the form above, we now add the step of creating an{' '}
                    <Term id='instance'>object (instance)</Term> to the function that is called when
                    the Submit button is pressed. The function takes the data and performs a
                    sequence of steps to create the new User.
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
                        <b>What it looks like in code</b>
                    </Grid.Cell>
                    <Grid.Cell border='right'>
                        Function{' '}
                        <HL color='green' active inline={3}>
                            onClickCreateButton()
                        </HL>
                        , that{' '}
                        <HL color='plum' active inline={3}>
                            is called when the Submit button is pressed, uses
                        </HL>{' '}
                        <HL color='orange' active inline={3}>
                            all the data entered into the form’s fields
                        </HL>{' '}
                        <HL color='plum' active inline={3}>
                            and creates
                        </HL>{' '}
                        <HL color='aquamarine' active inline={3}>
                            an instance of the User class
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
