import React from 'react';
import { Code, Grid, HL, Link, Section } from '@sc/ui';
import s from './style.css';

const code1 = `private func {{hl:showAllPostsAsList}}(light-sky-blue)(preselectedPostIndex: Int) {`;

const code2 = `
\xa0   let {{hl:postsViewController}}(orange) = 
    {{hl:UserPostsViewController}}(sandy-brown)(posts: self.posts,
    refreshClosure: nil)
    postsViewController.title = "Posts"
    postsViewController.selectedPostIndex =
    preselectedPostIndex
`;

const code3 = `
\xa0   self.{{hl:navigationController}}(green)?.{{hl:pushViewController}}(steel-blue)(
        {{hl:postsViewController}}(orange), animated: true
    )
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    Let’s take a look at the first example within{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/UserProfileViewController.swift'
                        blank
                    >
                        UserProfileViewController
                    </Link>
                    . In here we see the function <HL color='light-sky-blue'>showAllPostsAsList</HL>
                    , which describes of what happens if you wish to see a list of all of a user’s
                    posts. As we wrapped{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/UserProfileViewController.swift'
                        blank
                    >
                        UserProfileViewController
                    </Link>{' '}
                    into UINavigationController, we can now call the{' '}
                    <span className={s.nobr}>
                        self.
                        <HL color='green'>navigationController</HL>
                    </span>{' '}
                    and use its standard function <HL color='steel-blue'>pushViewController</HL> to
                    switch to the corresponding screen.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='38% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Description of the function steps</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>How this is rendered in code</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' />
                    <Grid.Cell hlactive>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive dense='top bottom'>
                        We create an instance of{' '}
                        <HL color='sandy-brown'>UserPostsViewController</HL> and place it in the
                        variable <HL color='orange'>postsViewController</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive dense='top bottom'>
                        <Code value={code2} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        We call the standard component of the UIViewController class (as you can see
                        in the code, this is the class that inherits our UserPostsViewController),
                        namely <HL color='green'>navigationController</HL> and its function{' '}
                        <HL color='steel-blue'>pushViewController</HL>; to this function we transfer
                        the stored <HL color='orange'>postsViewController</HL>, which lets us switch
                        to the screen that we need.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code3} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    UINavigationController makes it easy for us to let a user go to a list of posts
                    → then to a list of post comments → then to the profile of one of the commenters
                    → then to that commenter’s post list, with all of these moves being saved. Then
                    the user can press the ‘back’ button to arrive right back where they started.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
