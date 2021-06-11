import React from 'react';
import { HL, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import Addition from './Addition';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h1>Translating this into code</h1>
                <p>
                    Let’s assume we’ve defined the classes responsible for displaying and using the
                    main interface elements, for example the Button or Label classes. You probably
                    won’t need to define these classes from scratch, as you’ll typically be using
                    standard classes – these have usually been defined somewhere before.
                </p>
                <p>
                    To display a post, we create a PostFeedView file, which appears in the program
                    as a blank field, a ‘canvas’ on which the other interface elements of the post
                    will be ‘painted’.
                </p>
                <p>
                    First we record the PostFeedView components with the titles of the display
                    elements that will represent them. As you can see, they all belong to standard
                    classes such as Label and Button.
                </p>
                <Pre>
                    <HL.Context active>
                        <HL color='orange'>profilePictureView</HL>: Image <br />
                        <HL color='orange'>userNameLabel</HL>: Label <br />
                        <HL color='orange'>userLocationLabel</HL>: Label <br />
                        <HL color='orange'>postImageView</HL>: Image <br />
                        <HL color='orange'>likeButton</HL>: Button <br />
                        <HL color='orange'>commentButton</HL>: Button <br />
                        <HL color='orange'>bookmarkButton</HL>: Button <br />
                        <HL color='orange'>showLikersButton</HL>: Button <br />
                        <HL color='orange'>likerFolloweeProfilePictureView</HL>: Image <br />
                        <HL color='orange'>likesLabel</HL>: Label <br />
                        <HL color='orange'>captionLabel</HL>: Label <br />
                        <HL color='orange'>commentCountLabel</HL>: Label <br />
                        <HL color='orange'>postDateLabel</HL>: Label
                    </HL.Context>
                </Pre>
                <p>
                    As we just mentioned, these classes have already been defined somewhere and are
                    usually imported along with the libraries for the language in which the program
                    is written. For example, to create an iPhone app, you can use a library of
                    interface elements called{' '}
                    <Term id='ui-kit' tooltip>
                        UIKit
                    </Term>{' '}
                    - User Interface Kit - in addition to standard display elements such as buttons,
                    labels, and counters, this includes combinations of these things in tables,
                    columns, and cells. We’ll look closer at working with libraries a little later;
                    for now, think of them as sets of definitions that we’ve imported into the code
                    and can change if need be.
                </p>
            </Section.Main>
        </Section.Block>

        <Addition />
    </Section>
);
