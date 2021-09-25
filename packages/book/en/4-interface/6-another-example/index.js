import React from 'react';
import { Button, Code, Expand, Grid, HL, Section } from '@sc/ui';

const code1 = `
private func {{hl:updateLikes}}(red)() {
    self.likeButton.isSelected = {{hl:self.post.isLiked}}(wheat)
`;

const code2 = `
\xa0   let {{hl:likerFollowee}}(steel-blue) = {{hl:self.post.likerFollowee}}(green)
`;

const code3 = `
\xa0   {{hl:if likerFollowee != nil}}(aquamarine) {
        self.likerFolloweeProfilePictureView
        .{{hl:showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)}}(blue)

        self.likerFolloweeProfilePictureView.isHidden = false

        let textTemplate = (self.post.{{hl:numberOfLikes > 1}}(green-yellow)) ? {{hl:"Liked by {user} and {others}" : "Liked by {user}"}}(plum)
`;

const code4 = `
\xa0       let {{hl:text}}(orange) = {{hl:NSMutableAttributedString}}(sandy-brown)({{hl:string: textTemplate}}(light-sky-blue), attributes: [[[NSAttributedString.Key.font: UIFont.systemFont}}(powder-blue)({{hl:ofSize: 12}}(light-sky-blue), {{hl:weight: UIFont.Weight.regular}}(grey))])
    }
}`;

export default () => (
    <Section>
        <Section.Block>
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
                        <Grid.Cell border='right bottom'>
                            <b>The description of the function in text</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>How this is rendered in code</b>
                        </Grid.Cell>

                        <Grid.Cell border='right' hlactive>
                            The private function <HL color='red'>UpdateLikes</HL> defines{' '}
                            <HL color='wheat'>whether you liked this post</HL>
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <Code value={code1} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top' hlactive>
                            and stores, in the <HL color='steel-blue'>variable likerFollowee</HL>,{' '}
                            <HL color='green'>one of the followers who liked that specific post</HL>
                        </Grid.Cell>
                        <Grid.Cell dense='top' hlactive>
                            <Code value={code2} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top' hlactive>
                            and{' '}
                            <HL color='aquamarine'>
                                if among those who liked the post in the feed a particular user,
                                there are followers of that user
                            </HL>
                            , the function will{' '}
                            <HL color='blue'>
                                display the profile picture of the user who liked the post
                            </HL>{' '}
                            and the{' '}
                            <HL color='plum'>
                                caption "Liked by {'{user}'} and {'{others}'}"
                            </HL>
                            , <HL color='green-yellow'>if there is more than one like</HL>, or{' '}
                            <HL color='plum'>"Liked by {'{user}'}"</HL>
                        </Grid.Cell>
                        <Grid.Cell dense='top' hlactive>
                            <Code value={code3} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top' hlactive>
                            To use <HL color='orange'>text (textTemplate)</HL> in our interface, we
                            need to create an example of a standard class{' '}
                            <HL color='sandy-brown'>NSMutableAttributedString</HL>,{' '}
                            <HL color='light-sky-blue'>into which we place the text and specify</HL>{' '}
                            the attributes of the display:{' '}
                            <HL color='powder-blue'>standard system font UIFont.systemFont</HL>{' '}
                            <HL color='light-sky-blue'>size 12</HL>{' '}
                            <HL color='grey'>standard thickness</HL>, and save the inserted text in
                            this instance
                        </Grid.Cell>
                        <Grid.Cell dense='top' hlactive>
                            <Code value={code4} />
                        </Grid.Cell>
                    </Grid>
                </Expand>
            </Section.Main>
        </Section.Block>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    To avoid the need to define all of the visual parameters of the interface
                    elements in code, modern editing software uses integrated visual editors.
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);
