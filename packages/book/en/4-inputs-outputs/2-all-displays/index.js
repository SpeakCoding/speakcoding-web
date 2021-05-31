import React from 'react';
import { Button, Card, Expand, Img, Section, Structure } from '@sc/ui';
import img1 from '../../../assets/4/2-instagram-1.png';
import img2 from '../../../assets/4/2-instagram-2.png';
import img3 from '../../../assets/4/2-instagram-3.png';
import img4 from '../../../assets/4/2-instagram-4.png';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>All post displays</h1>
                    <p>
                        As we’ve covered previously, each key element in program code has numerous
                        types of definition: <b>structural</b>, as well as the definition
                        responsible for the <b>display of the element in the program’s interface</b>
                        . The display files will also define the logic governing the user’s
                        interaction with the program and the layout of the various elements of the
                        on-screen display.
                    </p>
                    <p>
                        Let’s explore this in more detail by looking at posts. We can see two post
                        displays: a large one in the feed, and a small one inside a grid in the
                        user’s profile. So, we need to create two classes for each of these
                        displays.
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <div className={s.tiles}>
                        <div className={s.tile}>
                            <h2 className={s.title}>
                                PostFeedView (how an individual post is displayed in the post feed)
                            </h2>
                            <Img src={img1} width='100%' />
                        </div>

                        <div className={s.tile}>
                            <h2 className={s.title}>
                                PostTileView (how posts are displayed in the user profile)
                            </h2>
                            <Img src={img2} width='100%' />
                        </div>

                        <div className={s.tile}>
                            <h2 className={s.title}>
                                Individual screens – and therefore classes – are needed to create
                                and edit posts. PostComposerViewController
                            </h2>
                            <Img src={img3} width='100%' />
                        </div>

                        <div className={s.tile}>
                            <h2 className={s.title}>
                                PostEditorController <br /> <br /> <br />
                            </h2>
                            <Img src={img4} width='100%' />
                        </div>
                    </div>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        All of these screens – View-Create-Edit – are standard display classes for
                        all key program elements, and are usually titled according to how the user
                        sees them. They are stored in the code as separate files with corresponding
                        titles.
                    </p>
                    <Expand id='2-2-1'>
                        In the PostFeedView, we add a ‘heart’ into the display class; this heart is
                        highlighted if a user likes the post. We also add the number of comments
                        that the post has received.
                    </Expand>
                    <p>
                        In the display classes we list the object components that we need to display
                        to the user, and state{' '}
                        <Expand.Control htmlFor='2-2-1'>
                            <Button variant='rounded'>how ⤴︎</Button>
                        </Expand.Control>{' '}
                        to display data about a specific object (e.g. about the relevant post).
                    </p>
                    <Expand id='2-2-2'>
                        For example, for <i>the post creation screen</i> – PostComposerView – we
                        need to display fields for uploading images, adding text, choosing the
                        geolocation, and adding comments, among other things.
                    </Expand>
                    <p>
                        <Expand.Control htmlFor='2-2-2'>
                            <Button variant='rounded'>In the display classes ⤴︎</Button>
                        </Expand.Control>
                        , we also list the elements{' '}
                        <i>needed to perform a particular action that affects the class objects</i>:
                        creating a new post, editing the username in the user’s account, or liking a
                        comment.
                    </p>
                    <p>
                        Let’s see what other components a post has that we want to display to the
                        user:
                    </p>
                    <Structure>
                        <h4>Post</h4>
                        <ul>
                            <li>User</li>
                            <li>Time</li>
                            <li>Image</li>
                            <li>Set of Pictures</li>
                            <li>or Video</li>
                            <li>Set of Likes</li>
                            <li>Caption</li>
                            <li>Set of Comments</li>
                        </ul>
                    </Structure>
                    <p>
                        In the View files that we’ve already listed, we did not display each comment
                        or like from the set; we displayed only the quantity. As these sets can be
                        quite large, we need a separate View to display them. When you look at the
                        comments for any post, you’ll see that you’re taken to another screen. For
                        this to happen, we need to create another class, which we can conditionally
                        entitle PostCommentsView. You’ll also see this separate screen if you view
                        all of the post’s likes (PostLikesView).
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>
        <Card mode='quiz'>
            <h2>Quiz #7</h2>
            All post displays
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSfKomjRalw-S51hz2WZGHqeufzHMUe9DiOa1IDqfW9WSn7h_w/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
        <Card mode='assignment'>
            <h2>Assignment #4</h2>
            Consider which screens the User class will require (e.g. creation, editing, lists).
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSdELTGy7hi7DOUZhotEf1Y-jPu8pIcx1x6My_v3AycUySnyhQ/viewform?usp=sf_link'>
                Complete
            </Card.Button>
        </Card>
    </>
);
