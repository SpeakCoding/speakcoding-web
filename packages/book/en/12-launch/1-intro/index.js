import React from 'react';
import { Section } from '@sc/ui';

export default () => (
    <Section>
        <Section.Main narrow>
            <h1>Launching AppDelegate and Main</h1>
            <p>
                Every application has a file from which the program starts. This file typically
                needs to contain a function with a standard name (such as ‘main’). This is the
                initial function that launches the whole program, the point from which all
                operations begin.
            </p>
            <p>
                This function will typically contain descriptions of the steps required to launch
                apps and display the main views that the user should see on screen when first
                interacting with the program. This can be the ‘show login’ function or the
                application’s main screen with the post feed.
            </p>
            <p>
                <b>For the iOS application, this function’s role can be performed by:</b>
            </p>
            <ul>
                <li>
                    The class that inherits the App class from the standard library Foundation. To
                    make it easier for the compiler to find where to read the code, this class needs
                    to be tagged @main.
                </li>
                <li>
                    The class that inherits the UIAppDelegate class from the standard library
                    Foundation. This class needs to be tagged @UIApplicationMain. The class needs to
                    contain a description of the application function used to start the program.
                </li>
            </ul>
            <p>
                In the case of our application, this file and class are both named AppDelegate.{' '}
                <b>AppDelegate</b> can be thought of as a controller for the whole program.
            </p>
        </Section.Main>
    </Section>
);
