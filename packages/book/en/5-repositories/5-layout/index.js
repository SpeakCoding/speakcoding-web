import React from 'react';
import { Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import Terminal from './Terminal';
import EditorExample from '../../../common/5/editor';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Visual editors: layout and work</h1>
                </Section.Main>
            </Section.Block>

            <EditorExample variant={2}>
                <Section.Block>
                    <Section.Main>
                        <p>
                            To the <EditorExample.Link name='tree'>left</EditorExample.Link> you
                            will see a list of files containing descriptions of classes. The{' '}
                            <EditorExample.Link name='xib'>
                                file with the visual editor
                            </EditorExample.Link>{' '}
                            for interface elements has the extension{' '}
                            <Term id='xib' tooltip>
                                .xml/.html/.xib
                            </Term>{' '}
                            (.xib are the same as .xml/html files – the .xib extension is
                            specifically for iOS). These files allow you to define and edit the
                            visual layout of the elements of a particular view.
                        </p>
                        <p>
                            Clicking on any{' '}
                            <EditorExample.Link name='interface'>
                                element of the PostFeedView interface
                            </EditorExample.Link>{' '}
                            (in the image or in the list) brings up a{' '}
                            <EditorExample.Link name='parameters'>menu</EditorExample.Link> to the
                            right that describes that element’s parameters. As the interface
                            comprises standard classes, the elements’ parameters are also standard.
                            You can change them as you see fit.
                        </p>
                    </Section.Main>
                    <Section.Side />
                </Section.Block>
                <Section.Block />
            </EditorExample>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        .xib is essentially an additional view file. It contains all the display
                        elements that we have described, though they are displayed graphically,
                        which simplifies the task of creating the interface. .xib files are not
                        essential – we could have coded the visual layout and added it to the
                        description of the view file. But this would have been more laborious and
                        the result less visually pleasing, hence why tools such as image editors
                        have appeared over time.
                    </p>
                    <p>
                        <b>The steps to create an interface may look like this:</b>
                    </p>
                    <div className={s.steps}>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Step 1:</b>
                            </div>
                            <div className={s.text}>The element is added to the list</div>
                        </div>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Step 2:</b>
                            </div>
                            <div className={s.text}>The element is added to the layout</div>
                        </div>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Step 3:</b>
                            </div>
                            <div className={s.text}>The required visual parameters are defined</div>
                        </div>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Step 4:</b>
                            </div>
                            <div className={s.text}>
                                Elements from the list are linked to the previously described class
                                components (this removes the need to code a description of this
                                link).
                            </div>
                        </div>
                    </div>
                    <p>
                        The visual editor also allows you to link actions concerning particular
                        interface elements with functions of the class that corresponds to that
                        element.
                    </p>
                    <p>
                        <b>For example</b>, the Like button has the ‘press’ action. The visual
                        editor allows you simply to add this action without coding a description of
                        the link. This means that the things we covered in the previous chapter do
                        not require you to code each of these steps.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/14' />

        <Section>
            <Terminal />
        </Section>
    </>
);
