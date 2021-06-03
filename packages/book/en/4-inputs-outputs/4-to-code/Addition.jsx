import React from 'react';
import { Button, Expand, Hint, Icon, Pre, Section, Structure } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <Section.Main>
        <h2>
            In addition (Class inheritance){' '}
            <Expand.Control htmlFor='2-5-1'>
                <Button variant='rounded'>⤵</Button>
            </Expand.Control>
        </h2>

        <Expand id='2-5-1'>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        We’ll display the Post (or, specifically, one of its display classes -
                        PostFeedView)in the Feed (or, in its view file FeedView, to be exact).
                        PostFeedView can be thought of as a cell in a vertical table with a single
                        column.
                    </p>
                    <p>
                        To display a Post inside a Feed, we use the standard UIKit library classes
                        UITableView (table) and UITableViewCell (table cell), which have all the
                        required components and functions. And we need our PostFeedView and FeedView
                        classes to have these components and functions as well. To achieve this,
                        programming uses ‘class inheritance’.
                    </p>
                    <p>
                        Classes come in the{' '}
                        <Term id='child-class' tooltip>
                            child
                        </Term>{' '}
                        and{' '}
                        <Term id='parent-class' tooltip>
                            parent
                        </Term>{' '}
                        types. <Term id='child-class'>Child classes</Term> inherit their
                        characteristics, components, and functions from their parent class, but you
                        can also add new ones if need be.
                    </p>
                    <p>
                        <b>For example</b>: if we want to add a button to a mobile app, we can
                        import it in standard form. In this form, it will be square-shaped and grey
                        with white text in the middle. To add to the imported{' '}
                        <Term id='parent-class'>parent class</Term> Button, we create a{' '}
                        <Term id='child-class'>child class</Term> and define the changes that we
                        need. In the case of our button, we can change the states of its{' '}
                        <Term id='component'>components</Term> or{' '}
                        <Term id='property'>properties</Term> such as color and size. The button
                        inherits everything else from its parent class.
                    </p>
                    <p>
                        In case with a Post, we write that PostFeedView class inherits the standard
                        UITableViewCell class, and thus also inherits all of its properties. The
                        post can therefore be a cell in the UITableView table that we created in the
                        View part of the Feed (which we add to the definition of the FeedView class,
                        i.e. the post feed that is displayed in the interface).
                    </p>
                </Section.Main>
            </Section.Block>

            <div className={s.transformation}>
                <Structure>
                    <h4>FeedView</h4>
                    <ul>
                        <li>ProfilePicture</li>
                        <li>userName</li>
                        <li>Location</li>
                        <li>Post Image</li>
                        <li>Like Button</li>
                        <li>Comment</li>
                        <li>Bookmark</li>
                        <li>@username liked</li>
                        <li>likeCount</li>
                        <li>postText</li>
                        <li>commentCount</li>
                        <li>Date</li>
                    </ul>
                </Structure>
                <Icon name='arrow-right' size={16} />
                <Structure>
                    <h4>PostFeedView</h4>
                    <ul>
                        <li>ProfilePictureView</li>
                        <li>userNameLabel</li>
                        <li>userLocationLabel</li>
                        <li>PostImageView</li>
                        <li>likeButton</li>
                        <li>commentButton</li>
                        <li>bookmarkButton</li>
                        <li>likerProfilePictureView</li>
                        <li>likeCountLabel</li>
                        <li>postTextLabel</li>
                        <li>commentCountLabel</li>
                        <li>postDateLabel</li>
                    </ul>
                </Structure>
                <Icon name='arrow-right' size={16} />
                <Structure>
                    <h4>PostFeedView: UITableViewCell</h4>
                    <ul>
                        <li>ProfilePictureView: UlImage</li>
                        <li>userNameLabel: UILabel</li>
                        <li>userLocationLabel: UILabel</li>
                        <li>postImageView: UIImage</li>
                        <li>likeButton: UIButton</li>
                        <li>commentButton: UIButton</li>
                        <li>bookmarkButton: UIButton</li>
                        <li>likerProfilePictureView: Image</li>
                        <li>likeCountLabel: UILabel</li>
                        <li>postTextLabel: UILabel</li>
                        <li>commentCountLabel: UILabel</li>
                        <li>postDateLabel: UILabel</li>
                    </ul>
                </Structure>
            </div>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        If we want to add a function that the parent class doesn’t have, we need to
                        define that function with a title that differentiates it from the other
                        functions in the parent class. This is important in order to ensure that the
                        compiler reads the code correctly. If we want to replace the existing
                        function in the parent class with a new one, we need to use the same title
                        as that used in the parent class. To avoid mistakes, some modern programming
                        languages require you to put the word <b>override</b> before the inherited
                        function to confirm the replacement, or override, of this function in the
                        child class.
                    </p>
                    <p>
                        When reading the code, the compiler compares not only the name of the
                        function, but also the composition of the inputs. In other words, a function
                        with a new set of inputs will be interpreted as a new function rather than a
                        replacement for the parent function.
                    </p>
                    <p>
                        If we want to give the function additional steps while still performing its
                        original actions, then in the child function we add a string with the
                        keyword <b>super</b> (sometimes together with the function title, separated
                        by a full stop). This word calls all of the actions defined in the function
                        of the parent class.
                    </p>
                    <Pre>
                        override func awakeFromNib() {'{'} <br />
                        {'    '}
                        <Hint>
                            super.awakeFromNib()
                            <Hint.Tooltip>
                                In swift, to call actions of the parent function in order to
                                correct/add something after the word “super”, we indicate the
                                function’s full title. However, in some languages it is sufficient
                                to write “super ( )” in the first line of the function that we wish
                                to edit using override.
                            </Hint.Tooltip>
                        </Hint>
                        <br />
                        {'    '}... <br />
                        {'}'}
                    </Pre>
                    <p>
                        <b>Super</b> means ‘include everything that is described in the parent
                        class’. Add this word if: 1) you do not know the exact definition of a
                        class; or 2) you wish to override a particular function using existing
                        functionality. You do not need to add the word super if you re-write the
                        function.
                    </p>
                </Section.Main>
            </Section.Block>
        </Expand>
    </Section.Main>
);
