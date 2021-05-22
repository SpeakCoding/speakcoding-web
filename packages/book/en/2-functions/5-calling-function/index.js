import React from 'react';
import { Code, HL, Section } from '@sc/ui';
import s from './style.css';

const codeUser = `
class [[User]](orange _ 1) {
    ...

    func [[muteProfile]](green _ 1)() {
        [[posts = self.getPosts()]](plum _ 1)
        [[stories = self.getStories()]](plum _ 1)
        [[posts.mute()]](plum _ 1)
        [[stories.mute()]](plum _ 1)   
    }
}`;

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>Calling a function</h2>
                <p>General form of calling a function in code:</p>
                <p>function_title (list_of_inputs)</p>
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
            <Section.Side />
        </Section>
        <Section>
            <Section.Main>
                <p>Example of calling a function</p>
                <div className={s.table}>
                    <div className={s.cell}>
                        <b>In writing</b>
                    </div>
                    <div className={s.cell}>
                        <b>What it looks like in code</b>
                    </div>

                    <div className={s.cell}>
                        A function that allows a user’s posts to be temporarily muted (not
                        displayed):
                        <br /> <br />A function of the class{' '}
                        <HL color='orange' active inline={3}>
                            User
                        </HL>
                        , that we call{' '}
                        <HL color='green' active inline={3}>
                            «mute user»
                        </HL>
                        ,{' '}
                        <HL color='plum' active inline={3}>
                            identifies this user’s posts and stories
                        </HL>
                        , and then{' '}
                        <HL color='plum' active inline={3}>
                            mutes them
                        </HL>
                        .
                    </div>

                    <div className={s.cell}>
                        <Code value={codeUser} />
                    </div>
                </div>
            </Section.Main>
        </Section>
    </>
);
