import React from 'react';
import { Section } from '@sc/ui';
import ClassExample from './example';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>Classes</h2>
                <p>
                    Instagram allows users to create specific instances of certain elements,
                    including creating <i>specific</i> posts and registering <i>specific</i> new
                    users. So, the coding process begins by defining, in general terms, each{' '}
                    <b>class</b> of these elements (e.g. the post, comment, and user classes). In
                    programming, the definition of an entity in general terms is called <b>class</b>
                    . And specific posts and users are called <b>instances of a class</b>. You can
                    think of a class as a category of things. Let’s say you have a car, a blue BMW.
                    It belongs to the car Class. The class describes general characteristics and
                    properties of cars, but is not an example of a specific car. To describe a
                    specific car – your blue BMW – we need to create an actual instance of the car
                    Class and write down its properties and characteristics.
                </p>
                <h2>Defining classes in code</h2>
                <p>
                    This definition mirrors the structure that we mapped out above, which is quite
                    similar to programming. <b>Let’s look at the table below.</b>
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Section>
            <Section.Main>
                <ClassExample />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>
                    Please ignore unfamiliar words. Instead,{' '}
                    <b>
                        note how the text from the structured definition (left column) is
                        transformed into code (right column)
                    </b>
                    ; this is the essence of programming.
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
    </>
);
