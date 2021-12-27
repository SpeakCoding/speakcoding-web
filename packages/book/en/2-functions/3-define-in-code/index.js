import React from 'react';
import { Lottie, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import animationData from './img-lottie.json';

const code1 = `
function function_title (list_of_inputs) {
    {{block of code with a list of operations}}(t:comment)
    {{that it perform}}(t:comment)
}`;

export default () => (
    <Section>
        <Section.Main>
            <h2>Defining a function in code</h2>
            <p>General form of a definition</p>
            <Pre>{code1}</Pre>
            <p>
                <b>Round brackets</b>
            </p>
            <p>
                Functions are coded differently across various programming languages. Nonetheless,
                they can be identified in code by a common characteristic, namely their round
                brackets ().
            </p>
            <p>
                <b>Function title</b>
            </p>
            <p>
                The brackets always appear after the function title, making them easy to locate
                within the code.
            </p>
            <p>
                <b>Keyword "func"</b>
            </p>
            <p>
                In many programming languages, the keyword "func" is written before the function
                title.
            </p>
            <p>
                <b>Inputs, classes</b>
            </p>
            <p>
                Appearing after the function title (in its round brackets), and separated by commas,
                is a listing of the inputs and their classes.
            </p>
            <p>
                <b>Sequence of actions</b>
            </p>
            <p>
                Appearing after the round brackets are rows that determine the sequence of actions;
                these are generally easy to identify within the code:
            </p>
            <ul>
                <li>
                    In most programming languages, these rows appear in curly brackets {'{ }'} that
                    close immediately after the round brackets close.
                </li>
                <li>
                    In some programming languages, a colon appears after the closing round bracket,
                    and the action sequence is defined on a new, indented line.
                </li>
            </ul>
            <p>
                <b>Relation to a class</b>
            </p>
            <p>
                A <Term id='function'>function</Term> typically relates to a specific{' '}
                <Term id='class'>class</Term> (for example, the ‘edit post caption function relates
                to the Post class). Therefore, a <Term id='function'>function</Term> should be
                written in the same place where its <Term id='class'>class</Term> is defined.
            </p>
        </Section.Main>

        <Section.Side>
            <Lottie.ScrollBox>
                <Section.Sticky>
                    <Lottie animationData={animationData} endFramesOffset={50} />
                </Section.Sticky>
            </Lottie.ScrollBox>
        </Section.Side>
    </Section>
);
