import React from 'react';
import { Callout, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';

export default () => (
    <>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Section.Block>
            <Section.Main>
                <p>
                    If the initial state of some of a class’s <Term id='component'>components</Term>{' '}
                    or <Term id='property'>properties</Term> is common to <b>all</b>{' '}
                    <Term id='instance'>instances (objects)</Term> of this{' '}
                    <Term id='class'>class</Term>, then for each of these{' '}
                    <Term id='component'>components</Term>, that value can be added to the{' '}
                    <Term id='class'>class’s</Term> definition.
                </p>
                <p>
                    Note that as we indicate the ‘value’ on the right of the equation (a specific
                    instance of an empty set of comments), we do not need to indicate the class of
                    the comments component. This is because the class of the indicated ‘value’ will
                    be used.
                </p>
                <Callout>
                    <p>
                        So, the initial state of the components can be specified in the following
                        ways:
                    </p>
                    <ul>
                        <li>
                            If the component has already been created, we transfer it to the
                            constructor function.
                        </li>
                        <li>
                            If we have not already created this element, then we need to do so when
                            it is defined.
                        </li>
                        <li>
                            If all objects of this class share a common initial state, then this
                            state can be specified as the default value. Instagram’s default value
                            for an object of the Comment class is 0. (Example: we are all born
                            without an education. The default value for the Education characteristic
                            of the Person class here would be “no education”.)
                        </li>
                    </ul>
                </Callout>
            </Section.Main>
        </Section.Block>
    </>
);
