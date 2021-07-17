import React from 'react';
import { Pre } from '@sc/ui';
import { format } from './utils';
import s from './style.css';

export default () => (
    <>
        <p>
            <b>if and else (logical operators)</b>
        </p>
        <p>
            <b>if/else</b>: Used when some of the actions described in a paragraph (function) need
            to be performed only under certain conditions. If (…) checks the condition written in
            brackets, and if the result is true, then a code block is executed. In swift the
            condition does not have ( ) brackets; instead it simply appears after the keyword if and
            before the opening {'{'} bracket, after which appear the steps whose execution we wish
            to limit. These steps end with a {'}'} closing bracket. Clicking on if or on one of the
            brackets while pressing the Command key displays the strings that are limited by this
            condition.
        </p>
        <p>
            In an if condition, we can call components and their components, as well as call
            functions
        </p>
        <p>
            If performing the actions described in the condition returns a value other than 0, false
            or null, then the condition is considered to have been met. To check whether the value
            obtained matches another value, we can use the logical operator == (identical), >
            (greater than), {'<'} (less than) or != (not equal to).
        </p>
        <Pre>
            {format`
            if self.variableName == 5 {

            }`}
        </Pre>
        <p>
            In an if condition, we can immediately change the value of an existing variable or
            define a new variable (a newly defined variable will be available only during the steps
            inside the if condition). This new variable will need to be checked to ensure it meets
            the condition of not equaling 0 or being false or null.
        </p>
        <Pre>
            {format`
            if let variableName = … {

            } else {

            }`}
        </Pre>
        <p>
            The closing {'}'} bracket of the if block can be followed by the keyword else. This word
            describes what the program should do if the condition specified in the if block is not
            met. In this case, the word else is followed by curly {'{ }'} brackets containing
            alternative function steps.
        </p>
        <Pre>let variableName = condition ? valueIfTrue : valueIfFalse</Pre>
        <p>
            Having checked the condition, we now wish simply to write one value to the variable for
            when the condition is met and another for when it isn’t. To do this, we use a one-string
            entry consisting of the condition, a question ? mark, the value if true, a : colon and
            the value if false.
        </p>
        <div className={s.gap} />

        <p>
            <b>for, while (cyclical operators)</b>
        </p>
        <p>
            <b>for/while</b>: Used when the actions described in a paragraph need to be repeated a
            number of times. In Swift, the keyword while is followed by the condition in round
            brackets (or alternatively without brackets). The condition ends with an open curly{' '}
            {'{'} bracket, which is followed by a list of the steps that need to be repeated if the
            condition is true. The steps end with a closed curly {'}'} bracket.
        </p>
        <Pre>
            {format`
            while condition {

            }`}
        </Pre>
        <p>
            The words break/continue/return are used in code to denote an interruption to the list
            of actions described in the paragraph:
        </p>
        <p>
            Break: Stop running the loop altogether. <br />
            Continue: Stop the current iteration and start again. <br />
            These two are used only in loop descriptions, while return is used only for functions.
        </p>
        <p>
            <b>Try and catch</b>: Keywords written before a function to prevent the program from
            shutting down at a particular piece of code that might contain an error.
        </p>
        <Pre>
            {format`
            func functionname(inputName: InputClass){
                func subfunctionName(subfunctionInputName: SubfunctionInputClass) {
                    ... = inputName
                }
            }`}
        </Pre>
        <p>
            Inside the function definition you may see an entry resembling the function definition
            (the keyword func functionName). This means that we are defining a ‘sub’-function that
            we will use only during this function’s steps. We often need this definition to pass a
            subfunction to one of the called functions (usually the closure/completion function).
            All variables available in this called function can be used during the subfunction’s
            steps.
        </p>
        <Pre>... = variableName as OtherClassName</Pre>
        <p>
            If a variable or component is followed by the keyword as, which is in turn followed by a
            class name, this means we wish to refer to the variable or component as if it were that
            class. This can be done when this variable or component’s class is inherited from that
            class, or when a variable or component’s current class should be read as if the variable
            or component belonged to a different class.
        </p>
    </>
);
