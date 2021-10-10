import React from 'react';
import { Button, Expand, Grid, HL, Hint, Img, Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Term from '../../glossary/Term';
import xcode from './xcode.png';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Changing components and interacting with classes</h1>
                    <p>
                        For all interface components, we need to specify the characteristics that
                        affect how they are displayed, such as button size, design, and positioning
                        relative to other elements.
                    </p>
                    <p>
                        <b>
                            Let’s look at the UserProfilePicture element in a circle (PostFeedView
                            class):
                        </b>
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        <Img src={xcode} />
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <ul>
                        <li>Indented 15 pixels from the top and 15 pixels from the left</li>
                        <li>Its size is 64х64 pixels</li>
                        <li>
                            If there is no picture (or if we haven’t yet loaded it from the memory
                            or server), we use a "placeholder"
                        </li>
                        <li>
                            The picture needs to be cropped into a circle (more about this later)
                        </li>
                        <li>Clicking on the picture takes us to the user’s profile</li>
                    </ul>
                    <p>These are all components/properties of the UIImage class.</p>
                    <p>
                        <b>Another example </b>
                        <Expand.Control htmlFor='4-5-1'>
                            <Button variant='rounded'>read ⤵</Button>
                        </Expand.Control>
                    </p>
                    <Expand id='4-5-1'>
                        <p>
                            The picture in the Asynchronous Image View post in turn has this
                            definition:
                        </p>
                        <ul>
                            <li>
                                Limited by a rectangular border 320 pixels wide by 300 pixels high
                            </li>
                            <li>
                                The upper indentation after the previous Profile Picture element is
                                14 pixels, while the indentation to the following Like Button
                                element is 5 pixels
                            </li>
                            <li>
                                If there is no picture (or if the program hasn’t yet loaded it from
                                the memory or server), then there will be a transparent background
                            </li>
                            <li>Double-clicking the picture should give it a like</li>
                        </ul>
                    </Expand>
                    <p>
                        <Term id='standard-classes' tooltip>
                            Standard classes
                        </Term>{' '}
                        of visual screen elements can have functions assigned to them that are
                        executed when the user performs a particular action, for example pressing a
                        button (above we described the sequence of actions for the Submit button and
                        registering a new user).
                    </p>
                    <p>
                        The function is not part of the class definition, but is stored in a
                        component of an object. So in the View files belonging to the standard
                        UIButton class, functions are already present to which we can transfer the
                        title (as an input) of the function that should be executed in a particular
                        instance. We define this transferrable function here in the PostFeedView
                        function.
                    </p>
                    <p>
                        <b>Let’s look at an example:</b>
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right bottom'>
                            <b>The description of the Like function and its elements in text</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>How this is rendered in code</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            <p>
                                Within the <HL color='orange'>likeButton</HL> here, there is a
                                component in which the <HL color='plum'>toggleLike</HL> function is
                                stored. This is not visible in this line of code, but right-clicking
                                takes you to the point in the code where the function is{' '}
                                <Hint>
                                    defined
                                    <Hint.Tooltip>
                                        As you know, all classes have components and functions.
                                        Components are usually private (the word ‘private’ usually
                                        appears before them in code) and local. This is to avoid
                                        confusion when using classes and to allow you to re-use
                                        component and function titles in other parts of the code.
                                        So, when working with classes – especially standard classes
                                        that we have imported – we are usually concerned only with
                                        the class functions. So, you may not know that a button has
                                        the function toggleLike, which stores the definition of the
                                        function that you need; but you can start writing the title
                                        of the function that you need, and if the function is
                                        defined in this class, then the code editor will insert it
                                        automatically. In this case the function, which has been
                                        transferred as an input, is essentially an object, a
                                        variable with which we interact.
                                    </Hint.Tooltip>
                                </Hint>
                                .
                            </p>
                            <p>
                                <HL color='green'>target</HL> – the object with which we will
                                perform an <HL color='light-sky-blue'>action</HL> (function of the
                                PostFeedView class), performing{' '}
                                <HL color='aquamarine'>such action</HL> with the likeButton.
                            </p>
                            <p>
                                <HL color='sandy-brown'>self</HL> – a link to the instance of
                                PostFeedView for which these actions will be performed.
                            </p>
                            <p>
                                <HL color='green-yellow'>UIControl.Event</HL> – in the UIKit library
                                in the UIControl class, a link to the simplified Event class; this
                                lists, as components, the user actions to which standard interface
                                elements can react. For example UIControl.Event.
                                <HL color='aquamarine'>touchUpInside</HL> corresponds to the event
                                of the user releasing his finger while still being above the button
                                area.
                            </p>
                            So, we assign parameters to the button; we define the actions that it
                            will perform for this object when the user interacts with the button in
                            this way.
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <pre>
                                <HL color='orange'>likeButton</HL>
                                .addTarget(
                                <HL color='green'>target</HL>: <HL color='sandy-brown'>self</HL>,{' '}
                                <HL color='light-sky-blue'>action</HL>:{' '}
                                <HL color='plum'>toggleLike</HL>, for:{' '}
                                <HL color='green-yellow'>UIControl.Event</HL>.
                                <HL color='aquamarine'>touchUpInside</HL>
                                ) -> <br /> <br />
                                class PostFeedCell: UITableViewCell {'{'} <br />
                                {'    ...'} <br /> <br />
                                {'    '}
                                override func{' '}
                                <Hint>
                                    viewDidLoad()
                                    <Hint.Tooltip>
                                        Here is where you can find the above described function in
                                        code.
                                    </Hint.Tooltip>
                                </Hint>
                                {' {'} <br />
                                {'        '}super.viewDidLoad() <br /> <br />
                                {'        '}likeButton.addTarget(self, action: #selector
                                (toggleLike), for: UIControl.Event.touchUpInside) <br />
                                {'    }'} <br />
                                {'}'}
                            </pre>
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>

        <Quiz id='en/9' />
    </>
);
