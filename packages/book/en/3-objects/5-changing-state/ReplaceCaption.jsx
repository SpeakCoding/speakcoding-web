import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

const code3 = `
func editCaption (newCaption Text)  {
    [[currentCaption]](orange _ 1) = [[newCaption]](light-sky-blue _ 1)
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Within <Term id='function'>functions</Term>, we define the sequence of actions
                    that we can perform with specific <Term id='instance'>objects</Term> (instances)
                    of a particular <Term id='class'>class</Term>. To change an object means to
                    change the <Term id='component'>components</Term> and{' '}
                    <Term id='property'>properties</Term> of that <Term id='instance'>object</Term>.
                </p>
                <p>
                    When defining the actions that a <Term id='function'>function</Term> performs,
                    we can refer directly to the object’s <Term id='component'>components</Term>. As
                    the <Term id='instance'>object</Term> of a <Term id='class'>class</Term>{' '}
                    contains all of the <Term id='component'>components</Term> listed in the
                    definition of that class, we don’t need to add them as{' '}
                    <Term id='input' tooltip>
                        inputs
                    </Term>
                    . Let’s look at the example below.
                </p>
                <p>
                    Let’s say we want to edit a post’s text. To do this, we create the editCaption()
                    function in the Post <Term id='class'>class’s</Term> definition. For this{' '}
                    <Term id='function'>function</Term> to be performed, we need the post’s updated
                    text, which will be its <Term id='input'>inputs</Term>, while the{' '}
                    <Term id='function'>function</Term> itself appears as a sequence of the
                    following actions:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <div className={s.function}>
                    <Grid>
                        <Grid.Cell border='right'>
                            <ol>
                                <li>
                                    Take the post’s{' '}
                                    <HL color='orange' active>
                                        current caption
                                    </HL>
                                </li>
                                <li>
                                    Replace it with the{' '}
                                    <HL color='light-sky-blue' active>
                                        new caption
                                    </HL>
                                </li>
                            </ol>
                        </Grid.Cell>
                        <Grid.Cell>
                            <div className={s.example}>
                                <Code value={code3} />
                            </div>
                        </Grid.Cell>
                    </Grid>
                </div>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    As we discussed, Caption is a component of the Post class. Therefore, when we
                    create a specific Post, we will have access to all components of that class.
                </p>
                <p>
                    This means we don’t need to add a step to the code that indicates the specific
                    text of that post. As every Post always has text, and the editCaption() function
                    is defined in the Post class, the function will have direct access to the text
                    (Caption) of that particular post.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
