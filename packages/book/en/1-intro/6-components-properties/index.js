/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { HL, Section, Structure, Task } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Class Components and Properties</h1>
                <p>Let’s examine the concept of classes and components in the Post example.</p>
                <Structure>
                    <h4>Post</h4>
                    <ul>
                        <li>User</li>
                        <li>Image / Set of images / Video</li>
                        <li>Actions</li>
                        <li>Caption</li>
                        <li>Set of comments</li>
                        <li>Set of likes</li>
                        <li>Time</li>
                    </ul>
                </Structure>
                <p>
                    From the structural definition above, you see that Post is a class that is
                    defined by a list of the components that make up each specific post (i.e. every
                    instance) of this class. Each <Term id='component'>component</Term> has a{' '}
                    <HL color='plum' active>
                        title
                    </HL>{' '}
                    and a{' '}
                    <HL color='orange' active>
                        class
                    </HL>{' '}
                    to which it belongs (the app will work regardless of the specific title that a
                    component is given).
                </p>
                <p>
                    Here a Period has two components - startDate and endDate. Even though these
                    components are different, they belong to the same class - Date.
                </p>
                <p>
                    Each component of a class also belongs to a particular{' '}
                    <Term id='class'>class</Term> of its own. For example, one of the{' '}
                    <Term id='component'>components</Term> of the User class is the Profile Picture,
                    which in turn belongs to the Image <Term id='class'>class</Term>.
                </p>
                <p>
                    When defining a <Term id='class'>class</Term>, we should also aim to include all
                    of its potential <Term id='component'>components</Term> (remember, a machine has
                    no thought process of its own). So, we always define the essence of a system in
                    full, even if it will not always be performing all of its functions.
                </p>
                <p>
                    For example, among a Post’s potential <Term id='component'>components</Term> are
                    Pictures and Videos, though we may decide to use only Pictures or only Videos in
                    any particular post.
                </p>
                <p>
                    There are some <Term id='class'>classes</Term> that may be slightly more complex
                    to define; this is because in addition to the{' '}
                    <Term id='component'>component</Term> list, we may also need a list of the
                    classes’ potential properties.
                </p>
                <p>
                    For example, the User (Account) may have the property of being either public or
                    private. Or, the account may be used for business.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>img</Section.Sticky>
            </Section.Side>
        </Section>
        <Section>
            <Section.Main>
                <h2>Example</h2>
                <div className={s.people}>
                    <div>
                        <HL color='light-sky-blue' active>
                            People
                        </HL>
                    </div>
                    <div>// Components</div>
                    <div>
                        <HL color='plum' active>
                            Arms
                        </HL>
                    </div>
                    <div>
                        <HL color='orange' active>
                            Legs
                        </HL>
                    </div>
                    <div>...</div>
                    <div>// Properties (recorded the same way as components)</div>
                    <div>
                        <HL color='aquamarine'>Age</HL>
                    </div>
                    <div>
                        <HL color='green-yellow'>Height</HL>
                    </div>
                    <div>
                        <HL color='thistle'>Gender</HL>
                    </div>
                    <div>...</div>
                </div>
                <p>
                    In programming languages, <Term id='component'>components</Term> are defined in
                    the same way as their classes.
                </p>
                <p>
                    For example, let’s say that we have a green book: its color is one of its{' '}
                    <Term id='property'>properties</Term>. So the Book <Term id='class'>class</Term>{' '}
                    has the Color <Term id='property'>property</Term>. When describing a book, we
                    present this as the Book having a color <Term id='component'>component</Term> of
                    the Color <Term id='class'>class</Term>. If you wish, you may start by writing
                    down the class and components separately for your own reference; when you come
                    to rewrite them into a programming language, you will need to describe them in
                    the same way as you did for the other <Term id='component'>components</Term> of
                    the class.
                </p>
                <Task>
                    <h2>Quiz #2</h2>
                    <Task.Button icon='question'>Complete quiz</Task.Button>
                </Task>
                <Task>
                    <h2>Assignment #2</h2>
                    <p>
                        Create a structured definition of the components and properties for the Post
                        class in Instagram, including as much detail as possible. Assign a title and
                        class to each component.
                    </p>
                    <p>Below is an example of a detailed definition of components:</p>
                    <Structure>
                        <h4>Comment</h4>
                        <ul>
                            <li>user (of class User)</li>
                            <li>creationTime (class Time)</li>
                            <li>text(class Text)</li>
                            <li>set of Likes (of class Likes)</li>
                            <li>(optional) set of Replies (class Comment)</li>
                        </ul>
                    </Structure>
                    <Task.Button icon='chevron-right'>Start assignment</Task.Button>
                </Task>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>img</Section.Sticky>
            </Section.Side>
        </Section>
    </>
);
