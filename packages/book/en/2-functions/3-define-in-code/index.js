import React from 'react';
import { Lottie, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import animationData from './img-lottie.json';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>Defining a function in code</h2>
                <p>General form of a definition</p>
                <p>
                    function function_title (list_of_inputs) {'{'} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; block of code with a list of operations that it perform{' '}
                    <br />
                    {'}'}
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Section>
            <Section.Main>
                <div className={s.slide}>
                    <div className={s.title}>Round brackets</div>
                    <div>
                        Functions are coded differently across various programming languages.
                        Nonetheless, they can be identified in code by a common characteristic,
                        namely their round brackets ().
                    </div>
                </div>
                <div className={s.slide}>
                    <div className={s.title}>Function title</div>
                    <div>
                        The brackets always appear after the function title, making them easy to
                        locate within the code.
                    </div>
                </div>
                <div className={s.slide}>
                    <div className={s.title}>Keyword “func”</div>
                    <div>
                        In many programming languages, the keyword “func” is written before the
                        function title.
                    </div>
                </div>
                <div className={s.slide}>
                    <div className={s.title}>Inputs, classes</div>
                    <div>
                        Appearing after the function title (in its round brackets), and separated by
                        commas, is a listing of the inputs and their classes.
                    </div>
                </div>
                <div className={s.slide}>
                    <div className={s.title}>Sequence of actions</div>
                    <div>
                        Appearing after the round brackets are rows that determine the sequence of
                        actions; these are generally easy to identify within the code:
                        <ul>
                            <li>
                                In most programming languages, these rows appear in curly brackets{' '}
                                {'{ }'} that close immediately after the round brackets close.
                            </li>
                            <li>
                                In some programming languages, a colon appears after the closing
                                round bracket, and the action sequence is defined on a new, indented
                                line.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.slide}>
                    <div className={s.title}>Relation to a class</div>
                    <div>
                        A <Term id='function'>function</Term> typically relates to a specific{' '}
                        <Term id='class'>class</Term> (for example, the ‘edit post caption function
                        relates to the Post class). Therefore, a <Term id='function'>function</Term>{' '}
                        should be written in the same place where its <Term id='class'>class</Term>{' '}
                        is defined.
                    </div>
                </div>
            </Section.Main>
            <Section.Side>
                <Lottie.ScrollBox>
                    <Section.Sticky>
                        <Lottie animationData={animationData} endFramesOffset={50} />
                    </Section.Sticky>
                </Lottie.ScrollBox>
            </Section.Side>
        </Section>
    </>
);
