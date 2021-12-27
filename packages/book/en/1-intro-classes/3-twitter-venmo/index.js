import React from 'react';
import { Img, Section, Structure } from '@sc/ui';
import { Assignment } from '../../../components';
import img from './class-tweet.svg';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        We’re simplifying the code somewhat here. When you open the app, certain
                        aspects of the program’s interface may stand out to you; later in this
                        course, we’ll look at how the definition of the program’s main components
                        differs from what the user sees on the screen.
                    </p>
                    <p>
                        Let’s take a closer look at the logic behind the construction of
                        definitions. We’ll do this by breaking down the code structure of some more
                        of the programs that you may use.
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <h2>Twitter (mobile application)</h2>
                    <p>
                        Similarly to Instagram, Twitter consists of a Feed of Messages (known as
                        ‘Tweets’).
                    </p>
                    <Structure>
                        <h4>Feed</h4>
                        <ul>
                            <li>Set of Tweets</li>
                        </ul>
                        <h4>Tweet</h4>
                        <ul>
                            <li>User</li>
                            <li>Text</li>
                            <li>Time</li>
                            <li>Set of Retweets</li>
                            <li>Set of Replies</li>
                            <li>Set of Likes</li>
                            <li>Set of Shares</li>
                            <li>Picture/GIF</li>
                            <li>Location</li>
                        </ul>
                        <h4>User</h4>
                        <ul>
                            <li>Profile Picture</li>
                            <li>Username</li>
                        </ul>
                    </Structure>
                    <p>
                        As you can see, the structure is very similar and is built around what is
                        the key element of the program. For example, Instagram is a social network
                        on which users publish and share photos and videos. It is built around posts
                        containing pictures or video clips. Twitter, meanwhile, is a social platform
                        for sharing ideas and news in a short format, and is built around Tweets.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky center>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Another example is <b>Venmo</b>, a social platform used for making fast
                        payments. Its main element, or ‘key’ component, is the transaction. A
                        structured definition of Venmo’s platform could look like this:
                    </p>
                    <Structure>
                        <h4>Transaction Feed</h4>
                        <ul>
                            <li>Set of transactions</li>
                        </ul>
                        <h4>Transactions</h4>
                        <ul>
                            <li>User</li>
                            <li>Payee</li>
                            <li>Date</li>
                            <li>Caption</li>
                            <li>Amount Paid</li>
                        </ul>
                        <h4>User</h4>
                        <ul>
                            <li>Profile Pic</li>
                            <li>Username</li>
                            <li>Personal QR code</li>
                            <li>Balance</li>
                        </ul>
                    </Structure>
                    <p>
                        Please remember that a structured description does not normally include
                        everything that you see on your screen or in the program’s interface. In
                        order to create a description of a program, we need to focus on what the
                        program is structured around: a set of audio files that can later be saved
                        or bundled together to create an album, payments made from one user to
                        another, or a message exchange. We’ll talk a little bit more about this in
                        the assignment description.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/1' />
    </>
);
