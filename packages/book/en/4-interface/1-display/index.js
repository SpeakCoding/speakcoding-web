import React from 'react';
import { Callout, Img, Section } from '@sc/ui';
import img from './mvc.svg';

export default () => (
    <Section>
        <Section.Main>
            <h1>Inputs and outputs: how to translate user actions into program operations</h1>
            <h2>Display</h2>
            <p>
                The interface displays examples of our structural classes (e.g., a post, its
                pictures and caption) to the user, and includes tools to interact with these
                examples (to create or edit posts).
            </p>
            <p>
                To create the interface, we need to add the classes that define the on-screen
                display with visual representations of various aspects of the program and its
                elements.
            </p>
            <Callout>
                The classes responsible for displaying objects (or lists of objects) are often
                called View classes. Meanwhile, the classes responsible for interacting with objects
                (creating, changing, or deleting them) are called the Controller. There are many
                classes that are responsible for both the display and the interaction.
            </Callout>
            <p>
                The complete cycle of a user’s interaction with the program can be defined as
                follows (also illustrated in the diagram to the right):
            </p>
            <ul>
                <li>
                    The View is responsible for displaying an instance of a structural class (Model)
                </li>
                <li>The User sees the View</li>
                <li>
                    The User interacts with the elements displayed on the screen (this interaction
                    is defined within the Controller)
                </li>
                <li>The Controller executes functions that manipulate the Model</li>
                <li>Manipulating the Model changes the displayed elements of the View</li>
                <li>The User sees the now-updated View.</li>
            </ul>
        </Section.Main>
        <Section.Side>
            <Section.Sticky top='60px'>
                <Img src={img} width={450} height={490} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
