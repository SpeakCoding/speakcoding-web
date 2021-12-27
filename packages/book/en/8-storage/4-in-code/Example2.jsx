import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';

const code1 = `
hasTable(name: String) -> Bool {
    let result = database.{{hl:executeQuery(sqlQuery: SELECT}}(green-yellow) {{hl:count}}(red){{hl:(*)}}(floral-white) FROM {{hl:sqlite_master}}(wheat) {{hl:WHERE type="table" AND name="post"}}(steel-blue);
`;

const code2 = `
\xa0   return result.first!["count(*)"] as! {{hl:Int > 0}}(aquamarine)
}`;

const code3 = `
func hasTable ({{inputName}}(hl:orange): String) {
    let query = """
        SELECT count(*)
        FROM sqlite_master
        WHERE type="table" AND {{name=?}}(hl:orange)
        """
    let result = database.executeQuery(
        sqlQuery: query,
        parameters: [{{inputName}}(hl:orange)]
    )
    return result.first!["count(*)"] as! Int > 0
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Now let’s look at an example with the SELECT request, which helps us check
                    whether the database contains a post table. The checking function looks like
                    this:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='40% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Description of checking function with SELECT request</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='bottom' hlactive>
                        The standard function hasTable{' '}
                        <HL color='green-yellow'>executes the request SELECT</HL>, which{' '}
                        <HL color='floral-white'>reads all data</HL> from the{' '}
                        <HL color='wheat'>general data table</HL>, and{' '}
                        <HL color='red'>filters and counts</HL>{' '}
                        <HL color='steel-blue'>
                            hose for which ‘table’ is written in the type cell and ‘post’ is written
                            in the name cell
                        </HL>
                    </Grid.Cell>
                    <Grid.Cell dense='bottom' hlactive>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        As a result of executing this request, the function returns{' '}
                        <HL color='aquamarine'>
                            the number of such tables if this number is greater than 0
                        </HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code2} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <HL.Context active>
                    <p>
                        We now do the same thing again, only this time in a way that lets us put in{' '}
                        <HL color='orange'>various table names</HL>.
                    </p>
                    <Pre>{code3}</Pre>
                </HL.Context>
            </Section.Main>
        </Section.Block>
    </>
);
