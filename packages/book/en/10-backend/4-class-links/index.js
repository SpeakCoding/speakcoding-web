import React from 'react';
import { Button, Expand, Grid, HL, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';

const code1 = `create_table ("followships") do |table_followeship|
    table_followeship.bigint("follower_id")
    table_followeship.bigint("followee_id")
    table_followeship.datetime("created_at")
    table_followeship.datetime("updated_at")
end`;

const code2 = `has_many (:followers_records, class_name: 'Followship', foreign_key: 'followee_id', dependent: :destroy)
has_many (:following_records, class_name: 'Followship', foreign_key: 'follower_id', dependent: :destroy)
has_many :followers, through: :followers_records, source: :follower
has_many :followees, through: :following_records, source: :followee`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h2>Links between classes</h2>
                <p>
                    Now let’s explore cases when components belong to a more complex class that
                    can’t be stored directly in a table. For example, some User components on the
                    client are Sets, so any instance of the User class has a posts component (posts
                    created by that particular user).
                </p>
                <p>
                    To add this component, use the standard <b>ActiveRecord</b> function has_many
                    (as every user can have multiple posts) and assign it the name of the ‘posts’
                    component. This function adds the post component to all User instances. Reading
                    this component will return a set of Post instances that was created based on
                    filtered rows from the posts table. These are user post entries that{' '}
                    <b>ActiveRecord</b> finds in the posts table via the corresponding id. The posts
                    table contains a user_id column for every entry, and it is this column that{' '}
                    <b>ActiveRecord</b> uses to find the post entries. As such, we ‘link’ the users
                    table with the posts table using functions of the <b>ActiveRecord</b> class.
                </p>
                <p>
                    Similarly, in the Post class, we use the has_one(‘user’) function, which adds
                    the user component to every instance of a post, linking each post to a specific
                    user via the user_id column in the posts table.
                </p>
                <h2>
                    (Additional) Many to many{' '}
                    <Expand.Control htmlFor='10-4-1'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='10-4-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Things get a little more complicated when it comes to followers, as
                                the holder of the account and those who follow all it belong to the
                                User class.
                            </p>
                        </Section.Main>
                    </Section.Block>

                    <Section.Block>
                        <Section.Main>
                            <p>
                                <b>Followships</b> Table
                            </p>
                            <Grid cols='1fr 1fr 1fr 1fr'>
                                <Grid.Cell border='right bottom'>id</Grid.Cell>
                                <Grid.Cell border='right bottom' hlactive>
                                    <HL color='steel-blue'>follower_id</HL>
                                </Grid.Cell>
                                <Grid.Cell border='right bottom' hlactive>
                                    <HL color='sandy-brown'>followee_id</HL>
                                </Grid.Cell>
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
                                In the followship table, where the server stores information about a
                                specific user’s followers, each "
                                <HL color='steel-blue'>follower_id</HL>" corresponds to the user_id
                                of a user who follows that account. Meanwhile{' '}
                                <HL color='sandy-brown'>followee_id</HL> is the user_id of the
                                account holder.
                            </p>
                            <p>
                                In the file <b>db/schema.rb</b> in the code, you’ll see a
                                description of how to create both the table itself and its columns
                                in the server-side database.
                            </p>
                            <Pre>{code1}</Pre>
                            <p>
                                Every new subscription (follower) to this account entails an entry
                                being made to this table, while every unsubscription entails an
                                entry being deleted. This represents a many-to-many link of the
                                users table with itself via the followships table.
                            </p>
                            <p>
                                When you have two related elements belonging to the same class, or
                                when in the class description you refer twice to one and the same
                                element type (as per followships), you need to indicate the name of
                                the cell in text form directly in the code.
                            </p>
                            <p>To do this, we create the temporary Followship class.</p>
                            <Pre>{code2}</Pre>
                            <p>
                                Thus, there are three types of inter-elemental link on the server
                                side:
                            </p>
                            <ul>
                                <li>
                                    One-to-many: as in the case of a user and their posts, this is
                                    when one element can be linked to several entries in a different
                                    table. <br />
                                    Post has one user <br />
                                    User has many posts
                                </li>
                                <li>
                                    One-to-one: when one entry in a table corresponds to one entry
                                    in another table.
                                </li>
                                <li>
                                    Many-to-many: when several entries in one table correspond to
                                    several entries in another table. This type requires additional
                                    tables, where the data is broken down based on the one-to-many
                                    principle <br />
                                    Follower has many Followees. <br />
                                    Followee has many Followers.
                                </li>
                            </ul>
                        </Section.Main>
                    </Section.Block>

                    <Assignment id='en/27' />
                </Expand>
            </Section.Main>
        </Section.Block>
    </Section>
);
