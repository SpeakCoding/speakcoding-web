import React from 'react';
import { Button, Code, Expand, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code1 = `
User
    Username
    Password`;

const code2 = `
User 
    [] Post (set of posts created by the user)`;

const code3 = `
User
    Followers [] User (profiles of the users following you)
    Following [] User (profiles of the users you follow)`;

const code4 = `
Personal Feed 
    [] Post (a feed of posts created by the users you follow)`;

const code5 = `
User
    [] Posts (set of posts created by the user)
    [] Followers (profiles of users who follow that user)
    [] Followers you follow (profile of users whom that user follows)
    Personal Feed (feed of posts created by users whom that user follows)`;

export default () => (
    <Section>
        <Section.Main narrow>
            <h2>Ruby on Rails: files and folders</h2>
            <p>
                Writing server-side code is largely similar to writing client code. But unlike
                client code, server-side code is often similar from one application to another,
                which has given rise to standard ‘solutions’. These have greatly simplified
                development and allow us to focus on the small part of the code that is unique to
                our application. One such solution is the{' '}
                <Term id='ruby-on-rails'>Ruby on Rails</Term> framework, which has standardised the
                principles for storing data as well as for naming classes and functions, and thus
                for naming the files and folders in which they are stored on the server.
            </p>
            <p>All of the aforementioned classes must be in strictly defined folders:</p>
            <p>
                <b>app/models</b>: All the main program classes are stored in files in this folder.
                All files are named according to the names of the classes they contain, for example
                app/models/user.rb
            </p>
            <p>
                <b>app/controllers</b>: Post/users/comments are what we see in endpoints.
                Controllers define standard functions with class instances, and also define special
                class functions such as <i>current user</i>, which lets the program check whether a
                user can perform a particular action on an object.
            </p>
            <p>
                <b>db</b>: Stores the plan of the server’s database as well as entries to test
                (seed) the server. We use our own data to test the server before actual users appear
                in the program.
            </p>
            <p>
                <b>config/routes.rb</b>: These files define the routes in the endpoint URL to which
                the server should respond: when the server sees a user specified in the URL request,
                it reads this request according to the interaction defined in the route.
            </p>
            <p>We can also use folders such as:</p>
            <p>
                <b>app/serializer</b>: For each class (each program component), these files contain
                descriptions of how to convert the class’s objects into text. While this description
                could theoretically be part of the User model (structural definition), in Ruby on
                Rails, it is generally written in a separate file.
            </p>
            <p>
                <b>app/jobs, layouts/views</b>: Part of a standard project that is created
                automatically along with a Ruby on Rails project and that you will not need to
                customize around your program. For example, these files might say that data can be
                returned from the server in the form of an html page.
            </p>
            <p>
                Having downloaded Ruby on Rails from the internet and completed all the steps in the
                instructions, you can now ‘create a project’. This operation creates all the
                requisite standard folders and populates them with standard files, after which you
                will need only to create the files described in the previous chapters of this
                section (models and controllers that describe how to create databases).
            </p>
            <h2>
                (Additional) Post feed{' '}
                <Expand.Control htmlFor='11-3-1'>
                    <Button variant='rounded'>⤵</Button>
                </Expand.Control>
            </h2>
            <Expand id='11-3-1'>
                <p>
                    Let’s conclude this chapter by discussing how to create a feed of the posts that
                    you see when you launch Instagram.
                </p>
                <p>
                    You download the app from the store, register your account, and create a user
                    profile (User). Your account information is stored in your device’s memory and
                    on the program server:
                </p>
                <Pre.Box>
                    <Code value={code1} />
                </Pre.Box>
                <p>
                    Having installed the app, you begin creating posts, information about which is
                    also stored:
                </p>
                <Pre.Box>
                    <Code value={code2} />
                </Pre.Box>
                <p>A list of the people you follow and who follow you is added to these posts:</p>
                <Pre.Box>
                    <Code value={code3} />
                </Pre.Box>
                <p>
                    Thus you create your personal feed – a feed of posts created by the users you
                    follow
                </p>
                <Pre.Box>
                    <Code value={code4} />
                </Pre.Box>
                <p>
                    So we can think of a personal feed as a component of the User class or an
                    additional element of the Feed class in which we temporarily store a set of
                    filtered posts. As you may remember, these links are described thus in
                    server-side code:
                </p>
                <Pre.Box>
                    <Code value={code5} />
                </Pre.Box>
                <p>
                    Every time you open the program or update your post feed, you request your
                    personal feed (<Term id='instance'>an object of the Feed class</Term>) from the
                    server; this feed contains a list of all recent posts by your friends (users you
                    follow). Your phone receives this data from the server and converts it into the
                    latest updates for your Personal Feed. This means that your device contains all
                    the data about the current state of your feed.
                </p>
            </Expand>
        </Section.Main>
    </Section>
);
