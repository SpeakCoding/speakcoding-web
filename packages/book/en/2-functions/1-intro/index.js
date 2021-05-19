import React from 'react';
import { Img, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from '../../../assets/2/1-post-people.png';

export default () => (
    <Section>
        <Section.Main>
            <h1>Functions and what they are for</h1>
            <p>
                Let’s assume that we want to like a post. In programming language, this action is
                expressed as ‘add a like to a particular post’. To do this, the program needs to
                perform the following sequence of actions:
            </p>
            <ol>
                <li>Identify the particular post</li>
                <li>Ascertain the number of likes that that post currently has</li>
                <li>Create a new like from the relevant user</li>
                <li>Add that like to the number of existing likes</li>
                <li>Save and display the new number of likes</li>
            </ol>
            <p>
                Users are constantly liking posts on Instagram. So, to avoid having to repeat the
                above sequence over and over, programs utilise <Term id='function'>functions</Term>.
                A function can be compared to the chorus of a song; instead of writing out the same
                lines repeatedly, we present the words in the form of a constant.
            </p>
            <p>Functions are used to define how particular instances of a class may be used.</p>
            <p>
                For example, what can a user do with posts? They can forward, like, or save them,
                i.e., they can change particular instances of a class or define the makeup of these
                instances. When defining the Post <Term id='class'>class</Term>, you may assign a{' '}
                <Term id='function'>function</Term> that allows the user to change the Caption of
                the Post or to display how many Likes that post has received.
            </p>
            <p>Defining a function is an integral part of defining a class.</p>
            <p>
                In other words, altering a particular instance entails altering its components and
                properties.
            </p>
        </Section.Main>
        <Section.Side>
            <Section.Sticky>
                <Img src={img} width={474} height={454} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
