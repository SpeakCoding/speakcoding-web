import React from 'react';
import { Section, Structure } from '@sc/ui';
import { Quiz } from '../../../components';
import { interceptor, InterceptorView } from '../../../phone';
import HL from '../../../common/1/post-highlight';

export default () => (
    <>
        <Section>
            <Section.Main>
                <InterceptorView onEnter={interceptor.open} onExit={interceptor.close}>
                    <p>
                        Here is how it could be defined. Instagram consists of two main components:
                        feed of posts and feed of stories.
                    </p>
                    <ul>
                        <li>The feed of Posts consists of a Set of Posts.</li>
                        <ul>
                            <li>
                                The Posts in turn are made up of: the user (
                                <HL c='red'>profile pictures</HL> [or most recent story] and{' '}
                                <HL c='plum'>username</HL>);{' '}
                                <HL c='green-yellow'>a creation timestamp</HL>;{' '}
                                <HL c='aquamarine'>pictures</HL>, videos, or a set of pictures;{' '}
                                <HL c='steel-blue'>‘likes’</HL>; the <HL c='grey'>caption</HL> of
                                the post; and <HL c='orange'>comments</HL>.
                            </li>
                            <ul>
                                <li>
                                    The <HL c='aquamarine'>Pictures</HL> comprise: the picture
                                    itself; and (optionally) a set of tags.
                                </li>
                                <li>
                                    The <HL c='orange'>Comments</HL> consist of: the user (profile
                                    picture [or most recent story] and username); text; and
                                    (optionally) a set of likes relating to the commentary (which
                                    can be responses to previous comments).
                                </li>
                            </ul>
                        </ul>
                        <li>
                            The feed of Stories consists of: the user; and icons from the most
                            recent story in the story set.
                        </li>
                        <ul>
                            <li>Stories comprise: timestamps; and pictures or videos.</li>
                        </ul>
                    </ul>
                    <p>Here’s how it looks if we rewrite it in a structured layout:</p>
                    <Structure>
                        <h4>Feed</h4>
                        <ul>
                            <li>Set of Posts</li>
                        </ul>
                        <h4>Post</h4>
                        <ul>
                            <li>User</li>
                            <li>Timestamp</li>
                            <li>Image/Set of Pictures or Videos</li>
                            <li>Set of Likes</li>
                            <li>Caption</li>
                            <li>Set of Comments</li>
                        </ul>
                        <h4>Image</h4>
                        <ul>
                            <li>Image Link</li>
                            <li>Set of Mentions</li>
                        </ul>
                        <h4>Comment</h4>
                        <ul>
                            <li>User</li>
                            <li>Timestamp</li>
                            <li>Text</li>
                            <li>Set of Likes</li>
                            <li>(optional) Set of Replies</li>
                        </ul>
                        <h4>User</h4>
                        <ul>
                            <li>Username</li>
                            <li>Profile Picture or Latest Story Image (if any)</li>
                        </ul>
                    </Structure>
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section>
        <Quiz
            number={1}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdKbOrIBfp5k7wzn9PVI--NIuGwCCDxS6YLZBMYNrTpFEimYw/viewform?usp=sf_link'
        >
            Introduction: see if you got it right
        </Quiz>
    </>
);
