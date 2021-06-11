import React from 'react';
import { Code, Grid, HL, Hint, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code21 = `
class [[Post]](light-sky-blue) {
...
...
func [[showCommentSection]](wheat) () {
    [[commentsCount = post.comments.count()]](orange)
`;

const code22 = `
\xa0       [[commentSection.show()]](orange)
    [[}]](orange)
}
`;

const code3 = `
[[func toggleLike]](red)() {
    if self.isLiked {
        [[self.isLiked = false]](orange)
        [[self.numberOfLikes -= 1]](plum)
    } else {
        [[self.isLiked = true]](light-sky-blue)
        [[self.numberOfLikes += 1]](green)
    }
    [[Cache.shared.update(post: self)]](wheat)
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='if-else' tooltip>
                        if and else (logical operators)
                    </Term>{' '}
                    are used if some of the actions described in the paragraph are to be used only
                    in certain circumstances (rather than all the time). If (...) checks the
                    condition written in brackets, and if the result is true, then the code block is
                    executed.
                </p>
                <p>
                    <b>Example</b>: If a post has a comment, we display the comments section in the
                    interface; if not, we don’t.
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
                    <Grid.Cell border='right bottom' hlactive>
                        The function “<HL color='wheat'>Show section with</HL>{' '}
                        <HL color='light-sky-blue'>post</HL> <HL color='wheat'>comments</HL>”;{' '}
                        <HL color='orange'>
                            if the number of comments in the Set of Comments is greater than 0, then
                            the function that displays the comments section is executed
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell border='bottom' hlactive>
                        <Code value={code21} />
                        <pre>
                            {'    '}
                            <Hint>
                                <HL color='orange'>if (commentsCount > 0) {'{'}</HL>
                                <Hint.Tooltip>
                                    If the logical expression in the condition is true, then the
                                    operation is executed once. Thereafter the program flow returns
                                    to the main branch and executes the subsequent code strings.
                                </Hint.Tooltip>
                            </Hint>
                        </pre>
                        <Code value={code22} />
                    </Grid.Cell>
                    <Grid.Cell border='right' dense='bottom'>
                        A paragraph can sometimes contain multiple conditions simultaneously
                    </Grid.Cell>
                    <Grid.Cell />
                    <Grid.Cell border='right' hlactive>
                        <HL color='red'>The ‘like’ function</HL> checks whether a post has likes;{' '}
                        <HL color='plum'>if there is less than one like</HL>, this means that{' '}
                        <HL color='orange'>nobody has liked the post</HL>, while{' '}
                        <HL color='green'>if there is one or more</HL>, then{' '}
                        <HL color='light-sky-blue'>the function displays the like(s)</HL> and{' '}
                        <HL color='wheat'>sends this information to the server</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code3} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    The <b>else</b> block describes an alternate result of the program’s operation
                    if the condition in brackets is not met.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
