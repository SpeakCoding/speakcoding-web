import React from 'react';
import { Section, Structure, Task } from '@sc/ui';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main>
                <p>
                    We’re simplifying the code somewhat here. When you open the app, certain aspects
                    of the program’s interface may stand out to you; later in this course, we’ll
                    look at how the definition of the program’s main components differs from what
                    the user sees on the screen.
                </p>
                <p>
                    Let’s take a closer look at the logic behind the construction of definitions.
                    We’ll do this by breaking down the code structure of some more of the programs
                    that you may use.
                </p>
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
                    As you can see, the structure is very similar and is built around what is the
                    key element of the program. For example, Instagram is a social network on which
                    users publish and share photos and videos. It is built around posts containing
                    pictures or video clips. Twitter, meanwhile, is a social platform for sharing
                    ideas and news in a short format, and is built around Tweets. Another example is{' '}
                    <b>Venmo</b>, a social platform used for making fast payments. Its main element,
                    or ‘key’ component, is the transaction. A structured definition of Venmo’s
                    platform could look like this:
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
                    Open the Spotify app and describe what it consists of. You could start by
                    writing this in text form, then in a structured format (in the style of
                    Instagram, Twitter or Venmo). We will then look at your description and discuss
                    it at the end of this section. <br /> A structured description does not include
                    everything that you see on your screen or in the program’s interface. Looking
                    closely at what a Post comprises, you will notice new ‘components’ that were not
                    present in the structural description of a Post from the first chapter. For
                    example, the interface contains a comment counter or a bookmark icon. These
                    components are specific to what we want to show to the user on the display,
                    though when creating a structural definition of an app, we need to focus on what
                    the program is structured around: a set of audio files that can later be saved
                    or bundled together to create an album, payments made from one user to another,
                    or a message exchange. All additional functions, such as showing which friends
                    liked a post or displaying a heart icon, are usually added at later stages of
                    product development on the initiative of the product manager rather than the
                    developer.
                    <Task.Button icon='chevron-right'>Start assignment</Task.Button>
                </Task>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>img</Section.Sticky>
            </Section.Side>
        </Section.Block>
    </Section>
);
