import React from 'react';
import { Button, Expand, Img, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from '../../../assets/5/3-terminal.png';
import s from './style.css';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional ) Console (Terminal) – command line{' '}
                    <Expand.Control htmlFor='5-5-1'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-5-1'>
                    <Section.Block>
                        <Section.Main>
                            <p>
                                The{' '}
                                <Term id='command-prompt' tooltip>
                                    command line
                                </Term>{' '}
                                allows us to control the computer using text commands. There is only
                                a text interface here, rather than the graphical interface we are
                                used to. However, the result is essentially the same as if we had
                                clicked through folders using the mouse cursor.
                            </p>
                            <p>
                                The username is displayed in the text area of the command line,
                                followed by the computer’s name in the system and, after the ~ and $
                                symbols, the name of the folder you’re in (~ indicates that we are
                                in a local folder directory for the user profile with which we
                                logged into the system, while $ is just a separator).
                            </p>
                            <p>There are only a few standard and commonly used text commands:</p>
                            <p className={s.commands}>
                                <code>ls</code>{' '}
                                <span>- list - displays a list of files and folders</span>
                                <code>cd</code> <span>- change directory</span>
                                <code>git pull</code> <span>- downloads something</span>
                                <code>git push</code> <span>- uploads something</span>
                            </p>
                            <p>
                                There are apps available that help us download additional libraries
                                when we need them, though they all use command lines.
                            </p>
                            <p>
                                <Term id='command-prompt'>Command lines</Term> are also often used
                                to start servers, and can be used to download and/or upload changes
                                to code.
                            </p>
                        </Section.Main>
                        <Section.Side>
                            <Section.Sticky top='60px'>
                                <Img src={img} width='100%' />
                            </Section.Sticky>
                        </Section.Side>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
