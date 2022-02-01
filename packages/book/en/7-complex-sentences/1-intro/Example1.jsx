import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';

const code1 = `
var lastUserLike User
lastUserLike = {{hl:post}}(red).{{hl:likes}}(orange).{{hl:last}}(green).{{hl:getUser}}(aquamarine)()
`;

const code2 = `
var postLikes [Like]
var lastLike Like
var user User

var postLikes = post.likes
var lastLike = postLikes.last
var user = lastLike.getUser()`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>For example:</b>
                </p>
                <p>Let’s say we want to find the last person who has liked an Instagram post.</p>
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
                        <HL color='aquamarine'>Select the person</HL> who left the{' '}
                        <HL color='green'>last like</HL> out of{' '}
                        <HL color='orange'>all the likes</HL>{' '}
                        <HL color='red'>for the selected post</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code1} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <HL.Context active>
                        First we take all of the post’s likes (<HL color='red'>post</HL>.
                        <HL color='orange'>likes</HL>), then identify the most recent like (
                        <HL color='red'>post</HL>.<HL color='orange'>likes</HL>.
                        <HL color='green'>last</HL>), then determine who left that most recent like
                        (<HL color='red'>post</HL>.<HL color='orange'>likes</HL>.
                        <HL color='green'>last</HL>.<HL color='aquamarine'>getUser</HL>()).
                    </HL.Context>
                </p>
                <p>
                    <b>This sequence of actions can be presented thus for clarity:</b>
                </p>
                <Pre>{code2}</Pre>
            </Section.Main>
        </Section.Block>
    </>
);
