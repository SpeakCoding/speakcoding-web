import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import s from './style.css';

const code1 =
    '[[INSERT]](green) [[INTO]](floral-white) [[posts]](red) ([["id"]](orange), ' +
    '[["date"]](light-sky-blue), [["user_id"]](aquamarine), [["caption"]](plum), ' +
    '[["image_url"]](wheat), [["location"]](blue), [["number_of_likes"]](sandy-brown), ' +
    '[["number_of_comments"]](thistle), [["liked"]](green-yellow))';

const code2 =
    'VALUES ([[1]](orange), [[1603046189]](light-sky-blue), [[1]](aquamarine), ' +
    '[["My first post! #welcome"]](plum), [["https://speakcoding.com/posts/1/images/square.png"]](wheat), ' +
    '[["Anchorage, Alaska"]](blue), [[0]](sandy-brown), [[0]](thistle), [[0]](green-yellow))';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Now that we have a posts table, we can use it to store information received form
                    the server about posts. Adding an entry to the table is like adding a row in
                    Excel. To do so we use the INSERT request:
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
                    <Grid.Cell border='right' dense='bottom' hlactive>
                        <HL color='green'>Add to table</HL> <HL color='red'>Posts</HL> a new row,
                        having populated the value fields with data about a specific post (
                        <HL color='orange'>id</HL>; <HL color='light-sky-blue'>date</HL>;{' '}
                        <HL color='aquamarine'>user id</HL>…)
                    </Grid.Cell>
                    <Grid.Cell dense='bottom' hlactive>
                        <Code value={code1} />
                    </Grid.Cell>
                    <Grid.Cell border='right'>or</Grid.Cell>
                    <Grid.Cell />
                    <Grid.Cell border='right' dense='top'>
                        The column list is specified by listing the column names from the table
                        header. The values should be specified in the same order as the columns are
                        specified.
                    </Grid.Cell>
                    <Grid.Cell dense='top' hlactive>
                        <div className={s.sql}>
                            <Code value={code2} />
                        </div>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
