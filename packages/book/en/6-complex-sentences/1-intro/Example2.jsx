import React from 'react';
import { Callout, Grid, HL, Hint, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>Another example:</b>
                </p>
                <p>
                    We want the app to display the text of the last comment made on the most recent
                    post from a specific user’s post feed.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>Function description</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='light-sky-blue'>The comment</HL> on the most recent post from a
                        specific user’s post feed, starting with the{' '}
                        <HL color='plum'>username of the user</HL> who left the comment, then a
                        space, then <HL color='orange'>the full comment text</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <pre className={s.code}>
                            <HL color='light-sky-blue'>comment</HL> =<HL color='wheat'>my_feed</HL>.
                            <Hint>
                                <HL color='red'>GetLatest</HL>
                                <HL color='green'>Post</HL>
                                <Hint.Tooltip>
                                    The function GetLatestPost() always returns a Post
                                </Hint.Tooltip>
                            </Hint>
                            ().GetLatestComment().GetUser().
                            <HL color='plum'>username</HL>{' '}
                            <Hint>
                                + " " +
                                <Hint.Tooltip>
                                    The '+' symbol is a unifier; it performs the same function as in
                                    mathematics, namely linking two elements together. In this case
                                    we add + to link the username and comments, and to write them in
                                    the same string.
                                </Hint.Tooltip>
                            </Hint>{' '}
                            my_feed.
                            <HL color='aquamarine'>GetLatestPost</HL>().
                            <HL color='aquamarine'>GetLatestComment</HL>().
                            <HL color='orange'>text</HL>
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <HL.Context active>
                        So, with an <Term id='instance'>object (instance) of the Feed class</Term>{' '}
                        <HL color='wheat'>stored in the my_feed variable</HL>, you can, in the same
                        string, call its <HL color='red'>function GetLatest</HL>
                        <HL color='green'>Post</HL>(). Understanding that this{' '}
                        <Term id='function'>function</Term> returns an{' '}
                        <HL color='green'>
                            object of the Post class (this class has been defined in the function)
                        </HL>
                        , you can immediately call <HL color='aquamarine'>functions</HL> of{' '}
                        <HL color='green'>this object’s class</HL>{' '}
                        <HL color='aquamarine'>GetLatestComment</HL>().
                    </HL.Context>
                </p>
                <p>The complex sentence can be simplified thus:</p>
                <p>
                    variable . (after a period) call components/functions of the instance of the
                    class that we get having executed the function.
                </p>
                <Callout>
                    Since functions are not always named clearly or readably (as in the example
                    above), you can find a description of the function by right-clicking (or using
                    command+click) on its name. In most special editors, doing this will return you
                    to the function description, where you can verify the value that the function{' '}
                    <HL color='aquamarine' active>
                        returns
                    </HL>
                    .
                </Callout>
                <p>
                    As with the text, we could write the above sentence using several short, simple
                    sentences (see the table); doing so would not affect the program’s efficiency,
                    nor would it simplify or complicate the computer’s task. How to write it is up
                    to you – go for whichever way is easier to read for you and whomever will be
                    seeing the code for the first time. When working with code, we spend most of our
                    time looking for bugs.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>
                            How to obtain the text of the most recent comment on a user’s last post
                        </b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>
                    <Grid.Cell border='right'>
                        A comment on the most recent post from a particular User’s post feed,
                        starting with the username of the user who left the comment; then, after a
                        space, the full text of the comment follows
                    </Grid.Cell>
                    <Grid.Cell>
                        <pre>
                            var comment Text <br />
                            var latestPost Post <br />
                            var latestComment Comment <br />
                            var temp Text <br />
                            <br />
                            latestPost = myUser.GetLatestPost() <br />
                            latestComment = latestPost.GetLatestComment() <br />
                            latestCommentText = latestComment.text <br />
                            comment = "Comment From myUser" + latestCommentText <br />
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
