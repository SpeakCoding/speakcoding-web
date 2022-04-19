import React from 'react';
import { Grid, HL } from '@sc/ui';

const Asset = () => (
    <>
        <p>
            <b>Comments</b> Table
        </p>
        <Grid cols='repeat(5, auto)'>
            <Grid.Cell border='right bottom' semidense='top bottom'>
                id
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom' hlactive>
                <HL color='green'>post_id</HL>
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom' hlactive>
                <HL color='orange'>user_id</HL>
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom'>
                text
            </Grid.Cell>
            <Grid.Cell border='bottom' semidense='top bottom'>
                created_at
            </Grid.Cell>
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell />
        </Grid>
        <p>
            <b>Posts</b> Table
        </p>
        <Grid cols='repeat(4, auto)'>
            <Grid.Cell border='right bottom' semidense='top bottom' hlactive>
                <HL color='green'>id</HL>
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom' hlactive>
                <HL color='orange'>user_id</HL>
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom'>
                text
            </Grid.Cell>
            <Grid.Cell border='bottom' semidense='top bottom'>
                created_at
            </Grid.Cell>
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell />
        </Grid>
        <p>
            <b>Users</b> Table
        </p>
        <Grid cols='repeat(4, auto)'>
            <Grid.Cell border='right bottom' semidense='top bottom' hlactive>
                <HL color='orange'>id</HL>
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom'>
                username
            </Grid.Cell>
            <Grid.Cell border='right bottom' semidense='top bottom' hlactive>
                <HL color='light-sky-blue'>email</HL>
            </Grid.Cell>
            <Grid.Cell border='bottom' semidense='top bottom'>
                created_at
            </Grid.Cell>
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell border='right' />
            <Grid.Cell />
        </Grid>
    </>
);

export default Asset;
