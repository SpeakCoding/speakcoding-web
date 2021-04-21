import React from 'react';

export const id = 'function',
    name = 'Function';

export const Definition = () => (
    <>
        a definition of the actions that can be performed with instances of a class. For example,
        when defining the Post class, you may assign a function that allows the user to change the
        text of the Post or to display how many times that post has been saved.
    </>
);

export const Additional = () => (
    <>
        <p>
            Each function, whether it appears within a component class or independently, will
            include the following elements in its definition:
        </p>
        <ul>
            <li>Title</li>
            <li>Class to which it belongs</li>
            <li>Sequences/list of operations executed when this function is performed</li>
            <li>Arguments essential to the function being performed</li>
            <li>Value class that it returns (e.g. number/text)</li>
        </ul>
    </>
);
