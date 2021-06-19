import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
if [[!]](plum)[[hasTable]](sandy-brown)(name: "post") {
    let query = """
        CREATE TABLE posts (
            "id" INTEGER PRIMARY KEY NOT NULL,
            "date" REAL,
            "user_id" INTEGER,
            "caption" TEXT,
            "image_url" TEXT,
            "location" TEXT,
            "number_of_likes" INTEGER,
            "number_of_comments" INTEGER,
            "liked" INTEGER
        )
        """

    database.executeQuery(sqlQuery: query, values: nil)
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Description of function checking presence of table in database</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        We place this check in the separate{' '}
                        <HL color='sandy-brown'>function hasTable</HL>, which takes the table name
                        as an input.
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
                    If the device detects that a table with the post name{' '}
                    <HL color='plum' active>
                        already exists
                    </HL>
                    , then it won’t execute any of the code in the paragraph after if.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
