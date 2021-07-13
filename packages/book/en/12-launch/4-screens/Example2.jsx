import React from 'react';
import { Code, Grid, HL, Link, Section } from '@sc/ui';

const code1 = `
@IBAction private func [[editProfile]](plum)() {
    func handleUserProfileUpdate(...) {
        ...
        self.dismiss(animated: true,
            completion: nil)
    }`;

const code2 = `
\xa0   let [[profileEditor]](orange) =
        [[UserProfileEditorController]](sandy-brown)(
            completion: handleUserProfileUpdate
        )
`;

const code3 = `
\xa0   let navigationController =
        [[UINavigationController]](green)(
            rootViewController: [[profileEditor]](orange)
        )
    ...
`;

const code4 = `
\xa0   [[self]](steel-blue).[[present]](red)(
        [[navigationController]](green), animated: true, completion: nil
    )
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    An alternative way of moving between screens can be found in the{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/UserProfileViewController.swift'
                        blank
                    >
                        <HL color='plum'>EditProfile</HL>
                    </Link>
                    function of this file.
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
                        First we create an instance of the controller{' '}
                        <HL color='sandy-brown'>UserProfileEditorController</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive dense='top bottom'>
                        <Code value={code2} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive dense='bottom'>
                        then we wrap <HL color='orange'>it</HL> into our{' '}
                        <HL color='green'>navigationController</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive dense='bottom'>
                        <Code value={code3} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        then we <HL color='green'>transfer it to</HL>{' '}
                        <HL color='steel-blue'>the current view controller</HL>, so that the current
                        view controller <HL color='red'>displays</HL> the navigation controller
                        instead of itself (the view controller).
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code4} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    The <HL color='steel-blue'>self</HL>.<HL color='red'>present</HL> function
                    replaces the display of the current view controller with
                    UserProfileEditorController (which has been wrapped into a new navigation
                    controller). When a post has been edited, the completion function
                    handleUserProfileUpdate is called; this in turn calls the self.dismiss function,
                    which returns a display of our UserProfileViewController.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
