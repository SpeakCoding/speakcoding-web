import React from 'react';
import { Code, Grid, HL } from '@sc/ui';

const code =
    '{{hl:UPDATE}}(thistle) {{hl:posts}}(green) {{hl:SET}}(plum) ' +
    '{{hl:number_of_comments=1}}(wheat) {{hl:WHERE id=1}}(green-yellow);';

const Asset = () => (
    <Grid cols='repeat(3, auto)'>
        <Grid.Cell border='right bottom'>
            <b>Request description</b>
        </Grid.Cell>
        <Grid.Cell border='right bottom'>
            <b>Description clarification</b>
        </Grid.Cell>
        <Grid.Cell border='bottom'>
            <b>How this is rendered in code (SQL)</b>
        </Grid.Cell>

        <Grid.Cell border='right'>Update number of comments for the post with id=1</Grid.Cell>
        <Grid.Cell border='right' hlactive>
            <HL color='thistle'>Update</HL> the rows from the table <HL color='green'>posts</HL>,{' '}
            <HL color='plum'>setting the column</HL> <HL color='wheat'>number_of_comments to 1</HL>,{' '}
            <HL color='green-yellow'>but only for rows where the column id is equal to 1</HL>.
        </Grid.Cell>
        <Grid.Cell hlactive>
            <Code value={code} />
        </Grid.Cell>
    </Grid>
);

export default Asset;
