import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import { Quiz, Skill } from '../../../components';
import Term from '../../glossary/Term';

const code1 = `func onClickCreateButton() {
    {{hl:var newUser}}(aquamarine) {{hl:User}}(light-sky-blue)
    {{hl:newUser}}(aquamarine) = new User(usernameField.text, emailField.text, passwordField.text)
        ...
    }
}`;

const code21 = `Post {
    likes []Like

    ...
\xa0`;

const code22 = `
\xa0   func addLike(user User) {
        var {{hl:newLike}}(turquoise) Like 
        {{hl:newLike}}(turquoise) = new {{hl:Like}}(orange)(user)
`;

const code23 = `\xa0
        self.likes.add(newLike)

    }
}`;

export default () => (
    <>
        <Skill>
            To change objects in code or to write apps, you will always need to create specific
            instances (objects) of the class.
        </Skill>
        <Quiz id='en/4' />

        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Storing objects temporarily</h1>
                    <p>
                        We have discussed how to define what our program consists of (
                        <Term id='class'>classes</Term>, <Term id='component'>components</Term>,{' '}
                        <Term id='property'>properties</Term>) and how to create specific{' '}
                        <Term id='instance'>objects (instances)</Term> of these classes. We have
                        also examined what we need <Term id='function'>functions</Term> for.
                        Computers and programs perform only those actions that we define for them.
                        So, when we create a new <Term id='instance'>object</Term> of a particular{' '}
                        <Term id='class'>class</Term>, or when we receive new information while the
                        function is being performed and we want to use this information later, we
                        need to indicate that we want to save this information. If we don’t, then in
                        the next command (line of code), the information will cease to exist and we
                        won’t be able to refer to these objects in our code.
                    </p>
                    <p>
                        <b>There are a few ways to save objects temporarily:</b>
                    </p>
                    <ul>
                        <li>
                            We can use special temporary containers, or{' '}
                            <Term id='variable' variable>
                                "variables"
                            </Term>{' '}
                            in which we save the data that we need.
                        </li>
                    </ul>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid cols='36% 1fr'>
                        <Grid.Cell border='right bottom'>
                            <b>Example of saving information in a variable</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>How this is rendered in code</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            When saving information in a variable (container), we need to give it a{' '}
                            <HL color='aquamarine'>title</HL> and define the{' '}
                            <HL color='light-sky-blue'>
                                class of objects that can be stored in it
                            </HL>
                            .
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <Code value={code1} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <ul>
                        <li>
                            Objects of a class (e.g., the specific instance of a Like) that are
                            written as components of a particular object of a different class (e.g.,
                            in a Set of Likes for a different Post) are saved for as long as the
                            object of a different class is stored (this instance of a Post).
                        </li>
                    </ul>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid cols='36% 1fr'>
                        <Grid.Cell border='right bottom'>
                            <b>The description of the Like function in writing</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>How this is rendered in code</b>
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='bottom' />
                        <Grid.Cell dense='bottom'>
                            <Code value={code21} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense hlactive>
                            Created <HL color='orange'>Like</HL>, placed it in the variable
                            (temporary container) <HL color='turquoise'>newLike</HL>.
                        </Grid.Cell>
                        <Grid.Cell dense hlactive>
                            <Code value={code22} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            Added newLike to the component Likes of the class Post (this component
                            has the class Set of Likes).
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
                            <Code value={code23} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Drawing an analogy with language, <Term id='variable'>variables</Term>{' '}
                        (temporary containers) are like chapters in a novel. Having been combined
                        into a single book, we no longer think of them as separate texts, but we can
                        always find them on a particular page.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Quiz id='en/5' />
    </>
);
