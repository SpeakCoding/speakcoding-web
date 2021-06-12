import React from 'react';
import { Code, Grid, HL, Img, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from '../../../assets/6/1-while-en.svg';

const code4 = `
func showComments(post Post) {
    var comments = [[post.getComments]](wheat)()
    [[for]](green) ([[comment in comments]](light-sky-blue)) {
        [[comment.display]](plum)()
    }
}`;

const code5 = `
func showComments(post Post) {
    var comments = post.getComments()
    [[for]](green) ([[number = 0]](light-sky-blue); [[number < comments.length()]](thistle); number = number+1) {
        [[comments[]](red)[[number]](light-sky-blue)[[].display()]](red)
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='for-while-cycles' tooltip>
                        for, while (cyclical operators)
                    </Term>{' '}
                    are used when the actions described in a paragraph need to be repeated multiple
                    times.
                </p>
                <p>
                    For example, let’s say we wish to display all comments on a particular post. In
                    this case, the action to display one of the comments will need to be repeated
                    for all comments contained in that post’s Set of Comments.
                </p>
                <p>
                    Loops are denoted in code by standard words; while these differ between
                    languages, ‘for’ and ‘while’ are the most common.
                </p>
                <p>
                    The number of times this action needs to be repeated is usually determined by
                    the value written in the round brackets ( ) following for/while and before the
                    start of a paragraph.
                </p>
                <p>
                    <b>While</b>: if the condition (logical expression) shown in brackets is true,
                    then the code block in {'{}'} is executed, after which the program again returns
                    to checking the condition. The loop’s task is complete only when the condition
                    (logical expression) in brackets (heading) ceases to be true, i.e., the
                    loop-execution condition is no longer met.
                </p>
                <p>
                    <Img src={img} width='70%' />
                </p>
                <p>
                    <HL.Context active>
                        <HL color='green'>for</HL> is used when we wish to execute a code block for
                        each instance of a particular set. For example, <HL color='green'>for</HL>{' '}
                        <HL color='light-sky-blue'>each comment in Set of comments</HL>.
                    </HL.Context>
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
                        The ‘show comments’ function of the Post class{' '}
                        <HL color='wheat'>takes all post comments</HL> and{' '}
                        <HL color='green'>for</HL>{' '}
                        <HL color='light-sky-blue'>each comment in the post’s comment set</HL>,{' '}
                        <HL color='plum'>displays it on the screen</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code4} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <HL color='green' active>
                        for
                    </HL>{' '}
                    can also be written another way, whereby we can indicate the number of the list
                    element from which to start and the number until which the code block should be
                    executed.
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
                        Displays all post comments, specifically. <br />
                        <HL color='green'>For</HL> each post comment,{' '}
                        <HL color='light-sky-blue'>starting from the first</HL>{' '}
                        <HL color='thistle'>and ending with the last</HL>,{' '}
                        <HL color='red'>displays them on the screen</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code5} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
