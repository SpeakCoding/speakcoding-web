import React from 'react';
import { Section } from '@sc/ui';
import TextToCode from '../../../common/1/text-to-class';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h2>Classes</h2>
                <p>
                    Instagram allows users to create specific instances of certain elements,
                    including creating <i>specific</i> posts and registering <i>specific</i> new
                    users. So, the coding process begins by defining, in general terms, each{' '}
                    <Term id='class' tooltip>
                        class
                    </Term>{' '}
                    of these elements (e.g., the post, comment, and user classes). In programming,
                    the definition of an entity in general terms is called{' '}
                    <Term id='class'>class</Term>. And specific posts and users are called{' '}
                    <Term id='instance' tooltip>
                        instances of a class
                    </Term>
                    . You can think of a class as a category of things. Let’s say you have a car, a
                    blue BMW. It belongs to the car Class. The class describes general
                    characteristics and properties of cars, but is not an example of a specific car.
                    To describe a specific car – your blue BMW – we need to create an actual
                    instance of the car Class and write down its properties and characteristics.
                </p>
                <h2>Defining classes in code</h2>
                <p>
                    This definition mirrors the structure that we mapped out above, which is quite
                    similar to programming. <b>Let’s look at the table below.</b>
                </p>
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <TextToCode>
                    <TextToCode.Step1>Post structure in simple writing</TextToCode.Step1>
                    <TextToCode.Step2>
                        All <b>"Set of..."</b> components are written in code as square brackets
                    </TextToCode.Step2>
                    <TextToCode.Step3>
                        To identify a class definition, the keyword ‘class’ appears at the beginning
                        of a new line; all content is then written on indented lines and framed in
                        curly brackets {'{}'}.
                    </TextToCode.Step3>
                    <TextToCode.Step4>
                        Each component is assigned not only a Class, but also a title. A more
                        detailed explanation is given in the next chapter below.
                    </TextToCode.Step4>
                </TextToCode>
            </Section.Main>
        </Section>
    </>
);
