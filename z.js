const t = `
for, while (cyclical operators): Used when the actions described in a paragraph need to be repeated a number of times. 

Function: a definition of the actions that can be performed with instances of a class. For example, when defining the Post class, you may assign a function that allows the user to change the text of the Post or to display how many times that post has been saved.  

Function description: A point in the code where we describe a function’s key elements and steps in detail. The general overview of the description is:

Function call: A point in the code where we call a previously described function. The general overview of the call is:

Input or arguments of a function: data that we need to transfer to a function that is essential to perform this function.
Instance of a class (object): an instance of one of the elements that we create when writing the program. Any specific post can serve as an example of the Post class.
Interface: A number of display files (Views&ViewControllers) relate to the interface. These files do the following: 

Json: A convenient format for recording information about objects in textual form. Can be presented as a named set for which each name corresponds to the name of a component. 

Library: A collection of descriptions of classes and components as well as their functions. 

Logical operators (if/else): words appearing before a paragraph that indicate that some of the actions defined in the function should only be performed under certain conditions.

Long-term data storage: data storage that a program can access to ‘restore’ any requisite information about the program’s most recent state. For example, in Instagram we store information about the latest posts that have received comments. 

Main: The initial function that launches the entire program, and the point where all operations begin. This is a block inside which all procedures are described that are needed to launch programs, as are the main views that the user should see when first interacting with the program (such as displaying LoginView).

Method: A standard request made to a server.

Paragraph: several consecutive ‘statements’ in code that share a common context can be selected and put into a ‘paragraph’. Paragraphs are typically enclosed in curly brackets { }. Each new line within a paragraph is indented using the Tab key. All variables created within the context of a paragraph cease to exist when the paragraph is closed (after which they can no longer be used in the code). 

Parent class: a class from which other classes inherit their components, properties, and functions.

Repository: A place where specific data, such as program code, is stored and maintained. Data kept in repositories is usually stored as files.

Ruby on Rails: A framework (program platform) that has standardized the principles of storing data as well as naming classes and functions and, accordingly, the files and folders in which they are stored on the server. 

Sentence: a definition of a particular action listed within a function. It is separated from the preceding sentence by being moved to a new line (as if we had pressed the Enter key).

Serialization: a procedure for recording information in text form about instances of a particular class.

‘Set’: a standard class that combines an indefinite number of a particular class’s elements.

Standard (‘original’) classes: classes that don’t require definitions, for example: string (text string); int (integer)/uint (unsigned, cannot be negative); float (character with a fractional part after the punctuator); and byte (unit of information). It is worth memorizing these (though they can be Googled). We don’t need to run the creation function to create new instances of these classes; instead, we can write the corresponding values directly into the code.

SQL (Structured Query Language): Used when programs interact with databases. Used when programs interact with databases. Any such interaction happens when a database is sent a request to perform a particular action (create, read, change, or delete data). 

SQLiteDatabase: A standard class that describes a SQLite database.

Super: keyword, means ‘include everything that is described in the parent class’. Add this word if: 1) you do not know the exact definition of a class; or 2) you wish to override a particular function using existing functionality. You do not need to add the word super if you re-write the function.

UI Kit (User Interface Kit): A standard library of interface elements; used particularly when developing apps in the iOS operating system.

Variables: a temporary container for storing data or instances of a particular class.`;

let z = t.split('\n').filter(Boolean);

z.forEach(x => {
    const m = /(?<name>.+?):(?<def>.+)/.exec(x);

    let { name, def } = m.groups;
    name = name.trim();
    def = def.trim();

    console.log(`
import React from 'react';

export const id = '${name
        .toLowerCase()
        .replace(/[^a-z\s]/gi, '')
        .replace(/\s/g, '-')}',
    name = '${name}';

export const Definition = () => <>
    ${def.slice(0, 1).toLowerCase()}${def.slice(1)}
</>;



`);
});
