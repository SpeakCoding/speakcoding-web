import React from 'react';
import { Button, Code, Expand, Grid, HL, Section } from '@sc/ui';

const code1 = `
private func [[updateLikes]](red _ 1 3)() {
    self.likeButton.isSelected = [[self.post.isLiked]](wheat _ 1 3)
`;

const code2 = `
\xa0   let [[likerFollowee]](steel-blue _ 1 3) = [[self.post.likerFollowee]](green _ 1 3)
`;

const code3 = `
\xa0   [[if likerFollowee != nil]](aquamarine _ 1 3) {
        self.likerFolloweeProfilePictureView
        .[[showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)]](blue _ 1 3)

        self.likerFolloweeProfilePictureView.isHidden = false

        let textTemplate = (self.post.[[numberOfLikes > 1]](green-yellow _ 1 3)) ? [["Liked by {user} and {others}" : "Liked by {user}"]](plum _ 1 3)
`;

const code4 = `
\xa0       let [[text]](orange _ 1 3) = [[NSMutableAttributedString]](sandy-brown _ 1 3)([[string: textTemplate]](light-sky-blue _ 1 3), attributes: [[[NSAttributedString.Key.font: UIFont.systemFont]](powder-blue _ 1 3)([[ofSize: 12]](light-sky-blue _ 1 3), [[weight: UIFont.Weight.regular]](grey _ 1 3))])
    }
}`;

export default () => (
    <Section>
        <Section.Main>
            <p>
                Another{' '}
                <Expand.Control htmlFor='2-7-1'>
                    <Button variant='rounded'>example ⤵</Button>
                </Expand.Control>
                ︎ in which we define visual element parameters in the code.
            </p>

            <Expand id='2-7-1'>
                <Grid cols='40% 1fr'>
                    <Grid.Cell border='right'>
                        The private function{' '}
                        <HL color='red' active inline={3}>
                            UpdateLikes
                        </HL>{' '}
                        defines{' '}
                        <HL color='wheat' active inline={3}>
                            whether you liked this post
                        </HL>
                    </Grid.Cell>
                    <Grid.Cell>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='top'>
                        and stores, in the{' '}
                        <HL color='steel-blue' active inline={3}>
                            variable likerFollowee
                        </HL>
                        ,{' '}
                        <HL color='green' active inline={3}>
                            one of the followers who liked that specific post
                        </HL>
                    </Grid.Cell>
                    <Grid.Cell dense='top'>
                        <Code value={code2} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='top'>
                        and{' '}
                        <HL color='aquamarine' active inline={3}>
                            if, among those who liked the post in the feed a particular user, there
                            are followers of that user, the function will display the profile
                            picture of the user who liked the post
                        </HL>{' '}
                        and the{' '}
                        <HL color='plum' active inline={3}>
                            caption “Liked by {'{user}'} and {'{others}'}”
                        </HL>
                        ,{' '}
                        <HL color='green-yellow' active inline={3}>
                            if there is more than one likeif there is more than one like
                        </HL>
                        , or{' '}
                        <HL color='plum' active inline={3}>
                            “Liked by {'{user}'}”
                        </HL>
                    </Grid.Cell>
                    <Grid.Cell dense='top'>
                        <Code value={code3} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='top'>
                        To use{' '}
                        <HL color='orange' active inline={3}>
                            text (textTemplate)
                        </HL>{' '}
                        in our interface, we need to create an example of a standard class{' '}
                        <HL color='sandy-brown' active inline={3}>
                            NSMutableAttributedString
                        </HL>
                        ,{' '}
                        <HL color='light-sky-blue' active inline={3}>
                            into which we place the text and specify
                        </HL>{' '}
                        the attributes of the display:{' '}
                        <HL color='powder-blue' active inline={3}>
                            standard system font UIFont.systemFont
                        </HL>{' '}
                        <HL color='light-sky-blue' active inline={3}>
                            size 12
                        </HL>{' '}
                        <HL color='grey' active inline={3}>
                            standard thickness
                        </HL>
                        , and save the inserted text in this instance
                    </Grid.Cell>
                    <Grid.Cell dense='top'>
                        <Code value={code4} />
                    </Grid.Cell>
                </Grid>
            </Expand>

            <p>
                To avoid the need to define all of the visual parameters of the interface elements
                in code, modern editing software uses integrated visual editors.
            </p>
        </Section.Main>
    </Section>
);
