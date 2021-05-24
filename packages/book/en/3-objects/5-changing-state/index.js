import React, { useCallback } from 'react';
import { Card, Code, Grid, HL, Hint, Icon, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import FunctionParts from '../../../common/3/function-parts';
import { interceptor, InterceptorView } from '../../../phone';
import { useApp } from '../../../tools';
import s from './style.css';

const code11 = `
class User {
    [[username]](orange _ 1) Text
    ...
}
\xa0`;

const code12 = `
\xa0   [[newUsernameField]](turquoise _ 1)    TextField
    setButton            Button
    currentUser          User
`;

const code13 = `
\xa0
    func onClickSetButton() {
        currentUser.[[username]](orange _ 1) = [[newUsernameField.text]](green _ 1)
    }
}`;

const code21 = `
class User {
    username Text
    ...

    func [[SetUserName]](aquamarine _ 1) (newUsername Text) {
        self.username = newUsername
    }
}

class newUsernameForm {
    newUsernameField    TextField
    setButton           Button
    currentUser         User

    func onClickSetButton() {
`;

const code22 = `
\xa0
        currentUser.[[SetUserName]](aquamarine _ 1)([[newUsernameField.text]](light-sky-blue _ 1))
    }
}`;

const code3 = `
func editCaption (newCaption Text)  {
    [[currentCaption]](orange _ 1) = [[newCaption]](light-sky-blue _ 1)
}`;

export default () => {
    const { profile } = useApp();

    const onEnter = useCallback(async () => {
        await interceptor.setSession(profile.instagram_app_authentication_token, { soft: true });
        await interceptor.init();
        await interceptor.on();
        await interceptor.lockDisplay();
        await interceptor.switchTab('profile', true);
        (await interceptor.getControl('profile-edit')).click();
        interceptor.open();
    }, [profile]);

    const onExit = useCallback(async () => {
        await interceptor.off();
        interceptor.close();
    }, [profile]);

    return (
        <>
            <Section>
                <Section.Block>
                    <Section.Main>
                        <InterceptorView onEnter={onEnter} onExit={onExit}>
                            <h1>Changing objects’ states</h1>
                            <p>
                                Now that we have come across <i>specific</i>{' '}
                                <Term id='instance'>objects</Term> of a{' '}
                                <Term id='class'>class</Term> and learned how to save them, we can
                                change their state. For example, when we create an account for a
                                particular user, we can change the username. We can do this directly
                                by changing the <Term id='component'>components of the object</Term>{' '}
                                or via a <Term id='function'>function</Term> of that class.
                            </p>
                            <p>
                                Let’s imagine Instagram has a form you can use to change your
                                username. The form has a field, newUsernameField, in which to input
                                your new username, and a Save button. The form stores the{' '}
                                <Term id='instance'>object</Term> (instance) of your account (User)
                                in its currentUser component of the User class. And in the form’s{' '}
                                <Term id='class'>class</Term>, the onClickSetButton{' '}
                                <Term id='function'>function</Term> is defined; this function is
                                called when the corresponding button is pressed. This function
                                changes the username component of your account (an object of the
                                User class).
                            </p>
                            <ul>
                                <li>
                                    We can replace <Term id='component'>components</Term> or change{' '}
                                    <Term id='property'>properties</Term> directly by adding the
                                    corresponding actions to the onClickSetButton function’s
                                    sequence of steps.
                                </li>
                            </ul>
                        </InterceptorView>
                    </Section.Main>
                    <Section.Side />
                </Section.Block>
                <Section.Block>
                    <Section.Main>
                        <Grid cols='36% 1fr'>
                            <Grid.Cell border='right bottom'>
                                <b>Example of changing a component value directly</b>
                            </Grid.Cell>
                            <Grid.Cell border='bottom'>
                                <b>What it looks like in code</b>
                            </Grid.Cell>

                            <Grid.Cell border='right' dense='bottom' />
                            <Grid.Cell dense='bottom'>
                                <Code value={code11} />
                            </Grid.Cell>

                            <Grid.Cell border='right' dense />
                            <Grid.Cell dense>
                                <pre>
                                    <Hint>
                                        class newUsernameForm
                                        <Hint.Tooltip>
                                            As you may have noticed, there is no username component
                                            in the newUsernameForm class, but there is a
                                            currentUser. Thus, despite the fact that the
                                            descriptions of newUsernameForm and User classes will
                                            exist in separate files in code, they will be connected
                                        </Hint.Tooltip>
                                    </Hint>
                                    {' {'}
                                </pre>
                            </Grid.Cell>

                            <Grid.Cell border='right' dense />
                            <Grid.Cell dense>
                                <Code value={code12} />
                            </Grid.Cell>

                            <Grid.Cell border='right'>
                                <div className={s.hint}>
                                    <div>
                                        We change the{' '}
                                        <HL color='orange' active>
                                            username
                                        </HL>{' '}
                                        component{' '}
                                        <HL color='green' active inline={3}>
                                            directly to the name that has been input into the form’s
                                            name field
                                        </HL>
                                    </div>
                                    <Icon name='arrow-right' size={24} />
                                </div>
                            </Grid.Cell>
                            <Grid.Cell>
                                <Code value={code13} />
                            </Grid.Cell>
                        </Grid>
                        <ul>
                            <li>
                                Or, within the <Term id='class'>class</Term>, we can define the{' '}
                                <Term id='function'>function</Term> that uses inputs to change a
                                state.
                            </li>
                        </ul>
                        <Grid cols='36% 1fr'>
                            <Grid.Cell border='right bottom'>
                                <b>Example of changing a component value with the function</b>
                            </Grid.Cell>
                            <Grid.Cell border='bottom'>
                                <b>What it looks like in code</b>
                            </Grid.Cell>

                            <Grid.Cell border='right' dense='bottom' />
                            <Grid.Cell dense='bottom'>
                                <Code value={code21} />
                            </Grid.Cell>

                            <Grid.Cell border='right' dense='top'>
                                <div className={s.hint}>
                                    <div>
                                        We make the change via the{' '}
                                        <HL color='aquamarine' active>
                                            SetUserName
                                        </HL>{' '}
                                        function
                                    </div>
                                    <Icon name='arrow-right' size={24} />
                                </div>
                            </Grid.Cell>
                            <Grid.Cell dense='top'>
                                <Code value={code22} />
                            </Grid.Cell>
                        </Grid>
                        <p>
                            Within <Term id='function'>functions</Term>, we define the sequence of
                            actions that we can perform with specific{' '}
                            <Term id='instance'>objects</Term> (instances) of a particular{' '}
                            <Term id='class'>class</Term>. To change an object means to change the{' '}
                            <Term id='component'>components</Term> and{' '}
                            <Term id='property'>properties</Term> of that{' '}
                            <Term id='instance'>object</Term>.
                        </p>
                        <p>
                            When defining the actions that a <Term id='function'>function</Term>{' '}
                            performs, we can refer directly to the object’s{' '}
                            <Term id='component'>components</Term>. As the{' '}
                            <Term id='instance'>object</Term> of a <Term id='class'>class</Term>{' '}
                            contains all of the <Term id='component'>components</Term> listed in the
                            definition of that class, we don’t need to add them as{' '}
                            <Term id='input'>inputs</Term>. Let’s look at the example below.
                        </p>
                        <p>
                            Let’s say we want to edit a post’s text. To do this, we create the
                            editCaption() function in the Post <Term id='class'>class’s</Term>{' '}
                            definition. For this <Term id='function'>function</Term> to be
                            performed, we need the post’s updated text, which will be its{' '}
                            <Term id='input'>inputs</Term>, while the{' '}
                            <Term id='function'>function</Term> itself appears as a sequence of the
                            following actions:
                        </p>
                        <div className={s.function}>
                            <Grid>
                                <Grid.Cell border='right'>
                                    <ol>
                                        <li>
                                            Take the post’s{' '}
                                            <HL color='orange' active>
                                                current caption
                                            </HL>
                                        </li>
                                        <li>
                                            Replace it with the{' '}
                                            <HL color='light-sky-blue' active>
                                                new caption
                                            </HL>
                                        </li>
                                    </ol>
                                </Grid.Cell>
                                <Grid.Cell>
                                    <FunctionParts>
                                        <Code value={code3} />
                                    </FunctionParts>
                                </Grid.Cell>
                            </Grid>
                        </div>
                        <p>
                            As we discussed, Caption is a component of the Post class. Therefore,
                            when we create a specific Post, we will have access to all components of
                            that class.
                        </p>
                        <p>
                            This means we don’t need to add a step to the code that indicates the
                            specific text of that post. As every Post always has text, and the
                            editCaption() function is defined in the Post class, the function will
                            have direct access to the text (Caption) of that particular post.
                        </p>
                    </Section.Main>
                </Section.Block>
            </Section>
            <Card mode='quiz'>
                <h2>Quiz #6</h2>
                <Card.Button href='#'>Complete</Card.Button>
            </Card>
        </>
    );
};
