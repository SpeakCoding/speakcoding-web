import React from 'react';
import { Img, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import xcode from './xcode.png';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h1>Editors (code environment)</h1>
                <p>The downloaded code can be opened in any simple text editor.</p>
                <p>
                    Alternatively, there are special editors that offer expanded functionality. This
                    includes a text highlight function that increases productivity and makes it
                    easier to read the code, support for automatic function completion (similar to
                    T9 predictive text on mobile phones), and lines with errors being displayed
                    instantly.
                </p>
                <p>
                    When creating programs for mobile phones, it is worth using an editor that
                    incorporates visual instruments for creating interfaces and offers virtual
                    program testing on various devices.
                </p>
                <p>
                    As we mentioned above, creating a program for the iPhone entails using Apple’s
                    Xcode editor, available in the Apple store.
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={9}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdrRxpjvEOEFBYJfKRGuOU4T4D6iRYgDKyrDPAy2Mk9mGG3Pg/viewform'
        >
            Install Xcode on your computer. Launch the editor and open a project, indicating the
            folder into which you downloaded the repository (e.g., Documents/SpeakCoding/iphone/).
        </Assignment>

        <Section>
            <Section.Block>
                <Section.Main>
                    <p>
                        <Img src={xcode} width='100%' />
                    </p>
                </Section.Main>
            </Section.Block>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        The editor displays a file tree for your project on the left. You will
                        frequently need to switch from one file to another while working, and this
                        panel allows you to do so easily by selecting a file from the list. Here you
                        will see files with the names of our main classes (User.swift, Post.swift,
                        etc), as well as files with the names of the classes of our app’s
                        controllers (FeedViewController.swift, etc).
                    </p>
                    <p>
                        When you select a file, its contents are displayed in the main central
                        section, i.e., in the code editor. Every line in the editor is numbered to
                        make it easier for developers to read the code and spot any mistakes. The
                        editor also highlights function words. Right-clicking on any class gives the
                        option to Jump to Definition, which quickly takes you to the definition of
                        that class. (Alternatively you can left-click while pressing
                        Control+Command).
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment
            number={10}
            href='https://docs.google.com/forms/d/e/1FAIpQLScmT1DfeXe9IFxiO5j8NNHTt8FQ8Bu1Pt8otlPH_0yYhjjNiQ/viewform'
        >
            Open the downloaded repository in Xcode. Open the file containing the definition of the
            Post class, locate the component that stores the user who created the post, and jump to
            the description of that component’s class within the editor.
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>
                    You can also open a visual editor for xib files, which we discussed in the
                    previous chapter. For example, when you open PostFeedView.xib, you see a
                    schematic visual display of that part of the screen. Alternatively, you can open
                    Asset.xcassets and see a list of the standard images and icons that the app
                    uses.
                </p>
                <p>
                    You can find the project itself (SpeakCoding) at the very top of the list of
                    files. Selecting this in the editor presents you with a choice of parameters for
                    our project. The only parameter you need to amend for now is Team, which can be
                    found in the Sign-in & Capabilities category. Here you will need to give your
                    Apple ID to verify the app before it can be installed on your phone.
                </p>
                <p>
                    At the top of the editor and the file list you will see a button for compilation
                    (it looks like a ‘Play’ button) and a list of devices to select from (an
                    emulator of a version of the iPhone’s operating system or the phone that is
                    connected by cable).
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={11}
            href='https://docs.google.com/forms/d/e/1FAIpQLSckuvVfLprHCwAoPq1WuPmn56p2ev7oY6mMxLTtb5TiBTGLYA/viewform'
        >
            Open the Xcode project. Inside Xcode is a program-running simulator. The panel with the
            list of devices is located above the widest field containing code, at the very top.
        </Assignment>

        <Assignment
            number={12}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdRD72ETeEVJqgbNjrjzYRNaOom5yEFvJ7jUUloyvt_szyPfg/viewform'
        >
            Open a copy of the downloaded repository in Xcode. Connect your phone to the device on
            which Xcode is open. To launch the app on your phone, select your phone from the device
            list (it should appear in the list when it is connected).
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>
                    You will need to connect your phone via a cable in order to install the app.
                    Your phone will then appear in the device list. This will not work first time
                    (though the initial attempt is required anyway) as you need to allow your phone
                    to install apps from your computer rather than from the Apple store. To do this,
                    go to Settings > General > Profiles or Device Management in your phone. Here you
                    need to select the certificate that appears and confirm that you trust it. You
                    can now repeat installation of the app, which will now run on your phone.
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={13}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdvayrPX-SDm6_ni-KABwYcHB0G_sVn8tukiWGvX8fteqtOEw/viewform'
        >
            Go through all of the files in the file list to the left and describe briefly what each
            file describes. For example, the User.swift file contains a description of the User
            class.
        </Assignment>
    </>
);
