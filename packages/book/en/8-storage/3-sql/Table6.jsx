import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '{{hl:SELECT}}(thistle) {{hl:*}}(sandy-brown) FROM {{hl:posts}}(green) ' +
    '{{hl:ORDER BY}}(plum) {{hl:date}}(aquamarine) {{hl:DESC}}(light-sky-blue);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Neither of these requests can read more than one post if the id is specified, as
                    every id is unique. But they can read all columns of the database if no id is
                    specified:
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
                        <HL color='thistle'>Read</HL> <HL color='sandy-brown'>all columns</HL> of
                        rows from the table <HL color='green'>posts</HL>,{' '}
                        <HL color='plum'>sorting them</HL>{' '}
                        <HL color='aquamarine'>by creation time</HL>{' '}
                        <HL color='light-sky-blue'>in descending order</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
