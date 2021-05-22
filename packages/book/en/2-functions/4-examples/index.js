import React from 'react';
import { Code, HL, Icon, Section } from '@sc/ui';
import Post from '../../../common/2/class-post';
import s from './style.css';

const codeFn1 = `
func (post* [[Post]](orange _ 1)) [[Add Like]](green _ 1)([[user User]](aquamarine _ 1)) [[Number]](light-sky-blue _ 1) { 
    [[new_like = new Like(user)]](plum _ 1)
    [[post.likes.add(new_like)]](plum _ 1)
    [[return count(post.likes)]](light-sky-blue _ 1)
}`;

const codeFn2 = `
func [[NumberOfLikes]](green _ 1)() [[Number]](light-sky-blue _ 1) { 
    [[number_of_likes = self.setOfLikes.length]](plum _ 1 3)
    [[return number_of_likes]](light-sky-blue _ 1)
}`;

export default () => (
    <Section>
        <Section.Main>
            <h2>Examples of a description of a function</h2>
            <div className={s.table}>
                <div className={s.cell}>
                    <b>The structure of a function’s definition</b>
                </div>
                <div className={s.cell}>
                    <b>In writing</b>
                </div>
                <div className={s.cell}>
                    <b>What it looks like in code</b>
                </div>

                <div className={s.cell} />
                <div className={s.cell}>
                    <div className={s.hint}>
                        <span>Functions are described at the same place where classes are</span>
                        <Icon name='arrow-right' size={24} />
                    </div>
                </div>

                <div className={s.cell}>
                    <Post />
                    <pre>...</pre>
                </div>

                <div className={s.cell}>
                    <ul>
                        <li>
                            <HL color='green' active>
                                Title
                            </HL>
                        </li>
                        <li>
                            <HL color='orange' active>
                                Class
                            </HL>{' '}
                            to which it relates
                        </li>
                        <li>
                            <HL color='plum' active inline={3}>
                                Sequences/list of operations
                            </HL>{' '}
                            that it performs
                        </li>
                        <li>
                            <HL color='aquamarine' active>
                                Inputs
                            </HL>
                        </li>
                        <li>
                            <HL color='light-sky-blue' active>
                                Class of the value
                            </HL>{' '}
                            that the function returns
                        </li>
                    </ul>
                </div>

                <div className={s.cell}>
                    A function of the class{' '}
                    <HL color='orange' active inline={3}>
                        Post
                    </HL>{' '}
                    that we call{' '}
                    <HL color='green' active inline={3}>
                        “Add Like”
                    </HL>
                    ;{' '}
                    <HL color='aquamarine' active inline={3}>
                        given a user
                    </HL>
                    , the function{' '}
                    <HL color='plum' active inline={3}>
                        creates a like from that user and adds it to that post’s list of likes, and
                        communicates
                    </HL>{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        the number
                    </HL>
                    /
                    <HL color='plum' active inline={3}>
                        new quantity of likes
                    </HL>
                    .
                </div>

                <div className={s.cell}>
                    <Code value={codeFn1} />
                </div>

                <div className={s.cell} />

                <div className={s.cell}>
                    Or a function of the class{' '}
                    <HL color='orange' active inline={3}>
                        Post
                    </HL>{' '}
                    that we call{' '}
                    <HL color='green' active inline={3}>
                        “Number of Likes”
                    </HL>
                    ;{' '}
                    <HL color='aquamarine' active inline={3}>
                        it does not require any inputs
                    </HL>
                    ,{' '}
                    <HL color='plum' active inline={3}>
                        it determines how many likes a post has
                    </HL>{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        and communicates that number
                    </HL>
                    .
                </div>

                <div className={s.cell}>
                    <Code value={codeFn2} />
                </div>
            </div>
        </Section.Main>
    </Section>
);
