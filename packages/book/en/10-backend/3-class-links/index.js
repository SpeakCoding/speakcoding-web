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
                        <Button variant='rounded'>read ⤵</Button>
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

        <Section.Block>
            <Section.Main hlactive narrow>
                <h2>Functions that write and read entries in databases</h2>
                <p>
                    Static functions are stored within the inherited <b>ActiveRecord</b> class.
                    These allow us to read and change data from the users table directly in the
                    database.
                </p>
                <p>
                    Let’s assume we wish to create a new post. The server-side function looks like
                    this:
                </p>
                <Pre>
                    @post = <HL color='light-sky-blue'>Post.new</HL>(
                    <HL color='green'>post_params</HL>) <br />
                    @post.user = current_user <br />@<HL color='light-sky-blue'>post.save</HL>
                </Pre>
                <p>
                    The server receives <HL color='green'>a set of post parameters</HL> (data that
                    the user entered into the form on the client), calls the ActiveRecord class’s
                    automatic function <b>create</b>, then creates a post instance and saves it in
                    its database. The active record class means that rather than having to write the
                    SQL request INSERT (used to add strings to databases), we can perform the
                    operation automatically via the inherited class functions.
                </p>
                <p>
                    <b>Another example:</b>
                </p>
                <Pre>
                    @post = Post.<HL color='red'>find</HL>(params[
                    <HL color='light-sky-blue'>:id</HL>])
                </Pre>
                <p>
                    Here the server receives parameters (namely <HL color='light-sky-blue'>id</HL>)
                    from the client, and using the <HL color='red'>find</HL> function (inherited
                    along with ActiveRecord), it makes a SELECT request and finds all posts in the
                    Post table that have this user id.
                </p>
                <p>
                    If we change a specific post, the static function <b>update</b> of the
                    ActiveRecord class makes an SQL UPDATE request to the database and replaces the
                    values with the{' '}
                    <HL color='orange' inline={3}>
                        parameters received from the client
                    </HL>
                    :
                </p>
                <Pre>
                    @post = current_user.posts.find(params[:id]) <br />
                    @post.attributes = <HL color='orange'>post_params</HL> <br />@
                    <HL color='light-sky-blue'>post.save</HL>
                </Pre>
                <p>
                    Summarizing the characteristics of model-class descriptions on the server, we
                    observe the following:
                </p>
                <ul>
                    <li>
                        A class on the server is created based on the description of the components
                        that are indicated in the database (thus the Like class will have the
                        post_id component, for example).
                    </li>
                    <li>
                        We also describe a class in terms of the other program elements it’s linked
                        to. Unlike the description of a structural class on the client, on the
                        server we describe the link between tables (such as how users are linked to
                        posts).
                    </li>
                    <li>
                        We need these links as they allow us to write commands in code on one line
                        by calling class functions and components, thus bypassing SQL requests as
                        per the example below:
                    </li>
                </ul>
                <Pre>
                    @posts = Post.preload(:comments).where(user: users).order('created_at desc')
                </Pre>
            </Section.Main>
        </Section.Block>
    </Section>
);
