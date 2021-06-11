import React from 'react';
import { Grid, HL, Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Term from '../../glossary/Term';
import Slides, { useSlide } from '../../../common/2/function-definition-slides';
import s from './style.css';

const Example = () => {
    const slide = useSlide();

    return (
        <div className={s.example}>
            A function of the class{' '}
            <HL color='green' active={slide >= 2}>
                Post
            </HL>{' '}
            that we call{' '}
            <HL color='orange' active={slide >= 1}>
                “Add Like”
            </HL>
            ;{' '}
            <HL color='aquamarine' active={slide >= 4}>
                given a user
            </HL>
            , the function{' '}
            <HL color='plum' active={slide >= 3} inline={5}>
                creates a like from that user and adds it to that post’s list of likes, and
                communicates
            </HL>{' '}
            <HL color='light-sky-blue' active={slide >= 5}>
                the number
            </HL>
            /
            <HL color='plum' active={slide >= 3}>
                new quantity of likes
            </HL>
            .
        </div>
    );
};
export default () => (
    <>
        <Slides>
            <Section>
                <Section.Main>
                    <h2>The definition of a function</h2>
                    <p>Defining all functions consists of the following:</p>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='orange' active>
                                The Title
                            </HL>
                        </div>
                        The particular name that the user selected for their convenience has no
                        bearing on the execution of the function
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='green' active>
                                The class
                            </HL>{' '}
                            to which the function relates
                        </div>
                        There are some functions that are not specific to a particular class; we
                        will revisit these later in this text.
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='plum' active>
                                The sequence/list of operations
                            </HL>
                            executed when performing this function for a particular instance
                        </div>
                        The sequence/list of operations is no different than if you were to draw up
                        a detailed event plan
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='aquamarine' active>
                                The inputs (arguments)
                            </HL>{' '}
                            essential to perform this function
                        </div>
                        In some cases the function may not require arguments, in which case that
                        section will not appear in the definition
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='light-sky-blue' active>
                                The class of the value
                            </HL>{' '}
                            that the function returns
                        </div>
                        For example, a number or the text “The answer is yes”
                    </Slides.Item>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Example />
                    </Section.Sticky>
                </Section.Side>
            </Section>
        </Slides>

        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        There are functions that do not return/pass any value as a result. It means
                        that the function changes the instance of a class, but we do not need to
                        remember these changed properties to continue the run of the program.
                    </p>
                </Section.Main>
            </Section.Block>
            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right'>
                            Example of a function that doesn’t return anything
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            A function of the class <HL color='green'>Post</HL>, that we call{' '}
                            <HL color='orange'>“Archive Post”</HL>;{' '}
                            <HL color='aquamarine'>given a user</HL>, the function{' '}
                            <HL color='plum'>archives an instance of a Post</HL> and{' '}
                            <HL color='light-sky-blue'>does not return anything as a result</HL>.
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>

        <Section>
            <Section.Main narrow>
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
        </Section>

        <Section>
            <Section.Main narrow>
                <h2>Function calls</h2>
                <p>
                    Having written the function, we can refer to it, or ‘call’ it, at various points
                    within the code. In calling the function, we transfer to it all of the data that
                    it requires as input. Calling a function means that, at that particular point in
                    the code, we’re instructing the program to perform the actions defined in the
                    function.
                </p>
            </Section.Main>
        </Section>

        <Quiz
            number={3}
            href='https://docs.google.com/forms/d/e/1FAIpQLScQ0LcYbFp-br6S2mweAjw5M74El_nyzPDq5OoX9yFde6RcDw/viewform?usp=sf_link'
        >
            The definition and description of functions
        </Quiz>
    </>
);
