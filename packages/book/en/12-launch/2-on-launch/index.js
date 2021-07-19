import React from 'react';
import { Img, Section } from '@sc/ui';
import img1 from './xcode.png';
import img2 from './layers-1.png';
import img3 from './layers-2.png';
import img4 from './navigation.png';
import s from './style.css';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h2>What happens upon launch</h2>
                <p>
                    You can test this yourself by connecting your phone to the computer on which
                    Xcode (or other code editor) is installed and launching the SpeakCoding
                    emulator. To do this, in the device list in the top menu of the editor, select
                    the connected phone, then press the build button (this is a triangle similar to
                    the play symbol, to the left of the device list). The SpeakCoding app will then
                    appear on your phone.
                </p>
                <p className={s.img}>
                    <Img src={img1} />
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <p>
                    When you press the application button on your phone, you’ll see the login screen
                    if you’re opening the app for the first time, and the screen with the post feed
                    if you’re a registered user. To display LoginView on the screen, we first need
                    to create an instance of the standard system class UIWindow (window).
                </p>
                <p>
                    This window includes the set of elements visible on screen in its current static
                    state. It may help to think of the current state as being like the current
                    position of the post feed on the screen. No matter what the on-screen position
                    of the post feed, you can only ever see one complete post. That post’s comments
                    and likes are ‘collapsed’, and to view them we need to switch to a separate
                    screen. The window functions as a transparent layer between the interface (view)
                    described in the program and the screen of the particular device running the
                    program. The window itself has no visible content. All content on your device’s
                    display comprises the interface elements described in the display file.
                </p>
                <p>
                    Creating an instance of a window (an instance of the UIWindow class) and
                    specifying the requisite ViewController for this instance tells the system which
                    interface we wish to display.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img2} />
                </Section.Sticky>
            </Section.Side>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    The user sees the Login screen, where they can enter their email and password
                    and relay them to the server. If authorization is successful, the server sends
                    the application an instance of the User class with a key (Authentication Token)
                    that is stored locally (currentUser). The user should then see the application’s
                    main screen; to make this happen, we need to assign the window (UIWindow) a new
                    ViewController. Our application’s main screen consists of five tabs, each of
                    which represents one of our main views. First, the tab opens that has the post
                    feed of users whom we follow (FeedViewController). To open this tab, we create
                    an instance of the standard class UITabBarController, then indicate the five
                    main view controllers for this instance, then save the instance as the main view
                    for our window.
                </p>
                <p className={s.img}>
                    <Img src={img3} width={600} />
                </p>
                <p>
                    We can preliminarily place each of our Views in the NavigationView (an instance
                    of the UINavigationController class), which allows us thereafter to switch
                    easily to secondary screens.
                </p>
                <p>
                    For example, switching to our app’s fifth tab, namely the user profile screen
                    (UserProfileViewController), you can switch to that user’s post feed
                    (UserPostsViewController). As UserProfileViewController had previously been
                    placed in UINavigationController, we can use this class’s standard function
                    pushViewController to switch to the new screen. The user can go back to the
                    previous screen via an option in the top menu. All of this interface logic is
                    implemented for us by functions of the standard class UINavigationController.
                </p>
                <p>
                    <span className={s.last}>
                        <Img src={img4} width={600} />
                    </span>
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);
