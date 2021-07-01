import React from 'react';
import { Img, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import img from '../../../assets/8/2-database.svg';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table5 from './Table5';
import Table6 from './Table6';
import Table7 from './Table7';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Working with databases in code</h1>
                    <h2>Databases</h2>
                    <p>
                        In programming, all information is called data, and the places where it’s
                        stored are called databases. Examples of databases as seen by a programmer
                        include:
                    </p>
                    <ul>
                        <li>A recipe book as a database of recipes</li>
                        <li>A library as a database of books</li>
                        <li>The gallery on your phone as a database of photos</li>
                    </ul>
                    <p>
                        There is even a database inside you, in the form of your DNA. A person can
                        also be considered a database of memories, life experiences, and contact
                        with other people.
                    </p>
                    <p>
                        Programming uses special databases, of which there are many and with which
                        we interact in various ways. The most commonly used databases interact with
                        programs using{' '}
                        <Term id='sql' tooltip>
                            Structured Query Language (SQL)
                        </Term>
                        . Any interaction with a database occurs by sending it a request to perform
                        a specific action (to create, read, alter, or delete data).
                    </p>
                    <p>
                        Data in these databases is stored in tables. Each of these tables can be
                        thought of as a sheet in Excel.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <div className={s.img}>
                            <Img src={img} />
                        </div>
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Table1 />
            <Table2 />
            <Table3 />
            <Table4 />
            <Table5 />
            <Table6 />
            <Table7 />

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        You may have noticed that, in addition to words that determine the request{' '}
                        <b>type</b> (INSERT, UPDATE, SELECT, DELETE), requests also contain request{' '}
                        <b>condition keywords</b> (WHERE, SET etc.). Both have traditionally been
                        written in capital (upper case) letters to distinguish them visually from
                        table and column titles; it makes no difference to the database which case
                        you use. The choice of <b>condition keywords</b> depends on the <b>type</b>{' '}
                        of request you are describing. There are courses and literature dedicated to
                        working with databases, but knowing the following four basic commands will
                        be sufficient to let you work with data in tables:
                    </p>
                    <ol>
                        <li>SELECT to read rows from a table</li>
                        <li>UPDATE to change the rows</li>
                        <li>INSERT to add new rows</li>
                        <li>DELETE to delete rows</li>
                    </ol>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment number={19} href='https://forms.gle/chnd79MLCYrevtvf7'>
            Describe the request that you need to write in a database to edit a post. Try to write
            it as an SQL request.
        </Assignment>
    </>
);
