import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '[[SELECT]](thistle) [[*]](light-sky-blue) FROM [[posts]](green) [[WHERE]](plum) [[id=1]](green-yellow);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Databases exist primarily to allow us to read and use data in our programs. A
                    post with an id equal to 1 can be read thus:
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

                    <Grid.Cell border='right'>Read all data about the post with id=1</Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Read</HL> <HL color='light-sky-blue'>all columns</HL> of
                        rows from the table <HL color='green'>posts</HL>{' '}
                        <HL color='plum'>that have</HL>{' '}
                        <HL color='green-yellow'>an id equal to 1</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
