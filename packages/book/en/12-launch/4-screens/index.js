import React from 'react';
import { HL, Img, Pre, Section } from '@sc/ui';
import Example1 from './Example1';
import Example2 from './Example2';
import img from './app.jpeg';
import s from './style.css';

const code1 = `
func [[showLoginView]](aquamarine)() {
    self.tabBarController = nil
    let loginViewController = [[LoginViewController]](light-sky-blue)(emailAddress: nil) {\t 
        self.setupUI()
        self.window!.rootViewController = self.tabBarController
    }
    let [[loginFlowNavigationController]](steel-blue) =
        [[UINavigationController]](orange)(rootViewController: [[loginViewController]](wheat))
    loginFlowNavigationController.modalPresentationStyle = .[[fullScreen]](plum)
    loginFlowNavigationController.[[isNavigationBarHidden = true]](turquoise)
    self.window!.[[rootViewController]](sandy-brown) = [[loginFlowNavigationController]](red)
}`;

export default () => (
    <Section>
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
                <Pre value={code1} />
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
                <center>
                    <div className={s.screen}>
                        <Img src={img} width={320} />
                    </div>
                </center>
                <p>
                    We’ve covered how each tab is an instance of the UINavigationController class.
                    The rootViewController component of this class contains an instance of the class
                    of one of our main ViewControllers. For example, for the first tab, this is
                    FeedViewController. We have, so to speak, “wrapped” the ViewController into the
                    NavigationController. Now to each tab we need to assign a tabBarItem (an
                    instance of the UITabBarItem class), to which we then transfer two images (for
                    when the tab is active and when it’s not), and to assign an identification tag.
                </p>
            </Section.Main>
        </Section.Block>

        <Example1 />
        <Example2 />
    </Section>
);
