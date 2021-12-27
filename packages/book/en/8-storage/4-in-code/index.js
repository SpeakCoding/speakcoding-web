import React from 'react';
import { HL, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import Example1 from './Example1';
import Example2 from './Example2';

const code1 = `
var database: SQLiteDatabase
database = SQLiteDatabase(filePath: {{databasePath}}(hl:light-sky-blue))`;

const code2 = `
let query = {{"""}}(hl:orange)
    CREATE TABLE posts (
        "id" ,
        "date",
        "user_id",
        "caption",
        "image_url",
        "location",
        "number_of_likes",
        "number_of_comments",
        "liked"
    )
    {{"""}}(hl:orange)`;

const code3 = `let query = "CREATE TABLE posts (\\"id\\", \\"date\\", \\"user_id\\", \\"caption\\", \\"image_url\\", \\"location\\", \\"number_of_likes\\", \\"number_of_comments\\", \\"liked\\")"`;

const code4 = `database.executeQuery(sqlQuery: query, values: nil)`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h2>Now let’s look at how database work is done in program code.</h2>
                    <p>
                        There is a standard class called{' '}
                        <Term id='sqlite' tooltip>
                            SQLiteDatabase
                        </Term>{' '}
                        that describes an SQLite database. To work with a database, we need to
                        create an example of this class, which we then save in the database
                        variable.
                    </p>
                    <Pre>{code1}</Pre>
                    <p>
                        Here we need to indicate the{' '}
                        <HL color='light-sky-blue' active>
                            file path
                        </HL>{' '}
                        (including the filename) as a string. This is like indicating the path to a
                        file containing an Excel document.
                    </p>
                    <p>
                        The standard SQLiteDatabase class has the standard function database.open()
                        that prepares the instance we have created for further use (e.g. loading the
                        required data into the memory) and executing the aforementioned SQL requests
                        (create database, select etc.).
                    </p>
                    <p>
                        Now that we have a working database, we can create the tables we need, such
                        as one in which to store post data (Post table). To do this, we write a
                        Create Table request (covered earlier in this chapter) in an SQL string:
                    </p>
                    <Pre>{code2}</Pre>
                    <p>
                        For clarity and convenience, instead of writing on one line, we make an
                        entry that lets us store a multiline string in the query variable (hence the
                        entry begins and ends with{' '}
                        <HL color='orange' active>
                            repeated triple quote marks
                        </HL>
                        ).
                    </p>
                    <p>The entry for this operation would look like this if written on one line:</p>
                    <Pre>{code3}</Pre>
                    <p>
                        Now we can send this request to the database via another standard function,
                        namely executeUpdate of the SQLiteDatabase class.
                    </p>
                    <Pre>{code4}</Pre>
                    <p>
                        When the app is first opened, a post table is created in this database. It
                        is important to avoid creating the table repeatedly, as doing so could cause
                        data to be lost or an error to occur. Therefore, before executing the Create
                        Table request (the strings we described above), we add a check that this
                        table was created in the database.
                    </p>
                </Section.Main>
            </Section.Block>

            <Example1 />
            <Example2 />
        </Section>

        <Assignment id='en/20' />

        <Assignment id='en/21' />

        <Assignment id='en/22' />
    </>
);
