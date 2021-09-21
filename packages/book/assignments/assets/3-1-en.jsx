import React from 'react';
import { Grid, HL } from '@sc/ui';

const Asset = () => (
    <Grid>
        <Grid.Cell border='right' hlactive>
            Post class function that adds a like to a post <br />
            <br />
            Where
            <ul>
                <li>
                    <HL color='plum'>Title</HL>
                </li>
                <li>
                    <HL color='light-sky-blue'>Class to which the function belongs</HL>
                </li>
                <li>
                    <HL color='red'>Sequence/list of operations performed</HL>
                </li>
                <li>
                    <HL color='orange'>Inputs</HL>
                </li>
                <li>
                    <HL color='green'>Class of value given</HL>
                </li>
            </ul>
        </Grid.Cell>
        <Grid.Cell hlactive>
            The <HL color='light-sky-blue'>Post</HL>class function, which we call{' '}
            <HL color='plum'>Add Like</HL>, which when the{' '}
            <HL color='orange'>user (whi liked the post) is specified</HL>{' '}
            <HL color='red'>
                creates a like from that user and adds it to the list of likes for that post, and
                indicates
            </HL>{' '}
            <HL color='green'>the number</HL>, <HL color='red'>or new quantity, of likes</HL>
        </Grid.Cell>
    </Grid>
);

export default Asset;
