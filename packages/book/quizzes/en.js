/* eslint-disable camelcase */
import img_8_1 from './img/8-1.png';

export default {
    1: {
        title: 'Quiz #1',
        description: 'Introduction: see if you got it right',
        questions: [
            {
                type: 'multiple-choice',
                title: 'The Instagram app consists of:',
                options: [
                    { title: 'Comments' },
                    { title: 'Posts' },
                    { title: 'Feed' },
                    { title: 'Photos' },
                    { title: 'All of the above', correct: true }
                ],
                comment:
                    "Each of the classes listed is a part of Instagram's structure (as we discussed in the first chapter). As you know, all programs are made up of components, which in turn belong to classes. So the correct answer is 'All of the above', as it describes the app in the most complete way."
            },
            {
                type: 'multiple-choice',
                title: 'A Post consists of:',
                options: [
                    { title: 'Users', correct: true },
                    { title: 'Images/Videos', correct: true },
                    { title: 'Caption', correct: true },
                    { title: 'Stories' }
                ],
                comment: 'Stories are not post components, but rather a separate class.'
            }
        ],
        time: '~1 min'
    },
    2: {
        title: 'Quiz #2',
        description: 'Class description, components, and properties',
        questions: [
            {
                type: 'multiple-choice',
                title: 'The properties of a User in Instagram are:',
                options: [
                    { title: 'Comment' },
                    { title: "The account having a 'Business' status", correct: true },
                    { title: 'Posts' },
                    { title: 'Bio' },
                    { title: "The account having a 'Private' status", correct: true }
                ],
                comment:
                    "When describing a class, we write its characteristics in the same way as we write its components. However, it is easier to understand and describe a class's structure if you separate its elements (such as a user profile) from their properties (such as a profile being private)."
            },
            {
                type: 'text',
                title: 'Class is ...',
                comment:
                    "While you could have chosen different words for the description, the important thing here is to clarify the principle by which we define a class. It is a 'type' of element, a template that gives a general description of the composition of all specific objects of this type (all instances of this class)."
            },
            {
                type: 'multiple-choice',
                title: "Imagine an office desk. Let's say 'Desk' is a class. What are some of the properties of this class?",
                options: [
                    { title: 'Color', correct: true },
                    { title: 'My computer, which is sitting on the desk' },
                    { title: 'Material', correct: true },
                    { title: 'My notebook, which I have put on the desk' },
                    { title: 'Desk height', correct: true }
                ],
                comment:
                    "Color, material, and desk height are qualities that help us describe the specifics of a particular desk (a particular instance of the 'Desk' class)."
            },
            {
                type: 'multiple-choice',
                title: 'List all elements that can be categorized as a class:',
                options: [
                    { title: 'Comment', correct: true },
                    { title: 'Save a story' },
                    { title: 'Like', correct: true },
                    { title: 'User', correct: true },
                    { title: 'Sending a message to a friend' },
                    { title: 'Post', correct: true }
                ],
                comment:
                    "Any 'category' of thing or type of object can be a class, though actions performed with these objects (such as saving a story or sending a message) do not belong to the object's class."
            }
        ],
        time: '~2 min'
    },
    3: {
        title: 'Quiz #3',
        description: 'The definition and description of functions',
        questions: [
            {
                type: 'text',
                title: 'What is a function?',
                comment:
                    'You could have chosen other words for the description. But the important thing is learning to differentiate a function from a class in code. A function defines which actions can be performed with examples of classes and lists the steps that a computer must take to perform these actions.'
            },
            {
                type: 'multiple-choice',
                title: 'Which one of the options below is a function?',
                options: [
                    { title: "Liking a friend's Instagram post" },
                    { title: 'Messaging a friend' },
                    { title: 'Creating an Instagram story' },
                    { title: 'Sharing a post with a friend' },
                    { title: 'All of the above', correct: true }
                ],
                comment:
                    'All of the actions listed are functions, as they describe what can be done with instances of the corresponding classes.'
            },
            {
                type: 'multiple-choice',
                title: 'Which one is NOT a function?',
                options: [
                    { title: 'Number of comments', correct: true },
                    { title: 'Creating an Instagram Story' },
                    { title: 'Tagging a friend in a post' },
                    { title: 'Changing my username' }
                ],
                comment:
                    'The number of comments is not a function, as it does not define the actions that can be performed with the comments. Rather, it is the result of performing the comment-counting function.'
            },
            {
                type: 'multiple-choice',
                title: 'What is the order of actions to tag a friend in a post?',
                options: [
                    {
                        title: 'Select a friend, Click on the button “Create post”, Add an Image, Click "Save", Click on “Tag friend”'
                    },
                    {
                        title: 'Click “Save", Click on “Tag friend”, Click on the button “Create post”, Select a friend, Add an Image'
                    },
                    {
                        title: 'Add an Image, Click on “Tag friend”, Select a friend, Click "Save", Click on the button "Create post"'
                    },
                    {
                        title: 'Click on “Tag friend”, Select a friend, Click “Save", Add an Image, Click on the button “Create post”'
                    },
                    {
                        title: 'Click on the button “Create post”, Add an Image, Click "Save", Click on “Tag friend”, Select a friend',
                        correct: true
                    }
                ],
                comment:
                    " Instagram's working algorithm could have changed since we created this course. The main thing to remember is that a function is simply a list of actions that a program needs to perform in order to change the composition of a particular object (an instance of a class)."
            },
            {
                type: 'text',
                title: 'This is the function for editing a Post. What is the class type that the function returns?',
                code: `
                func editCaption(newCaption Text) {
                    currentCaption = newCaption
                    post.edit.changecaption(newCaption)
                }`,
                comment:
                    'The correct answer is Text, as the caption component belongs to the Text class.'
            }
        ],
        time: '~3 min'
    },
    4: {
        title: 'Quiz #4',
        description: 'Creating objects and using Classes',
        questions: [
            {
                type: 'multiple-choice',
                title: 'Why do we need to create class instances?',
                options: [
                    {
                        title: 'To be able to manipulate an instance of a class',
                        correct: true
                    },
                    { title: "We don't need to create instances" },
                    { title: 'To be able to describe the class' },
                    { title: 'To be able to change class properties', correct: true }
                ],
                comment:
                    'We only can change a particular instance or property of a class once we have created a specific instance of that class.'
            },
            {
                type: 'multiple-choice',
                title: 'This is a definition of the Post class (picture below). We create a new instance of the Post class: var myPost = new Post(). Which attribute is NOT a part of myPost?',
                code: `
                class {{hl:Post}}(steel-blue) {
                    {{hl:user}}(light-sky-blue)            {{hl:User}}(light-sky-blue)
                    {{hl:time}}(aquamarine)            {{hl:Time}}(aquamarine)
                    {{hl:image}}(green-yellow)           {{hl:Image}}(green-yellow)
                    {{hl:setOfImages}}(green)     [[[]Image}}(green)
                    {{hl:video}}(orange)           {{hl:Video}}(orange)
                    {{hl:setOfLikes}}(sandy-brown)      [[[]Like}}(sandy-brown)
                    {{hl:caption}}(red)         {{hl:Text}}(red)
                    {{hl:setOfComments}}(plum)   [[[]Comment}}(plum)
                }`,
                options: [
                    { title: 'user' },
                    { title: 'tag', correct: true },
                    { title: 'setOfLikes' },
                    { title: 'video' }
                ],
                comment: "Tag, as it is not indicated in the Post class's components listed above."
            },
            {
                type: 'text',
                title: "What's missing from the constructor below?",
                code: `
                {{hl:User}}(steel-blue)({{hl:inputUsername Text}}(orange), {{hl:inputEmail Text}}(orange), {{hl:inputPassword Text}}(orange)) {
                    {{hl:self.username = inputUsername}}(red)
                    {{hl:self.password = inputPassword}}(red)
                    {{hl:???}}(red)
                }`,
                comment:
                    "self.email=inputEmail. Like with other components of the User class, we should save the value of the email address returned in brackets as this particular user's email address. (self.)"
            },
            {
                type: 'text',
                title: 'Write a constructor function for the Post class based on the User example you saw in Chapter III.',
                comment:
                    "In the constructor function, we specify the inputs needed to create an example of the Post class, i.e. user, text, picture and/or video, creation date, and location. The date is usually assigned automatically, while the location can be determined using the device's automatic location capability. When you come to work with SpeakCoding's app code, you will see how this is written in code."
            }
        ],
        time: '~3 min'
    },
    5: {
        title: 'Quiz #5',
        description: 'Storing objects temporarily',
        questions: [
            {
                type: 'multiple-choice',
                title: 'What class type is stored in this variable?',
                options: [
                    { title: 'Post' },
                    { title: 'User', correct: true },
                    { title: 'Name' },
                    { title: 'Caption' }
                ],
                comment:
                    'As you know, variables consist of the names and classes of the objects that can be stored in these variables. The name usually goes first, written with a lowercase letter, followed by the class, written with a capital letter (nameClass).'
            },
            {
                type: 'single-choice',
                title: 'Insert value instead of ???:',
                code: `
                func addLike(user User) {
                    var newLike {{hl:???}}(red)
                    newLike = new Like(user)
                    self.likes.add(newLike)
                }`,
                options: [
                    { title: 'User' },
                    { title: 'Post' },
                    { title: 'Like' },
                    { title: '[]Likes', correct: true }
                ],
                comment:
                    "As a post can have many likes, the correct answer is the []Likes class (set of likes). But Like could also be considered a correct answer; we'll look more closely at sets in later chapters."
            }
        ],
        time: '~1 min'
    },
    6: {
        title: 'Quiz #6',
        description: "Changing objects' states",
        questions: [
            {
                type: 'single-choice',
                title: 'You have the currentPost variable, which stores an instance of a Post, and the newCaption variable, which stores new text for this post. What operation can be performed to refresh the text of this post?',
                options: [
                    { title: 'currentPost = newCaption' },
                    { title: 'newCaption = currentPost' },
                    { title: 'currentPost.caption = newCaption', correct: true },
                    { title: 'currentPost.user(currentPost)' }
                ],
                comment:
                    'Posts contain a caption component that we can access (entries with a period . mean we are accessing the components or functions of an object, in our case a specific post), and storing a new value (new text) in the component; this value is called newCaption.'
            }
        ],
        time: '~30 sec'
    },
    7: {
        title: 'Quiz #7',
        description: 'All post displays',
        questions: [
            {
                type: 'multiple-choice',
                title: 'On which screen can one user follow another?',
                options: [
                    { title: 'List of likes', correct: true },
                    { title: 'User profile', correct: true },
                    { title: "List of user's followers", correct: true },
                    { title: 'Post feed' }
                ],
                comment:
                    "You can easily check this by locating the 'follow' button on Instagram's interface. The screens between which you are navigating are all defined in the corresponding classes' interface files."
            }
        ],
        time: '~1 min'
    },
    8: {
        title: 'Quiz #8',
        description: 'Breaking down the screen: what the View consists of',
        questions: [
            {
                type: 'single-choice',
                title: 'The edit-post screen is defined in the PostEditorController class. What on the list is NOT a component of this class?',
                img: img_8_1,
                options: [
                    { title: 'Post Image' },
                    { title: 'Post CaptionField' },
                    { title: 'Like Button', correct: true },
                    { title: 'Location Field' }
                ],
                comment:
                    'In addition to the class description in the [PostEditorController](https://github.com/SpeakCoding/iphone/blob/main/App/PostEditorController.swift) file, you can also check this in the app.'
            }
        ],
        time: '~3 min'
    },
    9: {
        title: 'Quiz #9',
        description: 'Changing components and interacting with classes',
        questions: [
            {
                type: 'single-choice',
                title: 'For which element of the PostFeedView interface do we need to add function execution when we double-click on that element?',
                options: [
                    { title: 'Like Button' },
                    { title: 'Image', correct: true },
                    { title: 'Add a Comment' },
                    { title: 'User Picture' }
                ],
                comment: 'Image. You can check this yourself in Instagram.'
            }
        ],
        time: '~15 sec'
    },
    10: {
        title: 'Quiz #10',
        description: 'Files & folders',
        questions: [
            {
                type: 'multiple-choice',
                title: 'Which of these files describes our main structural (modal) classes?',
                options: [
                    { title: 'User.swift', correct: true },
                    { title: 'UserProfileView.swift' },
                    { title: 'PostTileCell.swift' },
                    { title: 'Post.swift', correct: true }
                ],
                comment:
                    'The names of model class files usually contain only the name of the main structural element that the files define, i.e. the name of a post, user, or comment. The correct answer is User.swift, Post.swift.'
            },
            {
                type: 'single-choice',
                title: 'How many classes in our repository describe the View and/or Controller classes for our User class?',
                options: [
                    { title: '7', correct: true },
                    { title: '3' },
                    { title: '10' },
                    { title: '1' }
                ],
                comment:
                    'You can count these yourself in the file list that is accessible via the GitHub link that we shared with you. There should be seven – UserProfileView, UserSearchView, UserProfileEditorController, UsersListsViewController, UsersLookupViewController, UserCellView, and UserCellView+FollowButton.'
            }
        ],
        time: '~7 min'
    },
    11: {
        title: 'Quiz #11',
        description: 'Complex sentences',
        questions: [
            {
                type: 'text',
                title: 'What are we aiming to achieve with the following code?',
                code: `
                var lastFollower User
                lastFollower = myAccount.getFollowers().last.getUserName()`,
                comment:
                    'To obtain the name of the most recent follower of a particular user profile.'
            },
            {
                type: 'text',
                title: 'What are we aiming to achieve with the following code?',
                code: `
                var lastPostLikes Set[Like]
                lastPostLikes = myAccount.getLastPost().getLikes()`,
                comment: "To obtain the most recent likes to a particular user's last post."
            },
            {
                type: 'text',
                title: 'Which function is missing from the following string?',
                code: `
                var mutedSubscriptions Set[User]
                mutedSubscriptions = myAccount.{{hl:???}}(red).muted()`,
                comment: 'getFollowers.'
            },
            {
                type: 'text',
                title: 'Which class does commentReplies belong to?',
                code: `
                var commentReply {{hl:???}}(red)
                commentReply = myLastPost.getComment().last.getReply()`,
                comment: 'To the Comment class.'
            },
            {
                type: 'text',
                title: 'What needs to be added to the following code to receive comments to your recent stories?',
                code: `
                var storyReplies Set[Comment]
                storyReplies = myAccount.getStories().{{hl:???}}(red)`,
                comment: 'myAccount.getStories().**last.getReply()**'
            }
        ],
        time: '~5 min'
    }
};
