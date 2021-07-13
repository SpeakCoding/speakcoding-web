import React from 'react';
import { Img, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from './login.svg';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h2>Log In</h2>
                    <p>
                        Much of the information that programs exchange with servers is linked to a
                        specific user and their id. Just as you may give an online store permission
                        to access your bank account when you make payment, so the server requests
                        authentication. Imagine if you had to re-enter and re-send your username and
                        password each time you made a new request. This would be both unsafe and
                        inconvenient for many reasons. As such, authentication procedures have
                        developed to remove the need for a user to enter a username and password
                        every time they request the login function. This request now involves the
                        user sending their name and password just once. When the id information has
                        been checked, the server creates a ‘key’; this is in essence a set of
                        parameters (it is also called a ‘dictionary’ in programming). It then saves
                        this key to its database, and sends confirmation to the device. This key, or{' '}
                        <Term id='auth-token' tooltip>
                            access token
                        </Term>
                        , is hereafter added to every request made to the server. Keys are usually
                        long, don’t duplicate passwords, and are time-limited to prevent them from
                        being deciphered. As such, the login process is one of <b>creating</b> a
                        ‘key’ (the POST method).
                    </p>
                    <p>
                        When a user logs in, the device also creates and stores an instance of their
                        user profile in the current user variable, which stores all the profile
                        information such as posts, followers, likes, and comments. The device
                        (client) also stores user information – or ‘caches’ the user profile – in
                        its database, to then be sent to the server.
                    </p>
                    <p>
                        As you may have deduced, the logout request is similar to <b>deleting</b> a
                        ‘key’ (the DELETE method). This request doesn’t require data about a
                        specific user: it deletes only the temporary key that we mentioned above,
                        meaning a new one will be created next time the user logs in; this ensures
                        their account remains secure.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>
        </Section>
    </>
);
