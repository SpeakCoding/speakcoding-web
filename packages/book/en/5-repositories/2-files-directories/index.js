import React from 'react';
import { Button, Expand, Hint, Link, Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h1>Files & folders</h1>
                <Expand id='5-2-1'>
                    All files for our app’s code are stored in a single folder. Files are sometimes
                    grouped so that those describing class structures are stored in one folder,
                    while those describing display (interface) classes are stored in another (we
                    will show you an example of this in the code for the server section of our app).
                </Expand>
                <p>
                    The description of each class in a{' '}
                    <Term id='repository' tooltip>
                        repository
                    </Term>{' '}
                    or code editor is typically located in{' '}
                    <Expand.Control htmlFor='5-2-1'>
                        <Button variant='rounded'>an individual file ⤴</Button>
                    </Expand.Control>
                    . The file is usually given the same name as the class described within.
                </p>
                <p>
                    <b>Example</b>: A description of the{' '}
                    <Link
                        href='https://docs.google.com/document/d/1MQjyen7skmmOgViAZic_Gb8cMecpSPGZTmzrTQP9qH0/edit?usp=sharing'
                        blank
                    >
                        Post
                    </Link>{' '}
                    class.
                </p>
                <Expand id='5-2-2'>
                    If the file you wish to use is in a different folder, some languages require
                    keywords that allow classes to be imported. Classes can also be imported
                    directly from online repositories (such as GitHub) using certain keywords.
                </Expand>
                <p>
                    Classes{' '}
                    <Expand.Control htmlFor='5-2-2'>
                        <Button variant='rounded'>described in files in the same folder ⤴</Button>
                    </Expand.Control>{' '}
                    can be used for each file in that folder. For example, in the PostFeedView.swift
                    file, which describes the Post display class in the feed, we use the Post class
                    (var post: Post) in the list of components of the PostFeedView class.
                </p>
            </Section.Main>
        </Section>

        <Quiz number={10} href='#'>
            Files & folders
        </Quiz>

        <Section>
            <Section.Main narrow>
                <p>
                    In addition to the key essential program files, this list contains several
                    function files. These usually describe settings for the{' '}
                    <Term id='compiler' tooltip>
                        compiler
                    </Term>{' '}
                    or for the code editor itself.
                </p>
                <p>
                    An example of these settings is a special coding mode. To protect devices, apps
                    can only be created when in this developer mode, which allows the apps to be
                    certified. You can activate developer mode and select the working group that
                    your newly created or edited code relates to directly in the editor settings. We
                    will cover how to work in developer mode in later chapters. We use the{' '}
                    <Hint>
                        Xcode
                        <Hint.Tooltip>
                            Xcode - редактор, используемый для написания приложений для MacOS. Если
                            у вас другая операционная система, вы можете попробовать скачать
                            редактор Visual Studio Code или просто смотреть на файлы, которые мы
                            обсуждаем в этой главе, онлайн. Ссылка на репозиторий открыта и его
                            может посмотреть любой человек.
                        </Hint.Tooltip>
                    </Hint>{' '}
                    editor to create iOS apps.
                </p>
                <p>In our depository you can also find:</p>
                <ul>
                    <li>
                        The Asset folder, which contains the rendered visual elements used in the
                        interface. We move them here and assign them names that we can use in the
                        code.
                    </li>
                    <li>
                        Storyboard, an embedded editor which we can use to lay out designs for
                        various screens (views), schematically describe the transition between them,
                        and add buttons.
                    </li>
                    <li>
                        .plist - a file describing the <Term id='compiler'>compiler’s</Term>{' '}
                        parameters.
                    </li>
                </ul>
            </Section.Main>
        </Section>
    </>
);
