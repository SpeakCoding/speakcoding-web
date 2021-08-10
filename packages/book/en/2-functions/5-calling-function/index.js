import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';

const codeUser = `
class [[User]](orange) {
    ...

    func [[muteProfile]](green)() {
        [[posts = self.getPosts()]](plum)
        [[stories = self.getStories()]](plum)
        [[posts.mute()]](plum)
        [[stories.mute()]](plum)
    }
}`;

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h2>Calling a function</h2>
                <p>General form of calling a function in code:</p>
                <Pre>function_title (list_of_inputs)</Pre>
                <ol>
                    <li>
                        Calling a function shares some common aspects with the function definition:
                        <ul>
                            <li>
                                Function calls can be identified readily by their round brackets.
                            </li>
                            <li>
                                Before the brackets you’ll find the function title (we use the title
                                assigned in the function definition).
                            </li>
                            <li>
                                The input listing then appears, separated by commas (in the same
                                order as in the function definition).
                            </li>
                        </ul>
                    </li>
                    <li>
                        Meanwhile, there are also some differences versus the function definition:
                        <ul>
                            <li>No keyword appears before the function title.</li>
                            <li>The title used has already been used earlier in the definition.</li>
                            <li>The input listing does not include classes.</li>
                            <li>
                                There is no definition of the steps, and thus no curly brackets or
                                colon after the round brackets.
                            </li>
                        </ul>
                    </li>
                    <li>
                        The class function defines actions to be performed for particular instances
                        of a class. As such, a function is always called in relation to a particular
                        instance of a class, and in code the call is always accompanied by a tag for
                        the particular instance for which we are calling the function. In code, a
                        function call is written with a full-stop after the tag.
                    </li>
                </ol>
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>Example of calling a function</p>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>In writing</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        A function that allows a user’s posts to be temporarily muted (not
                        displayed):
                        <br /> <br />A function of the class <HL color='orange'>User</HL>, that we
                        call <HL color='green'>«mute user»</HL>,{' '}
                        <HL color='plum'>identifies this user’s posts and stories</HL>, and then{' '}
                        <HL color='plum'>mutes them</HL>.
                    </Grid.Cell>

                    <Grid.Cell hlactive>
                        <Code value={codeUser} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section>
    </>
);
