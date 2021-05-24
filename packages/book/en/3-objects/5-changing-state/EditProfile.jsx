import React, { useCallback } from 'react';
import { Section } from '@sc/ui';
import Term from '../../glossary/Term';
import { interceptor, InterceptorView } from '../../../phone';
import { useApp } from '../../../tools';

export default () => {
    const { profile } = useApp();

    const onEnter = useCallback(async () => {
        await interceptor.setSession(profile.instagram_app_authentication_token, { soft: true });
        await interceptor.init();
        await interceptor.on();
        await interceptor.lockDisplay();
        await interceptor.switchTab('profile', true);
        (await interceptor.getControl('profile-edit')).click();
        interceptor.open();
    }, [profile]);

    const onExit = useCallback(async () => {
        await interceptor.off();
        interceptor.close();
    }, [profile]);

    return (
        <Section.Block>
            <Section.Main>
                <InterceptorView onEnter={onEnter} onExit={onExit}>
                    <h1>Changing objects’ states</h1>
                    <p>
                        Now that we have come across <i>specific</i>{' '}
                        <Term id='instance'>objects</Term> of a <Term id='class'>class</Term> and
                        learned how to save them, we can change their state. For example, when we
                        create an account for a particular user, we can change the username. We can
                        do this directly by changing the{' '}
                        <Term id='component'>components of the object</Term> or via a{' '}
                        <Term id='function'>function</Term> of that class.
                    </p>
                    <p>
                        Let’s imagine Instagram has a form you can use to change your username. The
                        form has a field, newUsernameField, in which to input your new username, and
                        a Save button. The form stores the <Term id='instance'>object</Term>{' '}
                        (instance) of your account (User) in its currentUser component of the User
                        class. And in the form’s <Term id='class'>class</Term>, the onClickSetButton{' '}
                        <Term id='function'>function</Term> is defined; this function is called when
                        the corresponding button is pressed. This function changes the username
                        component of your account (an object of the User class).
                    </p>
                    <ul>
                        <li>
                            We can replace <Term id='component'>components</Term> or change{' '}
                            <Term id='property'>properties</Term> directly by adding the
                            corresponding actions to the onClickSetButton function’s sequence of
                            steps.
                        </li>
                    </ul>
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section.Block>
    );
};
