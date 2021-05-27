import React from 'react';
import { Callout, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import { interceptor, InterceptorView } from '../../../phone';

async function onEnter() {
    await interceptor.logout();
    interceptor.open();
}

export default () => (
    <Section.Block>
        <Section.Main>
            <InterceptorView onEnter={onEnter} onExit={interceptor.close}>
                <h1>Creating Objects (Instances)</h1>
                <p>
                    Let’s return to defining structures using code. What we were doing above was
                    defining <b>classes of objects</b>, their <Term id='property'>properties</Term>{' '}
                    and <Term id='function'>functions</Term>. Having defined a Class, we can then
                    create objects (instances) of that class.
                </p>
                <Callout>
                    Defining a class is NOT the same as creating objects of that class
                </Callout>
                <p>
                    For example, a user’s interaction with Instagram starts when they create an
                    account in the program.
                </p>
                <p>
                    In a structured definition, we defined the User class and what it will consist
                    of:
                </p>
                <p>
                    <HL color='orange' active>
                        User
                    </HL>{' '}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <HL color='orange' active>
                        Username
                    </HL>{' '}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <HL color='orange' active>
                        Profile Picture
                    </HL>{' '}
                    or{' '}
                    <HL color='orange' active>
                        Latest Story Image
                    </HL>
                </p>
                <p>
                    When you open Instagram, you see a screen with a form (shown here to the right).
                    It consists of <b>Username</b>, <b>Email</b>, and <b>Password</b> fields, and a{' '}
                    <b>Submit</b> button. As we discussed previously (and we’ll cover this again in
                    this section), this form is a separate display class (called “view”), which
                    defines the components needed to register a new user. To this class, we now add
                    the sequence of steps taken by the function that is called when the user presses
                    the Submit button. This sequence is needed for the information the User entered
                    in the form to be saved and for Instagram to create a new account using the data
                    from the form.
                </p>
                <p>
                    As we described above, each <Term id='instance'>object (instance)</Term> of a
                    specific class consists of all the <Term id='property'>properties</Term> and{' '}
                    <Term id='component'>components</Term> of the class itself; we defined these
                    previously in the overall structure. To create a specific{' '}
                    <Term id='instance'>object (instance)</Term>, each{' '}
                    <Term id='property'>property</Term> should be defined and all{' '}
                    <Term id='component'>components</Term> created beforehand.
                </p>
                <p>
                    To create a specific <Term id='instance'>object (instance)</Term>, we use a
                    special{' '}
                    <Term id='constructor' tooltip>
                        constructor function
                    </Term>{' '}
                    that lets us transfer the inputs needed to create this{' '}
                    <Term id='instance'>object (instance)</Term>. This constructor function is
                    executed when the object is created, and the data is transferred to it as
                    inputs.
                </p>
                <p>
                    In the case of the Instagram user, we know a specific User always has a
                    username, email, and password. Therefore the User constructor looks like this:
                </p>
            </InterceptorView>
        </Section.Main>
        <Section.Side />
    </Section.Block>
);
