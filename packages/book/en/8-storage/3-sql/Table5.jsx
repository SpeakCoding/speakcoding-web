import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '{{hl:SELECT}}(thistle) {{hl:image_url, date}}(sandy-brown) FROM {{hl:posts}}(green) {{hl:WHERE}}(plum) {{hl:id=1}}(green-yellow);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    We don’t have to read all columns, only those of interest to us. Let’s say this
                    refers to a picture and the date it was created:
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
                        For the post with id=1, read the column with a link to the picture and post
                        date
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Read</HL>{' '}
                        <HL color='sandy-brown'>the columns image_url and date</HL> of rows from the
                        table <HL color='green'>posts</HL> <HL color='plum'>that have</HL>{' '}
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
