import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import s from './style.css';

const code6 = `
private [[func]](orange) [[updateLikes]](sandy-brown)() {
    let likerFollowee = [[self.post]](light-sky-blue).[[likerFollowee]](green)
    self.[[likerFolloweeProfilePictureView]](plum).showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)
    [[if likerFollowee != nil]](red) {
        let textTemplate = (self.post.[[numberOfLikes > 1]](aquamarine)) ? [["Liked by {user} and {others}" : "Liked by {user}"]](wheat)
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>Breaking</h2>
                <p>
                    Breaking is used when we need to stop reading a paragraph or to transfer
                    (return) a value from the function that is running within the paragraph.
                </p>
                <p>
                    The words <b>break/continue/return</b> are used in code to indicate a break in
                    the list of actions written in the paragraph:
                </p>
                <p>
                    <b>Break</b>: Stops running the loop altogether. <br />
                    <b>Continue</b>: Stops the current iteration and starts again . <br />
                    These two are used only in loop descriptions, while <b>return</b> is used only
                    for functions.
                </p>
                <p>
                    <b>Examples:</b>
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>Show only comments with replies</Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <pre>
                            <b>for</b> comment in comments {'{'} <br />
                            {'    '}
                            <b>if</b> comment.replies.count == 0 {'{'} <br />
                            {'        '}
                            <b>continue</b> <br />
                            {'    }'} <br />
                            {'    '}comment.display() <br />
                            {'}'}
                        </pre>
                    </Grid.Cell>
                    <Grid.Cell border='right'>Find the first comments with responses</Grid.Cell>
                    <Grid.Cell>
                        <pre>
                            var firstCommentWithReplies: Comment? <br />
                            <b>for</b> comment in comments {'{'} <br />
                            {'    '}
                            <b>if</b> comment.replies.count > 0 {'{'} <br />
                            {'        '}firstCommentWithReplies = comment <br />
                            {'        '}
                            <b>break</b> <br />
                            {'    }'} <br />
                            {'}'}
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    If we use the word break/continue in the paragraph condition, it will relate to
                    the entire paragraph loop.
                </p>
                <p>
                    Return is like break, except that it’s for functions. If the function does not
                    need to relay anything, then we do not write anything after return. If there is
                    a specific value that we need to return in order to use later in the code, then
                    after return we write a variable containing this value/object of a particular
                    class.
                </p>
                <p>
                    <b>Example</b>: Find and display your friends’ likes for a specific Instagram
                    post.
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
                        The <HL color='sandy-brown'>Refresh Likes</HL>{' '}
                        <HL color='orange'>function</HL> checks whether any of the likes for a{' '}
                        <HL color='light-sky-blue'>particular post</HL>{' '}
                        <HL color='green'>are from friends of the user</HL> who is reading the post.
                        <br />
                        <br />
                        <HL color='red'>If so</HL>,{' '}
                        <HL color='plum'>it displays a photo from their profile</HL>{' '}
                        <HL color='wheat'>
                            with the caption "Liked by {'{user}'}" or “Liked by [user] and others”
                        </HL>
                        , <HL color='aquamarine'>if there is more than one such like</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <div className={s.code}>
                            <Code value={code6} />
                        </div>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
