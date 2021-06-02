import React from 'react';
import { Grid, Hint, Img, Pre, Section } from '@sc/ui';
import { Skill } from '../../../components';
import Term from '../../glossary/Term';
import img from '../../../assets/1/8-var-types-en.svg';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>Using classes</h2>
                <p>
                    We have seen that each component belongs to a particular class. At the very
                    start, when we defined the Post class in Instagram, certain words in the code
                    were repeated. One of these words referred to the component’s title, while the
                    second referred to the class to which the component belongs. For example, the
                    Post class has the component Caption, which in turn belongs to the Text class.
                </p>
                <Pre>
                    class Post <br />
                    {'  '}caption Text
                </Pre>
                <p>
                    Every programming language has a number of{' '}
                    <b>standard (“original”) classes, which do not need definitions</b>. These
                    include: string (text string); int [integer]/uint (unsigned, cannot be
                    negative); float (number with a fractional part after the punctuator); and bool
                    (true or false). It is worth memorizing these, though they can be found using an
                    internet search.
                </p>
                <p>
                    Int/uint, float, and byte are usually denoted in code by characters. If you see
                    quote marks “”, it means the device will read the information inside them as
                    text.
                </p>
                <p>Examples of code:</p>
                <Pre>
                    var numberOfLikes: Int; <br />
                    numberOfLikes = 0; <br />
                    <br />
                    var appName: String; <br />
                    appName = "Instagram"; <br />
                </Pre>
                <p>
                    Like in human languages, many classes of objects were defined long ago, and we
                    can simply give a link to that class of objects (import its definition) rather
                    than revisiting its definition. Over time, you will develop a sense of what can
                    be imported and what needs to be defined from scratch. Then, you will need to
                    define from scratch only those classes that have not yet been defined and those
                    that are unique to your program.
                </p>
                <p>
                    <b>Let's look at importing a class definition using a button as an example.</b>{' '}
                    The Button class is a standard and commonly used class for which a detailed
                    definition already exists. So, you don’t need to define each component or button
                    function; instead, you can import and use the standard class.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section>
        <Section>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right'>
                        Import the definition of the standard Button class
                    </Grid.Cell>
                    <Grid.Cell>
                        <pre>import "Button"</pre>
                    </Grid.Cell>
                    <Grid.Cell border='right' dense='top'>
                        Create an instance of the Button class and record the properties for it that
                        we will need:
                    </Grid.Cell>
                    <Grid.Cell dense='top'>
                        <pre>
                            <Hint>
                                new
                                <Hint.Tooltip>
                                    Word 'new' here means that we create a new instance of a class
                                    (in this case, a new button of the Button class). These key
                                    words are reserved in each programming language, and you can't
                                    use this word to name a different component or function. In
                                    modern code editors these words are usually highlighted so you
                                    can always find them in code
                                </Hint.Tooltip>
                            </Hint>{' '}
                            PostButton = new Button()
                        </pre>
                    </Grid.Cell>
                    <Grid.Cell border='right' dense>
                        Change button size
                    </Grid.Cell>
                    <Grid.Cell dense>
                        <pre>newPostButton.Size(500, 20)</pre>
                    </Grid.Cell>
                    <Grid.Cell border='right' dense>
                        Change button position on screen
                    </Grid.Cell>
                    <Grid.Cell dense>
                        <pre>newPostButton.Position(20, 20)</pre>
                    </Grid.Cell>
                    <Grid.Cell border='right' dense='top'>
                        Call the button function that displays the button on screen
                    </Grid.Cell>
                    <Grid.Cell dense='top'>
                        <pre>newPostButton.Draw()</pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>
                    Another essential aspect of defining <Term id='class'>classes</Term> is to list
                    the actions that can be performed in relation to them. To do this, the code uses
                    a third structural element, another ‘part’ of its ‘language’, namely the{' '}
                    <Term id='function' tooltip>
                        function
                    </Term>
                    .
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Skill>
            You can now add detail to your structured program description to make it more
            comprehensive. You can assign a class and title to each component described, thus fully
            defining the ‘skeleton’ of the product-to-be.
        </Skill>
    </>
);
