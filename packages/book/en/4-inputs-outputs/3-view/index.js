import React from 'react';
import { Card, Section } from '@sc/ui';
import PostView from './PostView';
import PostCreate from './PostCreate';

export default () => (
    <>
        <Section>
            <PostView />
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
            <PostCreate />
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
