import React from 'react';
import { Pre } from '@sc/ui';
import { format } from './utils';
import s from './style.css';

export default () => (
    <>
        <p>
            <b>Function description</b>
        </p>
        <Pre>
            {format`
            func functionname (input, otherInput) -> RetValueClass {
            
            }`}
        </Pre>
        <p>
            A function description generally consists of the keyword func, followed by the function
            title (starts with a lowercase letter, then every subsequent word in the title is
            capitalized). After this the inputs are listed in round ( ) brackets and separated by
            commas. This is followed by -> and the returned value’s class. Then the function steps
            are described in {'{ }'}.
        </p>
        <Pre>
            {format`
            func functionname () -> RetValueClass {

            }`}
        </Pre>
        <p>The brackets are empty if no inputs are needed.</p>
        <Pre>
            {format`
            func functionname (input, otherInput) {

            }`}
        </Pre>
        <p>
            If the function does not return a value, then -> and a returned value class are not
            written.
        </p>
        <Pre>
            {format`
            func functionname (inputName: InputClass, otherInputName: OtherInputClass) {

            }`}
        </Pre>
        <p>
            Each input is given a name (which is lowercase, then every subsequent word in the title
            is capitalized), followed by a colon and the input class’s title.
        </p>
        <p>Additional keywords can be written before the keyword func (separated by spaces).</p>
        <Pre>
            {format`
            override func functionname() {
                super.functionname()
                ...
            }`}
        </Pre>
        <p>
            <b>Override</b>: A keyword indicating that although the function whose name it appears
            before already exists in the ‘parent’ class, it has been rewritten in our class, and
            therefore it looks and works differently. When reading code, the compiler compares the
            original name of the function and its components with the name and components that it
            sees in the redefined function. So the compiler interprets a function with a new set of
            inputs as a new function rather than one that replaces the parent function.
        </p>
        <p>
            If we wish to add more function-execution steps while leaving the original actions in
            place, then in the child function we write a string containing the keyword <b>super</b>{' '}
            (sometimes along with the function name, separated by a period). This keyword calls all
            the actions defined in the parent-class function.
        </p>
        <Pre>
            {format`
            required func functionname() {

            }`}
        </Pre>
        <p>
            <b>Required</b>: This means that in the current (inheriting) class, we need to define
            the inherited function that is specified in the class from which we inherit it
        </p>
        <p>
            <b>public/private</b>: Like with components, private means that this function can be
            read or changed only inside a particular class. The opposite of private is when either
            no keywords, or the word public, appear before the function.
        </p>
        <p>
            <b>@IBAction</b>: This means that this function defines events and corresponding actions
            relating to the standard interface element described in the .xib file.
        </p>
        <div className={s.gap} />

        <p>
            <b>Calling functions</b>
        </p>
        <Pre>{`{{functionname}}(t:func)(inputName: valueForInput)`}</Pre>
        <p>
            A function is called by writing the function name with no keyword before it, after which
            the values (instances of the requisite classes) for these inputs (the value itself or a
            variable containing the value) are listed inside round ( ) brackets and separated by
            commas. In swift, when we call a function, we need to assign to each of these inputs
            both the name and value that we are passing.
        </p>
        <Pre>
            {format`
            func functionname(addInputName inputName: InputClass){

            }

            {{functionname}}(t:func)(addInputName: valueForInput)`}
        </Pre>
        <p>
            By default, each of these inputs has the same name and value that we specified when we
            described the function. However, in swift, we can assign each input an additional name.
            When we do so, it is this additional name that is used to call functions when listing
            inputs. This name appears before the main component name, after a space.
        </p>
        <Pre>
            {format`
            func functionname(_ inputName: InputClass){

            }

            {{functionname}}(t:func)(valueForInput)`}
        </Pre>
        <p>
            We can write an _ underscore in place of the additional name. In this case you don’t
            need to write the input name when calling the function for it.
        </p>
        <div className={s.gap} />
    </>
);
