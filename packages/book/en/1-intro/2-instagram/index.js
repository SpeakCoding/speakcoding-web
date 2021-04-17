import React from 'react';
import { Section, Structure, Task } from '@sc/ui';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main>
                <p>
                    Here is how it could be defined. Instagram consists of two main components: feed
                    of posts and feed of stories.
                </p>
                <ul>
                    <li>The feed of Posts consists of a Set of Posts.</li>
                    <ul>
                        <li>
                            The Posts in turn are made up of: the user (profile pictures [or most
                            recent story] and username); a creation timestamp; pictures, videos, or
                            a set of pictures; ‘likes’; the caption of the post; and comments.
                        </li>
                        <ul>
                            <li>
                                The Pictures comprise: the picture itself; and (optionally) a set of
                                tags.
                            </li>
                            <li>
                                The Comments consist of: the user (profile picture [or most recent
                                story] and username); text; and (optionally) a set of likes relating
                                to the commentary (which can be responses to previous comments).
                            </li>
                        </ul>
                    </ul>
                    <li>
                        The feed of Stories consists of: the user; and icons from the most recent
                        story in the story set.
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
                <Task>
                    <h2>Quiz #1</h2>
                    <Task.Button icon='question'>Complete quiz</Task.Button>
                </Task>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>img</Section.Sticky>
            </Section.Side>
        </Section.Block>
    </Section>
);
