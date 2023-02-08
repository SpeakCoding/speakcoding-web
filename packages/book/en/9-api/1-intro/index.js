import React from 'react';
import { Img, Section } from '@sc/ui';
import { Assignment, Intro, Time } from '../../../components';
import Term from '../../glossary/Term';
import img1 from './client-server.svg';
import img2 from './methods.svg';
import intro from './intro.png';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>API (Application Programming Interface) servers</h1>
                    <Time.Chapter value='~25 min' />
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Intro pic={intro} video='https://kinescope.io/embed/202448174' />
                    <p>
                        We know that a client and a server communicate with each other by way of two
                        programs cooperating.
                    </p>
                    <p>
                        When we save a post (or indeed any other object), we save all data about
                        that post in the form of a text string, then send it to the server. A
                        program runs on the server (device) that, upon receiving a message, converts
                        it from text back into an object and stores its data in a database.
                    </p>
                    <p>
                        Programs can communicate in various ways. Client-server communication did
                        not used to be standardized, and each individual programmer was free to
                        determine the form of this communication for themselves. It eventually
                        became accepted practice to model communication between a client (a specific
                        device) and a server on interaction between a browser and a server hosting
                        Internet pages. We can think of the Internet as an extensive network of
                        interconnected storages (servers) that contain every page. When you click on
                        a link on a page, fill in a form, or perform a search, the browser sends the
                        server an HTTP request with a text string (URL). The server accepts this
                        request and responds with the requisite information. This unified
                        data-access interface is much more convenient than having to write these
                        database requests in code for each individual project.
                    </p>
                    <p>
                        For every system, be it iOS or any other, there is a standard library
                        describing the client-server interaction, so you will rarely find yourself
                        changing the principles of this interaction (i.e. by editing the
                        client-server interaction functions).
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img1} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <h2>HTTP request methods</h2>
                    <p>
                        <Term id='api' tooltip>
                            Server API
                        </Term>
                        : A set of classes, functions, and documentation stating{' '}
                        <b>how one program communicates with another</b>; specifically, how it
                        receives and stores information about objects (such as specific users and
                        their feeds). Let’s look more closely at the types of requests a server
                        receives and how it handles them.
                    </p>
                    <p>
                        There are three types of standard requests made to a server (also called{' '}
                        <Term id='method' tooltip>
                            methods
                        </Term>
                        ): GET (to read information), POST (to create or change objects), and DELETE
                        (to delete). To tell the server which object or list of objects we wish to
                        work with, each request will contain an ‘object path’. For example, to read
                        information about a user with the id ‘1’, we use the path ‘user/1’. And to
                        read a set of their posts, we use ‘user/1/posts’.
                    </p>
                    <p>
                        For each request type (method), the server has a function describing the
                        response to the request.
                    </p>
                    <p>
                        In other words, one of the server’s main functions is to deserialize
                        objects. Having done so, it looks at the{' '}
                        <Term id='endpoint' tooltip>
                            endpoint
                        </Term>{' '}
                        of a given request and launches the corresponding function of the indicated
                        class. The server then begins reading the components of these objects. If
                        the URL endpoint contains user/<i>auth</i>.json, then the server launches
                        the <i>login</i> function. If the URL endpoint contains user/<i>id</i>
                        /posts, then the server looks in the posts table and finds all posts from
                        this particular user by the user’s id.
                    </p>
                    <p>We will now take a closer look at server requests.</p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img2} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>
        </Section>

        <Assignment id='en/23' />
    </>
);
