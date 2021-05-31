import React from 'react';
import { Card, Section, Structure } from '@sc/ui';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Breaking down the screen: what the View consists of</h1>
                    <p>
                        Let’s explore in detail the elements that make up the standard Post display
                        screen (PostFeedView).
                    </p>
                    <Structure>
                        <h4>PostFeedView</h4>
                        <ul>
                            <li>User Profile Picture in circle</li>
                            <li>Username</li>
                            <br />
                            <li>Post Image</li>
                            <br />
                            <li>Like Button</li>
                            <li>Comment Button</li>
                            <li>Save Button</li>
                            <br />
                            <li>Likes Section (which opens a screen with a list of all likes)</li>
                            <ul>
                                <li>User Pics of some friends who liked</li>
                                <li>Usernames of some friends who liked</li>
                                <li>Number of Likes</li>
                            </ul>
                            <br />
                            <li>
                                Post Caption (shortened if too long, with “... more” to see full
                                text)
                            </li>
                            <li>View all comments (with a number of comments)</li>
                            <li>Post Time (in a special format)</li>
                        </ul>
                    </Structure>
                </Section.Main>
                <Section.Side />
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        As you can see, the display file components can differ from the components
                        that we’ve listed in the structural definition of a particular class. This
                        is because they perform different tasks. The <b>display</b> defines the
                        components that the user needs to interact with the program or to display
                        particular data that we wish to share with the user (e.g. the number of
                        followers or the comments section for a given post).
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>When creating a new post, you’ll see this screen:</p>
                    <Structure>
                        <h4>PostComposerView</h4>
                        <ul>
                            <li>Post Image preview box</li>
                            <li>Post Caption</li>
                            <br />
                            <li>Location Field</li>
                            <li>Tag Label with Tag Count</li>
                            <br />
                            <li>Share Button</li>
                        </ul>
                    </Structure>
                </Section.Main>
                <Section.Side />
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        While the component titles are similar to those of the program’s main
                        classes, they usually also contain the title of the display element that
                        will present them. This may be the input field, as is the case with the post
                        text, or it may be a button or the counter that records tagged people or
                        likes received. Unlike a structural file, where we define object classes in
                        general terms, these components are always visible in the interface;
                        therefore we need to consider carefully what we want to display to users and
                        how they will interact with it.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>
        <Card mode='quiz'>
            <h2>Quiz #8</h2>
            Breaking down the screen: what the View consists of
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSdpI4z2RvMo1rFxU_YSc20Id2p7DCe5CJVU1WBaUHBIZ1YQ3Q/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
        <Card mode='assignment'>
            <h2>Assignment #5</h2>
            Describe (list) what the user profile screen consists of.
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSfbevn7Ejqw9hjz9Cn3iHtcdASGI3HDgTcxtgyFRLFSjTrZ4g/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
    </>
);
