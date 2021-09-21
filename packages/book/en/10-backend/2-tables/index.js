import React from 'react';
import { Grid, HL, Hint, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import s from './style.css';

const code1 = `
create_table("users") do |table_users|
    table_users.[[string]](steel-blue)("full_name")
    table_users.[[string]](steel-blue)("bio")
    table_users.[[string]](steel-blue)("email")

    table_users.[[string]](steel-blue)("password_digest")
    table_users.[[string]](steel-blue)("authentication_token")

    table_users.[[datetime]](orange)("created_at", precision: 6, null: false)
    table_users.[[datetime]](orange)("updated_at", precision: 6, null: false)
end
`;

const code2 = `
let request = makeRequest(method: HTTPMethod.POST, endpoint: "/[[posts]](light-sky-blue).json", authorized: true, parameters: requestParameters)

create_table ("posts") do |table_posts|
    table_posts.[[bigint]](sandy-brown)("user_id")
    table_posts.string("caption")
    table_posts.string("location")

    table_posts.timestamps()
end
`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h2>Creating tables on the server</h2>
                    <p>The Users table is similar to the one we described on the client.</p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main hlactive>
                    <p>
                        <b>Users</b> Table
                    </p>
                    <Grid cols='1fr 1fr 1fr 1fr'>
                        <Grid.Cell border='right bottom'>id</Grid.Cell>
                        <Grid.Cell border='right bottom'>username</Grid.Cell>
                        <Grid.Cell border='right bottom'>email</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>

                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main hlactive narrow>
                    <p>
                        Opening the db/migrate/create_users.rb in code, you see a description of how
                        to create a Users table and its columns in the server-side database.
                    </p>
                    <Pre value={code1} />
                    <p>
                        <b>Exploring this piece of code</b>
                    </p>
                    <p>
                        The create_table function is a static function of the standard{' '}
                        <Hint>
                            ActiveRecord
                            <Hint.Tooltip>
                                <div className={s.hint}>
                                    The language in which the server-side code is written allows us
                                    to omit a reference to the library:
                                    ActiveRecord::ConnectionAdapters::SchemaStatements.create_table
                                    ("users"). The compiler itself checks all libraries used in the
                                    project for a function with the name create_table and takes the
                                    function's description from these libraries.
                                </div>
                            </Hint.Tooltip>
                        </Hint>{' '}
                        library, and is responsible for creating tables in the database (it
                        configures and executes the SQL-request CREATE TABLE).
                    </p>
                    <p>
                        The create_table function has two input parameters: one is the name of the
                        ‘users’ table, the other is the ‘closure’ function. ‘Closure’ is a function
                        used within the create_table function. In this case, it helps to specify
                        some of the table’s parameters. To add the ‘closure’ definition to a
                        function, we use the keyword ‘do’, after which inside | | we write the
                        table_users input, which is an instance of the special class with the help
                        of whose function we indicate which columns (fields) this table should have.
                        To indicate this, we call the functions of the{' '}
                        <Hint>
                            table_users
                            <Hint.Tooltip>
                                You may remember these names from the standard classes that don't
                                require descriptions, which we covered in the first chapter. In the
                                ActiveRecord library, function names correspond to the type of data
                                stored in a particular column. The column names, and in some cases
                                additional parameters, are given to these functions as inputs.
                            </Hint.Tooltip>
                        </Hint>{' '}
                        variable – <HL color='steel-blue'>string</HL>, integer,{' '}
                        <HL color='sandy-brown'>bigint</HL>, and <HL color='orange'>datetime</HL> –
                        which are responsible for creating the columns of the corresponding classes.
                    </p>
                    <p>
                        <b>Another example of creating tables</b>
                    </p>
                    <p>
                        Let’s look at another example of a table that we’ll need to create in the
                        server’s database. If, say, we wish to transfer a user’s posts to the
                        server, we perform the same operations for the{' '}
                        <HL color='light-sky-blue'>Post</HL> class as we did to create the Users
                        table.
                    </p>
                    <Pre value={code2} />
                    <p>
                        As we can see, there are fields that correspond to class components;
                        however, some fields are not actual values, but rather ids that link to
                        other tables. So the table where the server stores the set of posts that it
                        has received contains a cell with the{' '}
                        <HL color='orange' inline={3}>
                            id of the user who created the posts
                        </HL>
                        :
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        <b>Posts</b> Table
                    </p>
                    <Grid cols='1fr 1fr 1fr 1fr'>
                        <Grid.Cell border='right bottom'>id</Grid.Cell>
                        <Grid.Cell border='right bottom' hlactive>
                            <HL color='orange'>user_id</HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>caption</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>

                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/26' />

        <Section>
            <Section.Main narrow>
                <p>
                    Now we know how to create tables on a server, let’s see what descriptions of
                    structured classes (or models, the main elements of our program) look like, and
                    how they differ from descriptions of structured classes on the client.
                </p>
            </Section.Main>
        </Section>
    </>
);
