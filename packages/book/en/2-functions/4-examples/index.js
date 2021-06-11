import React from 'react';
import { Code, Grid, HL, Icon, Section } from '@sc/ui';
import Post from '../../../common/2/class-post';
import s from './style.css';

const codeFn1 = `
func (post* [[Post]](orange)) [[Add Like]](green)([[user User]](aquamarine)) [[Number]](light-sky-blue) { 
    [[new_like = new Like(user)]](plum)
    [[post.likes.add(new_like)]](plum)
    [[return count(post.likes)]](light-sky-blue)
}`;

const codeFn2 = `
func [[NumberOfLikes]](green)() [[Number]](light-sky-blue) { 
    [[number_of_likes = self.setOfLikes.length]](plum)
    [[return number_of_likes]](light-sky-blue)
}`;

export default () => (
    <Section>
        <Section.Main>
            <h2>Examples of a description of a function</h2>
            <Grid cols='25% 25% 50%'>
                <Grid.Cell border='right bottom'>
                    <b>The structure of a function’s definition</b>
                </Grid.Cell>
                <Grid.Cell border='right bottom'>
                    <b>In writing</b>
                </Grid.Cell>
                <Grid.Cell border='bottom'>
                    <b>What it looks like in code</b>
                </Grid.Cell>

                <Grid.Cell border='right' />
                <Grid.Cell border='right'>
                    <div className={s.hint}>
                        <span>Functions are described at the same place where classes are</span>
                        <Icon name='arrow-right' size={24} />
                    </div>
                </Grid.Cell>
                <Grid.Cell>
                    <Post />
                    <pre>...</pre>
                </Grid.Cell>

                <Grid.Cell border='right' hlactive>
                    <ul>
                        <li>
                            <HL color='green'>Title</HL>
                        </li>
                        <li>
                            <HL color='orange'>Class</HL> to which it relates
                        </li>
                        <li>
                            <HL color='plum'>Sequences/list of operations</HL> that it performs
                        </li>
                        <li>
                            <HL color='aquamarine'>Inputs</HL>
                        </li>
                        <li>
                            <HL color='light-sky-blue'>Class of the value</HL> that the function
                            returns
                        </li>
                    </ul>
                </Grid.Cell>
                <Grid.Cell border='right' hlactive>
                    A function of the class <HL color='orange'>Post</HL> that we call{' '}
                    <HL color='green'>“Add Like”</HL>; <HL color='aquamarine'>given a user</HL>, the
                    function{' '}
                    <HL color='plum'>
                        creates a like from that user and adds it to that post’s list of likes, and
                        communicates
                    </HL>{' '}
                    <HL color='light-sky-blue'>the number</HL>/
                    <HL color='plum'>new quantity of likes</HL>.
                </Grid.Cell>
                <Grid.Cell hlactive>
                    <Code value={codeFn1} />
                </Grid.Cell>

                <Grid.Cell border='right' />
                <Grid.Cell border='right' hlactive>
                    Or a function of the class <HL color='orange'>Post</HL> that we call{' '}
                    <HL color='green'>“Number of Likes”</HL>;{' '}
                    <HL color='aquamarine'>it does not require any inputs</HL>,{' '}
                    <HL color='plum'>it determines how many likes a post has</HL>{' '}
                    <HL color='light-sky-blue'>and communicates that number</HL>.
                </Grid.Cell>
                <Grid.Cell hlactive>
                    <Code value={codeFn2} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section>
);
