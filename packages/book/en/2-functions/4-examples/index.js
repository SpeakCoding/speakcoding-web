import React from 'react';
import { Code, Grid, HL, Icon, Pre, Section } from '@sc/ui';
import Post from '../../../common/2/class-post';
import s from './style.css';

const code1 = `
func (post* {{hl:Post}}(orange)) {{hl:Add Like}}(green)({{hl:user User}}(aquamarine)) {{hl:Number}}(light-sky-blue) { 
    {{hl:new_like = new Like(user)}}(plum)
    {{hl:post.likes.add(new_like)}}(plum)
    {{hl:return count(post.likes)}}(light-sky-blue)
}`;

const code2 = `
func {{hl:NumberOfLikes}}(green)() {{hl:Number}}(light-sky-blue) { 
    {{hl:number_of_likes = self.setOfLikes.length}}(plum)
    {{hl:return number_of_likes}}(light-sky-blue)
}`;

const code3 = `
class {{hl:User}}(orange) {
    ...

    func {{hl:muteProfile}}(green)() {
        {{hl:posts = self.getPosts()}}(plum)
        {{hl:stories = self.getStories()}}(plum)
        {{hl:posts.mute()}}(plum)
        {{hl:stories.mute()}}(plum)
    }
}`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main>
                <h2>Examples of a description of a function</h2>
                <Grid cols='25% 25% 50%'>
                    <Grid.Cell border='right bottom'>
                        <b>The structure of a function’s definition</b>
                    </Grid.Cell>
                    <Grid.Cell border='right bottom'>
                        <b>In writing</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' />
                    <Grid.Cell border='right'>
                        <div className={s.hint}>
                            <span>Functions are described at the same place where classes are</span>
                            <Icon name='arrow-right' size={24} />
                        </div>
                    </Grid.Cell>
                    <Grid.Cell>
                        <Post />
                        <pre>...</pre>
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        <ul>
                            <li>
                                <HL color='green'>Title</HL>
                            </li>
                            <li>
                                <HL color='orange'>Class</HL> to which it relates
                            </li>
                            <li>
                                <HL color='plum'>Sequences/list of operations</HL> that it performs
                            </li>
                            <li>
                                <HL color='aquamarine'>Inputs</HL>
                            </li>
                            <li>
                                <HL color='light-sky-blue'>Class of the value</HL> that the function
                                returns
                            </li>
                        </ul>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        A function of the class <HL color='orange'>Post</HL> that we call{' '}
                        <HL color='green'>"Add Like"</HL>; <HL color='aquamarine'>given a user</HL>,
                        the function{' '}
                        <HL color='plum'>
                            creates a like from that user and adds it to that post’s list of likes,
                            and communicates
                        </HL>{' '}
                        <HL color='light-sky-blue'>the number</HL>/
                        <HL color='plum'>new quantity of likes</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' />
                    <Grid.Cell border='right' hlactive>
                        Or a function of the class <HL color='orange'>Post</HL> that we call{' '}
                        <HL color='green'>"Number of Likes"</HL>;{' '}
                        <HL color='aquamarine'>it does not require any inputs</HL>,{' '}
                        <HL color='plum'>it determines how many likes a post has</HL>{' '}
                        <HL color='light-sky-blue'>and communicates that number</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code2} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
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
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <p>
                    <b>Example of calling a function</b>
                </p>
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
                        <Code value={code3} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </Section>
);
