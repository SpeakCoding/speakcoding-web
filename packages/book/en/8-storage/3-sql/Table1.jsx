import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
{{hl:CREATE}}(wheat) {{hl:TABLE}}(red) {{hl:Posts}}(sandy-brown) (
    {{hl:"id"}}(orange),
    {{hl:"date"}}(aquamarine),
    {{hl:"user_id"}}(light-sky-blue),
    {{hl:"caption"}}(plum),
    {{hl:"image_url"}}(blue),
    {{hl:"location"}}(green),
    {{hl:"number_of_likes"}}(floral-white),
    {{hl:"number_of_comments"}}(thistle),
    {{hl:"liked"}}(green-yellow) 
);`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    To begin saving data into a table, the table first needs to be created,
                    describing which columns it consists of. In effect, you need to write a heading
                    for the table. This is how the code describes a request to create a Posts table
                    that stores data received from the server about posts:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>Request description</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code (SQL)</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='wheat'>Create</HL> <HL color='red'>table</HL>{' '}
                        <HL color='sandy-brown'>Posts</HL> that has the following cells:
                        <ul>
                            <li>
                                <HL color='orange'>post id</HL>,
                            </li>
                            <li>
                                <HL color='aquamarine'>post creation date</HL>,
                            </li>
                            <li>
                                <HL color='light-sky-blue'>user id</HL>,
                            </li>
                            <li>
                                <HL color='plum'>post text</HL>,
                            </li>
                            <li>
                                <HL color='blue'>link to post’s picture</HL>,
                            </li>
                            <li>
                                <HL color='green'>location</HL> in post and information about
                            </li>
                            <li>
                                <HL color='floral-white'>number of likes</HL> and
                            </li>
                            <li>
                                <HL color='thistle'>comments</HL> on the post, and
                            </li>
                            <li>
                                <HL color='green-yellow'>value liked</HL> for the post for a
                                specific user (‘heart’ beneath the post)
                            </li>
                        </ul>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
