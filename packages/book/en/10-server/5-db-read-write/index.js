import React from 'react';
import { HL, Pre, Section } from '@sc/ui';

export default () => (
    <Section>
        <Section.Main hlactive narrow>
            <h2>Functions that write and read entries in databases</h2>
            <p>
                Static functions are stored within the inherited <b>ActiveRecord</b> class. These
                allow us to read and change data from the users table directly in the database.
            </p>
            <p>
                Let’s assume we wish to create a new post. The server-side function looks like this:
            </p>
            <Pre>
                @post = <HL color='light-sky-blue'>Post.new</HL>(<HL color='green'>post_params</HL>){' '}
                <br />
                @post.user = current_user <br />@<HL color='light-sky-blue'>post.save</HL>
            </Pre>
            <p>
                The server receives <HL color='green'>a set of post parameters</HL> (data that the
                user entered into the form on the client), calls the ActiveRecord class’s automatic
                function <b>create</b>, then creates a post instance and saves it in its database.
                The active record class means that rather than having to write the SQL request
                INSERT (used to add strings to databases), we can perform the operation
                automatically via the inherited class functions.
            </p>
            <p>
                <b>Another example:</b>
            </p>
            <Pre>
                @post = Post.<HL color='red'>find</HL>(params[<HL color='light-sky-blue'>:id</HL>])
            </Pre>
            <p>
                Here the server receives parameters (namely <HL color='light-sky-blue'>id</HL>) from
                the client, and using the <HL color='red'>find</HL> function (inherited along with
                ActiveRecord), it makes a SELECT request and finds all posts in the Post table that
                have this user id.
            </p>
            <p>
                If we change a specific post, the static function <b>update</b> of the ActiveRecord
                class makes an SQL UPDATE request to the database and replaces the values with the{' '}
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
                <b>
                    Summarizing the characteristics of model-class descriptions on the server, we
                    observe the following:
                </b>
            </p>
            <ul>
                <li>
                    A class on the server is created based on the description of the components that
                    are indicated in the database (thus the Like class will have the post_id
                    component, for example).
                </li>
                <li>
                    We also describe a class in terms of the other program elements it’s linked to.
                    Unlike the description of a structural class on the client, on the server we
                    describe the link between tables (such as how users are linked to posts).
                </li>
                <li>
                    We need these links as they allow us to write commands in code on one line by
                    calling class functions and components, thus bypassing SQL requests as per the
                    example below:
                </li>
            </ul>
            <Pre>@posts = Post.preload(:comments).where(user: users).order('created_at desc')</Pre>
        </Section.Main>
    </Section>
);
