import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '{{hl:INSERT INTO}}(thistle) {{hl:posts}}(red) ({{hl:"id"}}(orange)) VALUES ({{hl:1}}(orange));';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    You may be wondering why the values need to be listed each time if they are
                    already indicated in the heading. Doing so makes the code more readable, and
                    saves you having to look up the table description every time you have a request
                    to add a description to the table. Also, an insert request may not contain all
                    of the values in the header, leaving some ‘cells’ of the new rows empty. For
                    example, let’s say you wish to insert a post into the table, but for now you
                    only have its id:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='56% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Request description</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code (SQL)</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Insert into the table</HL> <HL color='red'>posts</HL> a
                        new row with an <HL color='orange'>id</HL> equal to{' '}
                        <HL color='orange'>1</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Only the id column of the newly inserted row will be populated. To add more
                    values, we use the UPDATE request (more on that later).
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
