import React, { useMemo } from 'react';
import pt from 'prop-types';
import { Card, HL, Section, Structure } from '@sc/ui';
import { interceptor, InterceptorView } from '../../../phone';

const colorsMap = {
    red: ['post-userpic', { margin: 4, radius: '50%' }],
    plum: ['post-name'],
    'green-yellow': ['post-date'],
    aquamarine: ['post-image', { margin: 0, radius: 0, stroke: 4 }],
    'steel-blue': ['post-likes'],
    grey: ['post-caption'],
    orange: ['post-comments']
};

const handleHover = color => {
    if (!colorsMap[color]) return;
    const [role, options] = colorsMap[color];
    interceptor.highlightElement(role, { ...(options || {}), color });
};

const handleLeave = color => {
    if (!colorsMap[color]) return;
    const [role] = colorsMap[color];
    interceptor.unhighlightElement(role);
};

const hlCache = new Map([['_', 0]]);

const H = ({ c, children }) => {
    const l = useMemo(() => {
        if (!hlCache.has(c)) hlCache.set(c, Math.max(...hlCache.values()) + 1);
        return hlCache.get(c);
    }, [c]);

    return (
        <HL color={c} label={`c1-b2-${l}`} onHover={handleHover} onLeave={handleLeave}>
            {children}
        </HL>
    );
};

H.propTypes = {
    c: pt.string.isRequired
};

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
                                <H c='red'>profile pictures</H> [or most recent story] and{' '}
                                <H c='plum'>username</H>);{' '}
                                <H c='green-yellow'>a creation timestamp</H>;{' '}
                                <H c='aquamarine'>pictures</H>, videos, or a set of pictures;{' '}
                                <H c='steel-blue'>‘likes’</H>; the <H c='grey'>caption</H> of the
                                post; and <H c='orange'>comments</H>.
                            </li>
                            <ul>
                                <li>
                                    The <H c='aquamarine'>Pictures</H> comprise: the picture itself;
                                    and (optionally) a set of tags.
                                </li>
                                <li>
                                    The <H c='orange'>Comments</H> consist of: the user (profile
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
        <Card mode='quiz'>
            <h2>Quiz #1</h2>
            Introduction: see if you got it right
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSdKbOrIBfp5k7wzn9PVI--NIuGwCCDxS6YLZBMYNrTpFEimYw/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
    </>
);
