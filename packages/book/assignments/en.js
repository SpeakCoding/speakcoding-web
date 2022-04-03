/* eslint-disable camelcase */
import img_11_1 from './img/11-1.png';
import img_12_1 from './img/12-1.png';
import Asset_3_1 from './assets/3-1-en';
import Asset_18_1 from './assets/18-1';
import Asset_19_1 from './assets/19-1-en';

export default {
    1: {
        title: 'Assignment #1',
        description:
            'Open the Spotify app and describe what it consists of. You could start by writing this in text form, then in a structured format (in the style of Instagram, Twitter or Venmo). We will then look at your description and discuss it at the end of this section.',
        questions: [
            {
                title: 'Open the Spotify app and describe what it consists of. You could start by writing this in text form, then in a structural format (in the style of Instagram, Twitter, or Venmo). We will then look at your description and discuss it at the end of this section.',
                details:
                    'A structural description does not include everything that you see on your screen or in the program’s interface. Looking closely at what a Post comprises, you will notice new ‘components’ that were not present in the structural description of a Post from the first chapter. For example, the interface contains a comment counter or a bookmark icon. These components are specific to what we want to show to the user on the display, though when creating a structural description of an app, we need to focus on what the program is structured around: a set of audio files that can later be saved or bundled together to create an album, payments made from one user to another, or a message exchange. All additional functions, such as showing which friends liked a post or displaying a heart icon, are usually added at later stages of product development on the initiative of the product manager rather than the developer.\n\n' +
                    'You can choose to open another app that you use regularly, and define its composition.'
            }
        ],
        time: '~30-40 min',
        chapter: 1
    },
    2: {
        title: 'Assignment #2',
        description:
            'Create a structured definition of the components and properties for the Post class in Instagram, including as much detail as possible. Assign a title and class to each component.',
        questions: [
            {
                title: 'Create a structural description of the components and properties for the Post class in Instagram, including as much detail as possible. Assign a title and class to each component.',
                example: 'Below is an example of a detailed description of the components:',
                code: `
                Comment
                    user (class User)
                    creationTime (class Time)
                    text (class Text)
                    replies (class Set of Comments)`
            }
        ],
        time: '~30-40 min',
        chapter: 1
    },
    3: {
        title: 'Assignment #3',
        description:
            'In addition to the definition of the Post class, list all functions of this class',
        questions: [
            {
                title: 'In addition to the description of the Post class that you created in the previous exercise, let’s list all the functions of this class. Think of a title for each function, and list all the inputs (including title and class) as well as the class of the return value (if such a value exists). Remember, some functions can be performed without inputs.',
                example: ' ',
                Asset: Asset_3_1
            }
        ],
        time: '~30-40 min',
        chapter: 2
    },
    4: {
        title: 'Assignment #4',
        description:
            'Consider which screens the User class will require (e.g., creation, editing, lists)',
        questions: [
            {
                title: 'Consider which screens the User class will require (e.g. creation, editing, lists).'
            }
        ],
        time: '~20-30 min',
        chapter: 4
    },
    5: {
        title: 'Assignment #5',
        description: 'Describe (list) what the user profile screen consists of',
        questions: [
            {
                title: 'Describe (list) what the user profile screen consists of.'
            }
        ],
        time: '~15-20 min',
        chapter: 4
    },
    6: {
        title: 'Assignment #6',
        description:
            'In the SpeakCoding repository (see the link in the beginning of the chapter) find a controller file describing the display class of the PostFeedView, and list all of its components and functions',
        questions: [
            {
                title: 'In the SpeakCoding repository (see the link at the beginning of Chapter V), find a controller file describing the display class of the PostFeedView, and list all of its components and functions.'
            }
        ],
        time: '~30-40 min',
        chapter: 5
    },
    7: {
        title: 'Assignment #7',
        description: 'Create a local copy of the repository',
        questions: [
            {
                title: 'Create a local copy of the SpeakCoding repository on your computer.',
                ask: 'Were you able to create a local copy of the repository?'
            }
        ],
        time: '~5 min',
        chapter: 5
    },
    8: {
        title: 'Assignment #8',
        description: 'Create your own code branch with the name Name_Surname and switch to it',
        questions: [
            {
                title: 'Create your own code branch inside the SpeakCoding repository with the Name_Surname title and switch to it.',
                ask: 'Were you able to create your own code branch with the Name_Surname title and switch to it?'
            }
        ],
        time: '~3 min',
        chapter: 5
    },
    9: {
        title: 'Assignment #9',
        description:
            'Install Xcode on your computer. Launch the editor and open a project, indicating the folder into which you downloaded the repository (e.g., Documents/SpeakCoding/iphone/).',
        questions: [
            {
                title: 'Install Xcode on your computer. Launch the editor and open a project, indicating the folder into which you downloaded the repository (e.g., Documents/SpeakCoding/iphone/).',
                ask: 'Were you able to install Xcode on your computer, launch the editor, and open the downloaded project?'
            }
        ],
        time: '~3 min',
        chapter: 5
    },
    10: {
        title: 'Assignment #10',
        description:
            'Open the downloaded repository in Xcode. Open the file containing the definition of the Post class, locate the component that stores the user who created the post, and jump to the description of that component’s class within the editor.',
        questions: [
            {
                title: 'Open the downloaded repository in Xcode. Open the file containing the definition of the Post class, locate the component that stores the user who created the post, and jump to the description of that component’s class within the editor.',
                ask: 'Were you able to complete the assignment?'
            }
        ],
        time: '~5 min',
        chapter: 5
    },
    11: {
        title: 'Assignment #11',
        description:
            'Open the Xcode project. Inside Xcode is a program-running simulator. The panel with the list of devices is located above the widest field containing code, at the very top.',
        questions: [
            {
                title: 'Open the SC project in Xcode. Inside Xcode is a program-running simulator. A panel with a list of devices is located above the widest field containing code, at the very top.',
                details:
                    'Open the project in XCode/Visual Studio. XCode contains an emulator on which to run the app. There is a device-list panel above the widest field containing code, at the very top (see the photo below). To run the app, select iPhone 11 Pro from the device list and press the button that resembles a Play button ⏯. The professional term for this is ‘running a build’, and doing so complies the app and launches it in an emulator. Now, create a new user profile in the app emulation and open the post feed.',
                img: img_11_1,
                ask: 'Were you able to complete the assignment?'
            }
        ],
        time: '~5 min',
        chapter: 5
    },
    12: {
        title: 'Assignment #12',
        description:
            'Open a copy of the downloaded repository in Xcode. Connect your phone to the device on which Xcode is open. To launch the app on your phone, select your phone from the device list (it should appear in the list when it is connected).',
        questions: [
            {
                title: 'Open a copy of the downloaded repository in Xcode. Connect your phone to the device on which Xcode is open and launch the SpeakCoding app on your phone.',
                details:
                    'Open a copy of the downloaded repository in Xcode. Connect your phone to the device on which Xcode is open. To launch the app on your phone, select your phone from the device list (it should appear in the list when it is connected). You will need to connect your phone via a cable in order to install the app. Your phone will then appear in the device list. This will not work the first time (though the initial attempt is required anyway) as you need to allow your phone to install apps from your computer rather than from the Apple store. To do this, go to Settings > General > Profiles or Device Management on your phone. Here you need to select the certificate that appears and confirm that you trust it. You can now repeat installation of the app, which will now run on your phone.',
                img: img_12_1,
                ask: 'Were you able to complete the assignment?'
            }
        ],
        time: '~3 min',
        chapter: 5
    },
    13: {
        title: 'Assignment #13',
        description:
            'Go through all of the files in the file list to the left and describe briefly what each file describes. For example, the User.swift file contains a description of the User class.',
        questions: [
            {
                title: 'Go through all of the files in the file list to the left and state briefly what each one describes. For example, the User.swift file contains a description of the User class.'
            }
        ],
        time: '~30 min',
        chapter: 5
    },
    14: {
        title: 'Assignment #14',
        description:
            'Unpack the .xib file for User Profile (UserProfileView.xib) into its constituent elements',
        questions: [
            {
                title: 'Unpack the .xib file for User Profile (UserProfileView.xib) into its constituent elements.'
            }
        ],
        time: '~20 min',
        chapter: 5
    },
    15: {
        title: 'Assignment #15',
        description: 'Finding answers to questions',
        questions: [
            {
                title: 'Find out how to create a class in the Swift language (this is used to create apps for iOS and is the language in which code in the SpeakCoding repository is written). Paste the link to the article you found here.'
            },
            {
                title: 'Find out how to write a for/while loop in Swift. Paste the link to the article you found here.'
            },
            {
                title: 'Find out how to create an element feed in a Swift app. Paste the link to the article you found here.'
            }
        ],
        time: '~5 min',
        review: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        chapter: 6
    },
    16: {
        title: 'Assignment #16',
        description: 'Search for a UIKit and standard interface classes',
        questions: [
            {
                title: 'Find a standard UIKit library and discover how to import it when writing code. Paste the link to the article you found into the field below.'
            },
            {
                title: 'Find a description of Swift’s standard Label class and discover how to import the class. Paste the link to the article you found into the field below.'
            }
        ],
        time: '~5 min',
        chapter: 6
    },
    17: {
        title: 'Assignment #17',
        description:
            'Take any comment (or make one of your own) and break it into data; write it down in the string the format in which you can transfer the comment to the server',
        questions: [
            {
                title: 'Take any comment (or make one of your own) and break it into data. In the string, write down the format in which you can transfer the comment to the server.',
                example: 'An example of how to write post as a string:',
                code: `'{"post": {"caption": "This is my first post!", "user": "liberman1984", "comments": []}}'`
            }
        ],
        time: '~5 min',
        chapter: 8
    },
    18: {
        title: 'Assignment #18',
        description:
            'Populate the tables above with the missing Post components and consider which tables we will need to create to record all of the post’s data',
        questions: [
            {
                title: 'Populate the tables below with the missing Post components, and consider which tables we will need to create to record all of the post’s data. Paste the link to the document you have created here.',
                Asset: Asset_18_1
            }
        ],
        time: '~30 min',
        chapter: 8
    },
    19: {
        title: 'Assignment #19',
        description:
            'Describe the request that you need to write in a database to edit a post. Try to write it as an SQL request.',
        questions: [
            {
                title: 'Describe the request that you need to write in a database to edit a post with id=1. Now write it as an SQL request. Paste the link to the document you have created here.',
                example: ' ',
                Asset: Asset_19_1
            }
        ],
        time: '~15 min',
        chapter: 8
    },
    20: {
        title: 'Assignment #20',
        description:
            'In SpeakCoding repository open the Cache.swift file, then list the functions and describe what they do',
        questions: [
            {
                title: 'In the SpeakCoding repository, open the Cache.swift file, then list the functions and describe briefly what they do.'
            }
        ],
        time: '~30 min',
        chapter: 8
    },
    21: {
        title: 'Assignment #21',
        description: 'Find the part of the code that creates the Post table',
        questions: [
            {
                title: 'In the code of the SpeakCoding app, find the part of the code that creates the Post table and paste it here.'
            }
        ],
        time: '~3 min',
        chapter: 8
    },
    22: {
        title: 'Assignment #22',
        description:
            'In Cache.swift file find the function that is responsible for editing posts, and describe that function’s steps',
        questions: [
            {
                title: 'In Cache.swift file, find the function that is responsible for editing Posts and describe that function’s steps.'
            }
        ],
        time: '~30 min',
        chapter: 8
    },
    23: {
        title: 'Assignment #23',
        description:
            'State what endpoint we need to add to a request to be able to read a list of the user’s followers',
        questions: [
            {
                title: 'State what endpoint we need to add to a request to be able to read a list of the user’s followers.'
            }
        ],
        time: '~5 min',
        chapter: 9
    },
    24: {
        title: 'Assignment #24',
        description:
            'Which request helps us retrieve the most recent comments to the user’s last post? Using the examples above, write the entire request.',
        questions: [
            {
                title: 'Which request helps us retrieve the most recent comments to the user’s last post? Write the entire request using the examples from Chapter IX.'
            }
        ],
        time: '~20 min',
        chapter: 9
    },
    25: {
        title: 'Assignment #25',
        description:
            'In [ServerAPI.swift](https://github.com/SpeakCoding/iphone/blob/main/App/ServerAPI.swift), find the function that sends requests to create posts to the server. List (name) the function’s inputs.',
        questions: [
            {
                title: 'In [ServerAPI.swift](https://github.com/SpeakCoding/iphone/blob/main/App/ServerAPI.swift), find the function that sends requests to create posts to the server. List (name) the function’s inputs.'
            },
            {
                title: 'In the temporary variable requestParameters, we store the post components in a format that can be written as a string. List the post components that we save in this variable.'
            }
        ],
        time: '~15 min',
        chapter: 9
    },
    26: {
        title: 'Assignment #26',
        description:
            'Find the file that defines how to create the Comments table, and describe which fields, and what type of fields, we create in this file.',
        questions: [
            {
                title: 'Find the file that defines how to create the Comments table on the server, and describe which fields, and what type of fields, we create in this file.'
            }
        ],
        time: '~20 min',
        chapter: 10
    },
    27: {
        title: 'Assignment #27',
        description:
            'Find the file that describes the User class and see which links are defined between the user and other model classes. Describe them in basic terms...',
        questions: [
            {
                title: 'On the server, find the file that describes the User class and see which links are defined between the user and other model classes. Describe them in basic terms. Next, find all the functions that we define for this class (User), and describe in basic terms (in your own words) what you understand these functions to do.'
            }
        ],
        time: '~15 min',
        chapter: 10
    },
    28: {
        title: 'Assignment #28',
        description:
            'Unpack the sign-up and update functions (above) in the show functions example',
        questions: [
            {
                title: 'Unpack the sign-up and update functions (defined in the first part of Chapter XI), following the show function example in the text. Paste the link to the document you have created here.'
            }
        ],
        time: '~30-45 min',
        chapter: 11
    },
    29: {
        title: 'Assignment #29',
        description:
            'In the server-side code, look at the controller for the User class and the corresponding part of the routes.rb configuration file. List the requests that the server might process for users.',
        questions: [
            {
                title: 'In the server-side code, look at the controller for the User class and the corresponding part of the routes.rb configuration file. List the requests that the server might process for users, the URLs for these requests, and the request types (GET, POST, etc.).'
            }
        ],
        time: '~15 min',
        chapter: 11
    }
};
