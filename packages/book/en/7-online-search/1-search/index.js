import React from 'react';
import { Callout, Link, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import Video from '../../../common/7/search-video';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>How to search for information online</h1>
                    <p>
                        When working with code, you will often need to discover whether a particular
                        class has already been defined, check what certain system commands are
                        called, and look at examples of solutions to architectural problems. Even
                        programmers with decades of experience frequently use professional forums
                        such as StackOverflow to answer their questions. As with human language, you
                        will use far fewer words day-to-day than you know. If you forget the meaning
                        of a word, you can simply visit a dictionary – and the same applies to
                        programming.
                    </p>
                    <p>
                        <b>How to search</b>
                    </p>
                    <p>
                        Start by searching for the name of the language or the approach that you
                        wish to understand better. The first or second link will take you to an
                        official site containing general information, development history, and key
                        concepts.
                    </p>
                    <p>
                        You will frequently encounter blog posts, Q&amp;A, and specific case
                        studies.
                    </p>
                    <p>
                        These formats are largely self-explanatory and require you to gather minimal
                        additional information. Somebody has already covered your question and
                        described, using examples of code and logical explanations, how to solve it.
                        Even if the situation described differs somewhat from yours, you can apply
                        the logic used and see whether it works for you too.
                    </p>
                    <p>
                        If you have written a piece of code and your program is returning an error,
                        you can simply copy it into your browser. The first results to appear will
                        probably be articles on StackOverflow, which is an important programming
                        knowledge base and whose information can generally be relied on.
                    </p>
                    <p>
                        Let’s recap how to{' '}
                        <Link
                            href='https://support.google.com/websearch/answer/2466433?hl=en'
                            blank
                        >
                            refine
                        </Link>{' '}
                        searches. To narrow the selection down to a particular resource, put a colon
                        between your search text and the resource to which you wish to limit your
                        search, for example ‘neural networks: medium’. Search has other tricks too,
                        such as inurl, intext, and site (we won’t cover them all here, feel free to
                        explore them for yourself).
                    </p>
                    <ul>
                        <li>
                            Avoid focusing on how to write something. Think firstly about the
                            features that you want the program to have and the actions that it
                            should perform.
                        </li>
                        <li>
                            Outline a rough structure in{' '}
                            <Term id='pseudocode' tooltip>
                                pseudocode
                            </Term>{' '}
                            of what you wish to create. You can add syntax later.
                        </li>
                        <li>
                            If you’re unsure of the solution, rest assured you’re probably not the
                            only one. Visiting online forums can offer different approaches and help
                            you avoid making common mistakes.
                        </li>
                        <li>
                            Avoid just copying working solutions without really thinking about them.
                            Try to understand why a certain solution works for a particular problem.
                        </li>
                    </ul>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky top='60px'>
                        <Video />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>To summarise, we would emphasize that:</p>
                    <Callout>
                        <ul>
                            <li>
                                Attempting to remember everything that you might find useful in your
                                work is inefficient. Avoid trying to memorize things that can
                                quickly be found online.
                            </li>
                            <li>Focus on what you wish to create rather than on syntax.</li>
                            <li>Search, ask, and learn from others’ mistakes.</li>
                            <li>
                                As we know, languages’ structures are all similar. And the less time
                                you spend on syntax, the quicker and easier you will find it to
                                learn new languages.
                            </li>
                            <li>
                                Programming contains a great deal of information, which is
                                constantly being updated: problem solving, technologies, frameworks.
                                Nobody can know it all, and even the most experienced programmers
                                are constantly learning as they work.
                            </li>
                        </ul>
                    </Callout>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/15' />
    </>
);
