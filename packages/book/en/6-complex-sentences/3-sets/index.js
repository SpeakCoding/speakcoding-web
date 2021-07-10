import React from 'react';
import { Hint, HL, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const comment = '//';

export default () => (
    <Section>
        <Section.Main narrow>
            <h1>Sets</h1>
            <p>
                Let’s explore sets using the example of comments on Instagram posts. You may
                remember that comments are one of the Post class’s{' '}
                <Term id='component'>components</Term>. We don’t know in advance how many comments a
                particular post will have. In such situations, programming uses{' '}
                <Term id='set' tooltip>
                    the standard Set class
                </Term>
                , which combines an indefinite number of elements belonging to a particular{' '}
                <Term id='class'>class</Term>. They are known in programming as arrays.
            </p>
            <p>
                As you may remember, standard sets in code are denoted by [] (i.e., square brackets
                [ ]). For example, when the []Comment <Term id='class'>class</Term> is assigned to{' '}
                <Term id='component'>a component</Term>/<Term id='variable'>variable</Term>, this
                should be read as a ‘set of comments’. If the maximum amount of{' '}
                <Term id='instance'>objects</Term> in a Set is limited to a certain number, for
                example to 10 <Term id='instance'>objects</Term>, then when creating the{' '}
                <Term id='set'>set</Term>, this number is entered inside square brackets:
            </p>
            <Pre>var comments = Comment[10];</Pre>
            <p>
                You may find the serial number of the <Term id='instance'>object</Term> from this
                set useful for temporarily storing an object in the set or reading a particular
                object from the set.
            </p>
            <p>
                In programming, the numerical list of elements in a set starts from 0. For example,
                the first element will have the serial number 0, the second will have 1, the third
                will have 2, and so on. So if your Instagram page has, say, 10 posts, then the
                maximum number of objects in the Set will be 10.
            </p>
            <p>If we want access to the most recent post in a feed, we write:</p>
            <Pre>var lastPost = posts[9];</Pre>
            <p>
                For example, when viewing stories from the people you follow, the story set will
                always show the last Story in the set first, as it is the most recent:
            </p>
            <Pre>
                userStories = user.getStories(); <br />
                numberOfStories = userStories.length(); <br />
                lastStory = userStories
                <Hint>
                    [numberOfStories - 1]
                    <Hint.Tooltip>
                        As you can see, numberOfStories is the name of the variable that tells us
                        the number of stories. We then subtract 1 from this number to get the most
                        recent story.
                    </Hint.Tooltip>
                </Hint>
                ;
            </Pre>
            <p>
                There is one particular set type in which each cell has a name rather than a number
                in square brackets [1]. This allows us to call it by name.
            </p>
            <p>
                <HL.Context active>
                    var a: [<HL color='green'>Int</HL>: <HL color='sandy-brown'>String</HL>] – an
                    array (set) that stores <HL color='sandy-brown'>strings</HL> (remember, string
                    is a standard class for a text string), whose names are{' '}
                    <HL color='green'>numbers</HL> <br />
                    var b: [<HL color='light-sky-blue'>String</HL>: <HL color='wheat'>String</HL>] –
                    array (set) of <HL color='wheat'>strings</HL> (text values) that are named with
                    words. These sets are called dictionaries.
                </HL.Context>
            </p>
            <h2>Dictionaries</h2>
            <p>
                To recap: sets are numbered lists in which each item can be displayed by its number.
                While this is convenient, it can sometimes be easier to assign a name to a set
                element. This is where{' '}
                <Term id='dictionary' tooltip>
                    Dictionaries
                </Term>{' '}
                come in.
            </p>
            <p>
                Dictionaries are sets whose elements have names rather than numbers. This small
                change opens up significant possibilities.
            </p>
            <p>
                Let’s say we wish to add a group of{' '}
                <HL color='aquamarine' active>
                    our user’s colleagues
                </HL>{' '}
                to the program. We create a dictionary (set) that contains their details:
            </p>
            <Pre>
                var{' '}
                <HL color='aquamarine' active>
                    workMembers
                </HL>{' '}
                = [“developer”: User(userName: “John”)];
            </Pre>
            <p>Now we add some of their colleagues:</p>
            <Pre>
                workMembers[“designer”] = User(userName: “Jess”); <br />
                workMembers[“product”] = User(userName: “Beck”);
            </Pre>
            <p>
                Now we can call any of the elements in the set by its name, which is known in
                programming as a key. The dictionary currently has three keys: developer, designer,
                and product. For example, let’s say we need to discover the name of the product
                manager from the user’s team. We simply write:
            </p>
            <Pre>workMembers[“product”].userName</Pre>
            <p>
                As we can see, there are no numbers, and we don’t need to remember where in the
                dictionary (set) we have stored the objects. Instead, we call their elements by key.
            </p>
            <h2>Code comments</h2>
            <p>
                {comment} <br />
                Comments are textual notes in code that programmers leave for themselves or other
                programmers. These comments are not read by the machine; they are not executed, and
                are there solely for convenience. To tell the machine that there is a comment and
                that it needs to ignore it, the comment text is enclosed in special symbols.
                Standard comments are denoted with <b>{comment}</b> or <b>#</b>, which relate only
                to a particular code string. Long comments are denoted with ‘
                <b>{'/* text comment */'}</b>’. Comment denotations for specific programming
                languages can easily be found online. Modern programming editors often highlight
                comments in color.
            </p>
        </Section.Main>
    </Section>
);
