import React from 'react';
import { HL, Img, Link, Pre, Section } from '@sc/ui';
import Example1 from './Example1';
import Example2 from './Example2';
import img from './app.png';

const code1 = `func application(_ {{application: UIApplication}}(hl:aquamarine), didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {`;

const code2 = `
    User.{{initCurrentUser}}(hl:light-sky-blue)()

    self.window = UIWindow({{frame: UIScreen.main.bounds}}(hl:orange))
    self.window!.tintColor = UIColor(named: {{"sc-blue"}}(hl:powder-blue))

    if {{User.current == nil}}(hl:light-sky-blue) {
        self.{{showLoginView}}(hl:sandy-brown)()
    } {{else}}(hl:red) {
        self.{{setupUI}}(hl:steel-blue)()
        self.{{window!.rootViewController = self.tabBarController}}(hl:steel-blue)
    }
    self.window!.makeKeyAndVisible()

    return true
}`;

const code3 = `
func {{showLoginView}}(hl:aquamarine)() {
    self.tabBarController = nil
    let loginViewController = {{LoginViewController}}(hl:light-sky-blue)(emailAddress: nil) {
        self.setupUI()
        self.window!.rootViewController = self.tabBarController
    }
    let {{loginFlowNavigationController}}(hl:steel-blue) =
        {{UINavigationController}}(hl:orange)(rootViewController: {{loginViewController}}(hl:wheat))
    loginFlowNavigationController.modalPresentationStyle = .{{fullScreen}}(hl:plum)
    loginFlowNavigationController.{{isNavigationBarHidden = true}}(hl:turquoise)
    self.window!.{{rootViewController}}(hl:sandy-brown) = {{loginFlowNavigationController}}(hl:red)
}`;

export default () => (
    <Section>
        <Section.Block>
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
                    from the 29th line. Here we see the description of the application function
                    (whose inputs are the instance of UIApplication and the didFinishLaunching
                    function), with the two standard inputs defined in the UIApplication class – we
                    inherit this class:{' '}
                    <HL color='aquamarine'>instance of application of the UIApplication class</HL>.
                    We also see the function didFinishLaunchingWithOptions with a set of launch
                    options – launchOptions.
                </p>
                <Pre>{code1}</Pre>
                <p>
                    The function’s first step is to call User.
                    <HL color='light-sky-blue'>initCurrentUser()</HL>, which is defined in the User
                    class (in the User.swift file respectively). The function checks whether the{' '}
                    <HL color='light-sky-blue'>current user’s profile</HL> is saved, and loads it
                    into User.current (a ‘static’ component of the User class). If the profile is
                    not saved, then User.initCurrentUser(){' '}
                    <HL color='sandy-brown'>takes the user to the login screen</HL>;{' '}
                    <HL color='red'>if it is saved</HL>, then the function{' '}
                    <HL color='steel-blue' inline={3}>
                        takes the user to the window of the main, ‘root’ window of the interface
                    </HL>{' '}
                    (in our case this is the five tabs and the post feed).
                </p>
                <Pre>{code2}</Pre>
                <p>
                    As you may remember, to display a window’s contents, we need to create an
                    instance of the standard UIWindow class (
                    <HL color='orange' inline={3}>
                        in accordance with the screen parameters of the device running the program
                    </HL>
                    ), save the instance in self.window, then change its component{' '}
                    <HL color='steel-blue'>rootViewController</HL>, replacing it with the
                    ViewController that we’ll need.
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
                    The <HL color='sandy-brown'>showLoginView</HL>() function describes all the
                    actions needed to display the LogIn screen. It includes a step that places the
                    LoginView controller in the self.window.
                    <HL color='steel-blue'>rootViewController</HL> component.
                </p>
                <p>
                    The setupUI() function creates an instance of the standard class
                    UITabBarController. As you may remember, this class is responsible for
                    displaying the bottom tab menu in our application (with the home, item search,
                    userprofile, likes, and newpost tabs), and lets the user switch between the
                    application’s main screens.
                </p>
                <p>
                    Later we’ll look more closely at the steps of these two functions and why we
                    need them; meanwhile remember that the{' '}
                    <b>
                        application function describes the main purpose of the AppDelegate file and
                        class, namely to define
                    </b>
                    :
                </p>
                <ul>
                    <li>
                        Which screens the user sees first when interacting with the program; and
                    </li>
                    <li>Which controllers need to be launched for this display and interaction.</li>
                </ul>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <h2>Screens and switching between them</h2>
                <p>
                    The application can be thought of as a kind of screen in whose description we
                    can define which ViewController to display in that screen.
                </p>
                <p>
                    We have seen how to call the LoginView screen via the{' '}
                    <HL color='aquamarine'>showLoginView</HL> function. This function’s definition
                    follows later in the code. As you can see, in this function we create an
                    instance of <HL color='light-sky-blue'>LoginViewController</HL>. By default we
                    create this instance without an email address, and transfer the completion
                    function to it that will be executed when someone successfully logs in to the
                    system.
                </p>
                <Pre>{code3}</Pre>
                <p>
                    We then create an instance of <HL color='orange'>UINavigationController</HL>{' '}
                    called <HL color='steel-blue'>loginFlowNavigationController</HL>, to which we
                    transfer our <HL color='wheat'>LoginViewController</HL> (which becomes the{' '}
                    <HL color='sandy-brown'>rootViewController</HL> of the UINavigationController).
                    The UINavigationController class makes it easier to switch between screens.
                </p>
                <p>
                    We place the <HL color='red'>loginFlowNavigationController</HL> in our window’s{' '}
                    <HL color='sandy-brown'>rootViewController</HL>, having first set
                    loginFlowNavigationController’s parameters: The screen takes up{' '}
                    <HL color='plum' inline={3}>
                        the entire full screen space allocated to it
                    </HL>
                    , and its <HL color='turquoise'>top menu is hidden by default</HL>.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive>
                <p>
                    When the user has logged in, the completion function opens the application’s
                    root screen (in our case the screen with the five tabs), which entails
                    performing two of the steps we have already covered:
                </p>
                <ol>
                    <li>Calling the root screen’s setupUI function;</li>
                    <li>Placing the в tabbarcontroller component in the rootviewcontroller.</li>
                </ol>
                <p>
                    In the setupUI function, we create an instance of the UItabBarController and the
                    five tabs of the main screen’s bottom menu. We save these tabs as a set –
                    viewcontroller – in the tabbarcontrollers component. An instance of this class
                    is placed in the self.tabBarController, then in our window’s
                    self.window.rootViewController. This means that the user sees the corresponding{' '}
                    <HL color='aquamarine'>root</HL> screen in the window.
                </p>
                <p>
                    We’ve covered how each tab is an instance of the UINavigationController class.
                    The rootViewController component of this class contains an instance of the class
                    of one of our main ViewControllers. For example, for the first tab, this is
                    FeedViewController. We have, so to speak, "wrapped" the ViewController into the
                    NavigationController. Now to each tab we need to assign a tabBarItem (an
                    instance of the UITabBarItem class), to which we then transfer two images (for
                    when the tab is active and when it’s not), and to assign an identification tag.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section.Block>

        <Example1 />
        <Example2 />
    </Section>
);
