import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '[[UPDATE]](thistle) [[posts]](green) [[SET]](plum) ' +
    '[[number_of_comments=1]](wheat) [[WHERE id=1]](green-yellow);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Another important aspect of working with databases is updating the data. Let’s
                    say a comment has been added to our post and we wish to update the indicator for
                    the number of comments:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='1fr 1fr 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Request description</b>
                    </Grid.Cell>
                    <Grid.Cell border='right bottom'>
                        <b>Description clarification</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code (SQL)</b>
                    </Grid.Cell>

                    <Grid.Cell border='right'>
                        Update number of comments for the post with id=1
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Update</HL> the rows from the table{' '}
                        <HL color='green'>posts</HL>, <HL color='plum'>setting the column</HL>{' '}
                        <HL color='wheat'>number_of_comments to 1</HL>,{' '}
                        <HL color='green-yellow'>
                            but only for rows where the column id is equal to 1
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
