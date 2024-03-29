import React from 'react';
import { Img, Link, Section } from '@sc/ui';
import { Assignment, Intro, Time } from '../../../components';
import img from './git.svg';
import intro from './intro.png';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Repositories</h1>
                <Time.Chapter value='~45 min' />
                <Intro pic={intro} video='https://kinescope.io/embed/202448170' />
                <p>
                    When you first start programming, you will probably spend most of your time
                    looking at code written by somebody else. Code for a specific app or project is
                    usually stored in the cloud, as this gives any team member access to the files
                    they need.
                </p>
                <p>
                    The clear leader among storage and coding tools is GitHub. This company offers a
                    web interface and code storage that is visually similar to any cloud-storage
                    system, but that also offers tools for joint work with code. As the code files
                    are continually being updated and several people can be involved in development
                    simultaneously, the Git program (of which GitHub is the service section) allows
                    users to save program versions that they can then switch between. The
                    version-control systems allow developers to save all changes made to the code.
                    Although more than one person cannot work on the code at any one time, the
                    version control enabled by real-time updates simplifies development and reduces
                    the time spent merging various code strands and program sections together.
                </p>
                <p>
                    This{' '}
                    <Link href='https://github.com/SpeakCoding/iphone' blank>
                        link
                    </Link>{' '}
                    has files and folders containing the code for the app described in our course.
                    For example, the App folder contains the Post.swift file, which contains the
                    description of the Post class.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky top='60px'>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section>

        <Assignment id='en/6' />
    </>
);
