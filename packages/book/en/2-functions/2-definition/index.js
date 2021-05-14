import React from 'react';
import { Card, Hint, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>The definition of a function</h2>
                <p>Defining all functions consists of the following:</p>
                <div className={s.slides}>
                    <div className={s.slide}>
                        <div className={s.message}>
                            <HL color='orange' active>
                                The Title
                            </HL>
                        </div>
                        The particular name that the user selected for their convenience has no
                        bearing on the execution of the function
                    </div>
                    <div className={s.slide}>
                        <div className={s.message}>
                            <Hint>
                                <HL color='green' active>
                                    The class
                                </HL>
                                <Hint.Tooltip>
                                    There are some functions that are not specific to a particular
                                    class; we will revisit these later in this text.
                                </Hint.Tooltip>
                            </Hint>{' '}
                            to which the function relates
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.message}>
                            <Hint>
                                <HL color='plum' active>
                                    The sequence/list of operations
                                </HL>
                                <Hint.Tooltip>
                                    The sequence/list of operations is no different than if you were
                                    to draw up a detailed event plan
                                </Hint.Tooltip>
                            </Hint>{' '}
                            executed when performing this function for a particular instance
                        </div>
                    </div>
                    <div className={s.slide}>
                        <div className={s.message}>
                            <HL color='aquamarine' active>
                                The inputs (arguments)
                            </HL>{' '}
                            essential to perform this function
                        </div>
                        In some cases the function may not require arguments, in which case that
                        section will not appear in the definition
                    </div>
                    <div className={s.slide}>
                        <div className={s.message}>
                            <HL color='light-sky-blue' active>
                                The class of the value
                            </HL>{' '}
                            that the function returns
                        </div>
                        For example, a number or the text “The answer is yes”
                    </div>
                </div>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <div className={s.example}>
                        A function of the class{' '}
                        <HL color='green' active>
                            Post
                        </HL>{' '}
                        that we call{' '}
                        <HL color='orange' active>
                            “Add Like”
                        </HL>
                        ;{' '}
                        <HL color='aquamarine' active>
                            given a user
                        </HL>
                        , the function{' '}
                        <span className={s.multiline}>
                            <HL color='plum' active>
                                creates a like from that user and adds it to that post’s list of
                                likes, and communicates
                            </HL>
                        </span>{' '}
                        <HL color='light-sky-blue' active>
                            the number
                        </HL>
                        /
                        <HL color='plum' active>
                            new quantity of likes
                        </HL>
                        .
                    </div>
                </Section.Sticky>
            </Section.Side>
        </Section>

        <Section>
            <Section.Block>
                <Section.Main>
                    <p>
                        There are functions that do not return/pass any value as a result. It means
                        that the function changes the instance of a class, but we do not need to
                        remember these changed properties to continue the run of the program.
                    </p>
                </Section.Main>
                <Section.Side />
            </Section.Block>
            <Section.Block>
                <Section.Main>
                    <div className={s.noReturn}>
                        <div className={s.label}>
                            Example of a function that doesn’t return anything
                        </div>
                        <div>
                            A function of the class Post, that we call “Archive Post”; given a user,
                            the function archives an instance of a Post and does not return anything
                            as a result.
                        </div>
                    </div>
                </Section.Main>
            </Section.Block>
        </Section>

        <Section>
            <Section.Main>
                <p>
                    Therefore each <Term id='function'>function</Term>, whether it appears within a
                    component <Term id='class'>class</Term> or independently, will include the
                    following elements in its definition:
                </p>
                <ul>
                    <li>
                        <HL color='orange' active>
                            Title
                        </HL>
                    </li>
                    <li>
                        <HL color='green' active>
                            Class to which it belongs
                        </HL>
                    </li>
                    <li>
                        <HL color='plum' active>
                            Sequences/list of operations that it performs
                        </HL>
                    </li>
                    <li>
                        <HL color='aquamarine' active>
                            Arguments
                        </HL>
                    </li>
                    <li>
                        <HL color='light-sky-blue' active>
                            Value that it returns (if any)
                        </HL>
                    </li>
                </ul>
            </Section.Main>
            <Section.Side />
        </Section>

        <Section>
            <Section.Main>
                <h2>Function calls</h2>
                <p>
                    Having written the function, we can refer to it, or ‘call’ it, at various points
                    within the code. In calling the function, we transfer to it all of the data that
                    it requires as input. Calling a function means that, at that particular point in
                    the code, we’re instructing the program to perform the actions defined in the
                    function.
                </p>
            </Section.Main>
            <Section.Side />
        </Section>

        <Card mode='quiz'>
            <h2>Quiz #3</h2>
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLScQ0LcYbFp-br6S2mweAjw5M74El_nyzPDq5OoX9yFde6RcDw/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
    </>
);
