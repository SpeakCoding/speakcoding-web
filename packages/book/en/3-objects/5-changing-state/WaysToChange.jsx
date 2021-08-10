import React from 'react';
import { Code, Grid, HL, Hint, Icon, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

const code11 = `
class User {
    [[username]](orange) Text
    ...
}
\xa0`;

const code12 = `
\xa0   [[newUsernameField]](turquoise)    TextField
    setButton            Button
    currentUser          User
`;

const code13 = `
\xa0
    func onClickSetButton() {
        currentUser.[[username]](orange) = [[newUsernameField.text]](green)
    }
}`;

const code21 = `
class User {
    username Text
    ...

    func [[SetUserName]](aquamarine) (newUsername Text) {
        self.username = newUsername
    }
}

class NewUsernameForm {
    newUsernameField    TextField
    setButton           Button
    currentUser         User

    func onClickSetButton() {
`;

const code22 = `
\xa0
        currentUser.[[SetUserName]](aquamarine)([[newUsernameField.text]](light-sky-blue))
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Example of changing a component value directly</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='bottom' />
                    <Grid.Cell dense='bottom' hlactive>
                        <Code value={code11} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense />
                    <Grid.Cell dense>
                        <pre>
                            <Hint>
                                class NewUsernameForm
                                <Hint.Tooltip>
                                    As you may have noticed, there is no username component in the
                                    NewUsernameForm class, but there is a currentUser. Thus, despite
                                    the fact that the descriptions of NewUsernameForm and User
                                    classes will exist in separate files in code, they will be
                                    connected
                                </Hint.Tooltip>
                            </Hint>
                            {' {'}
                        </pre>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense />
                    <Grid.Cell dense hlactive>
                        <Code value={code12} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        <div className={s.hint}>
                            <div>
                                We change the <HL color='orange'>username</HL> component{' '}
                                <HL color='green'>
                                    directly to the name that has been input into the form’s name
                                    field
                                </HL>
                            </div>
                            <Icon name='arrow-right' size={24} />
                        </div>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code13} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <ul>
                    <li>
                        Or, within the <Term id='class'>class</Term>, we can define the{' '}
                        <Term id='function'>function</Term> that uses inputs to change a state.
                    </li>
                </ul>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Example of changing a component value with the function</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='bottom' />
                    <Grid.Cell dense='bottom' hlactive>
                        <Code value={code21} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='top' hlactive>
                        <div className={s.hint}>
                            <div>
                                We make the change via the <HL color='aquamarine'>SetUserName</HL>{' '}
                                function
                            </div>
                            <Icon name='arrow-right' size={24} />
                        </div>
                    </Grid.Cell>
                    <Grid.Cell dense='top' hlactive>
                        <Code value={code22} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
