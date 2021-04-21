import React from 'react';
import { Img, Section, Structure, Task } from '@sc/ui';
import img from '../../../assets/2-class-post.png';

export default () => (
    <Section>
        <Section.Main>
            <p>
                We’re simplifying the code somewhat here. When you open the app, certain aspects of
                the program’s interface may stand out to you; later in this course, we’ll look at
                how the definition of the program’s main components differs from what the user sees
                on the screen.
            </p>
            <p>
                Let’s take a closer look at the logic behind the construction of definitions. We’ll
                do this by breaking down the code structure of some more of the programs that you
                may use.
            </p>
            <h2>Twitter (mobile application)</h2>
            <p>
                Similarly to Instagram, Twitter consists of a Feed of Messages (known as ‘Tweets’).
            </p>
            <Structure>
                <h4>Feed</h4>
                <ul>
                    <li>Set of Tweets</li>
                </ul>
                <h4>Tweets in turn comprise:</h4>
                <ul>
                    <li>User</li>
                    <li>Text</li>
                    <li>Time</li>
                    <li>Set of Retweets</li>
                    <li>Set of Replies</li>
                    <li>Set of Likes</li>
                    <li>Set of Shares</li>
                    <li>Picture/Gif</li>
                    <li>Location</li>
                </ul>
                <h4>User</h4>
                <ul>
                    <li>Profile Picture</li>
                    <li>Username</li>
                    <li>Personal QR code</li>
                    <li>Balance</li>
                </ul>
            </Structure>
            <p>
                As you can see, the structure is very similar and is built around what is the key
                element of the program. For example, Instagram is a social network on which users
                publish and share photos and videos. It is built around posts containing pictures or
                video clips. Twitter, meanwhile, is a social platform for sharing ideas and news in
                a short format, and is built around Tweets. Another example is <b>Venmo</b>, a
                social platform used for making fast payments. Its main element, or ‘key’ component,
                is the transaction. A structured definition of Venmo’s platform could look like
                this:
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
            <Task>
                <h2>Assignment #1</h2>
                <Task.Button icon='chevron-right'>Start assignment</Task.Button>
            </Task>
        </Section.Main>
        <Section.Side>
            <Section.Sticky center>
                <Img src={img} width={392} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
