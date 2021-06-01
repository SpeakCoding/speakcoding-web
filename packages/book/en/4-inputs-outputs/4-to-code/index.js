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
                {/* prettier-ignore */}
                <Pre>
                        <HL color='orange' active>profilePictureView</HL>: Image <br />
                        <HL color='orange' active>userNameLabel</HL>: Label <br />
                        <HL color='orange' active>userLocationLabel</HL>: Label <br />
                        <HL color='orange' active>postImageView</HL>: Image <br />
                        <HL color='orange' active>likeButton</HL>: Button <br />
                        <HL color='orange' active>commentButton</HL>: Button <br />
                        <HL color='orange' active>bookmarkButton</HL>: Button <br />
                        <HL color='orange' active>showLikersButton</HL>: Button <br />
                        <HL color='orange' active>likerFolloweeProfilePictureView</HL>: Image <br />
                        <HL color='orange' active>likesLabel</HL>: Label <br />
                        <HL color='orange' active>captionLabel</HL>: Label <br />
                        <HL color='orange' active>commentCountLabel</HL>: Label <br />
                        <HL color='orange' active>postDateLabel</HL>: Label
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
