import React from 'react';
import { HL, Link, Pre, Section } from '@sc/ui';

const code1 = `func application(_ [[application: UIApplication]](aquamarine), didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {`;

const code2 = `
\xa0   User.init[[CurrentUser()]](light-sky-blue)
    
    self.window = UIWindow([[frame: UIScreen.main.bounds]](orange))
    self.window!.tintColor = UIColor(named: "[[sc-blue]](powder-blue)")
    
    if [[User.current == nil]](light-sky-blue) {
        self.[[showLoginView]](sandy-brown)()
    } [[else]](red) {
        self.[[setupUI]](steel-blue)()
        self.[[window!.rootViewController = self.tabBarController]](steel-blue)
    }
    self.window!.makeKeyAndVisible()
        
    return true
}`;

export default () => (
    <Section>
        <Section.Main hlactive narrow>
            <h2>What opening a program looks like in code</h2>
            <p>
                For ease of explanation, let’s{' '}
                <Link
                    href='https://github.com/SpeakCoding/iphone/blob/main/App/AppDelegate.swift'
                    blank
                >
                    read the AppDelegate code
                </Link>{' '}
                from the 29th line. Here we see the description of the application function (whose
                inputs are the instance of UIApplication and the didFinishLaunching function), with
                the two standard inputs defined in the UIApplication class – we inherit this class:{' '}
                <HL color='aquamarine'>instance of application of the UIApplication class</HL>. We
                also see the function didFinishLaunchingWithOptions with a set of launch options –
                launchOptions.
            </p>
            <Pre value={code1} />
            <p>
                The function’s first step is to call User.init
                <HL color='light-sky-blue'>CurrentUser()</HL>, which is defined in the User class
                (in the User.swift file respectively). The function checks whether the{' '}
                <HL color='light-sky-blue'>current user’s profile</HL> is saved, and loads it into
                User.current (a ‘static’ component of the User class). If the profile is not saved,
                then User.initCurrentUser(){' '}
                <HL color='sandy-brown'>takes the user to the login screen</HL>;{' '}
                <HL color='red'>if it is saved</HL>, then the function{' '}
                <HL color='steel-blue' inline={3}>
                    takes the user to the window of the main, ‘root’ window of the interface
                </HL>{' '}
                (in our case this is the five tabs and the post feed).
            </p>
            <Pre value={code2} />
            <p>
                As you may remember, to display a window’s contents, we need to create an instance
                of the standard UIWindow class (
                <HL color='orange' inline={3}>
                    in accordance with the screen parameters of the device running the program
                </HL>
                ), save the instance in self.window, then change its component{' '}
                <HL color='steel-blue'>rootViewController</HL>, replacing it with the ViewController
                that we’ll need.
            </p>
            <p>
                Further to these main steps is an additional step that defines the{' '}
                <HL color='powder-blue' inline={3}>
                    color of the screen to which the user switches when the program is opened
                    (before the required ViewController is loaded)
                </HL>
                .
            </p>
            <p>
                The <HL color='sandy-brown'>showLoginView</HL>() function describes all the actions
                needed to display the LogIn screen. It includes a step that places the LoginView
                controller in the self.window.
                <HL color='steel-blue'>rootViewController</HL> component.
            </p>
            <p>
                The setupUI() function creates an instance of the standard class UITabBarController.
                As you may remember, this class is responsible for displaying the bottom tab menu in
                our application (with the home, item search, userprofile, likes, and newpost tabs),
                and lets the user switch between the application’s main screens.
            </p>
            <p>
                Later we’ll look more closely at the steps of these two functions and why we need
                them; meanwhile remember that the{' '}
                <b>
                    application function describes the main purpose of the AppDelegate file and
                    class, namely to define
                </b>
                :
            </p>
            <ul>
                <li>
                    <b>Which screens the user sees first when interacting with the program; and</b>
                </li>
                <li>
                    <b>Which controllers need to be launched for this display and interaction.</b>
                </li>
            </ul>
        </Section.Main>
    </Section>
);
