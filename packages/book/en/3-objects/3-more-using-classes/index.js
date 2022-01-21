import React from 'react';
import { Button, Expand, Pre, Section } from '@sc/ui';
import s from './style.css';

const code1 = `
var numberOfLikes: Int;
numberOfLikes = 0;`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional) More about using classes{' '}
                    <Expand.Control htmlFor='3-3-1'>
                        <Button variant='rounded'>read ⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='3-3-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                To create new objects of the standard classes (string, Int/uint,
                                float, and bool), which we discussed in the first part, we don’t
                                need to launch the constructor function; instead, we can write the
                                corresponding value directly into the code. For example, for a text
                                string, we can simply write the value in quote marks ("example"),
                                while for numerical values we can write the number.
                            </p>
                            <p>
                                <b>Example code:</b>
                            </p>
                            <Pre>{code1}</Pre>
                            <p className={s.heading}>Deinit</p>
                            <p>
                                When we delete a particular object belonging to a class, we
                                sometimes need to clean up the code. As we could access other public
                                variables within this object, we should delete it to avoid
                                increasing the amount of memory used. Most objects delete
                                themselves, but occasionally the deinit function is required.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </Section>
);
