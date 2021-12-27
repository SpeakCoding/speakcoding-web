import React from 'react';
import { Pre } from '@sc/ui';
import { format } from './utils';
import s from './style.css';

export default () => (
    <>
        <p>
            <b>Class initialization and the class instance creation function.</b>
        </p>
        <Pre>
            {format`
            class ClassName {
                func init(inputName: InputClass, ...) {

                } 
            }`}
        </Pre>
        <p>In Swift, the initialization function is called init.</p>
        <Pre>ClassName(inputName: InputValue, ...)</Pre>
        <p>
            To create a class instance, we use the class name (remembering that it is capitalized),
            then after the brackets we list the inputs (as we do when calling functions). Unlike
            when defining a class, init does not contain the keyword class, and it has a list of
            inputs.
        </p>
        <Pre>... = ClassName(inputName: InputValue, ...)</Pre>
        <p>
            When creating instances, you’ll come across equal signs on the right-hand side, as we
            wish to save the instances in a variable or as a component of an instance of a
            particular class
        </p>
        <Pre>{`{{functionname}}(t:func)(inputFunctionName: ClassName(...))`}</Pre>
        <p>or when indicating the value of one of the function components.</p>
        <div className={s.gap} />

        <p>
            <b>Function steps</b>
        </p>
        <p>Each string is a separate step.</p>
        <Pre>
            {format`
            self.componentName

            self.functionname()`}
        </Pre>
        <p>
            Class functions are executed for specific class instances (with the exception of
            static). To refer to components or functions of a specific instance, we can write their
            names; alternatively, to make the code more readable, we can use the keyword self (after
            a period), then the name of the class component/function.
        </p>
        <Pre>... = self</Pre>
        <p>
            A self reference with no period following it references the instance of the class for
            which the function is called.
        </p>
        <Pre>
            {format`
            func functionname(inputName: InputClass) {
                ... = inputName
            }`}
        </Pre>
        <p>Input functions are referred to by name.</p>
        <Pre>var variableName</Pre>
        <p>
            Variables are recognizable by the keywords var or let, followed by the variable name
            (which starts lowercased, then every subsequent word in the title has a capital letter).
        </p>
        <Pre>var variableName = ...</Pre>
        <p>In the same string, the variable value may be specified after the equals sign.</p>
        <Pre>self.componentName = ...</Pre>
        <p>
            To change a component or variable value, we write its name followed by an equals sign
            and its new value.
        </p>
        <p>
            If we use square [ ] brackets after specifying the value, it means we are creating a
            class set, and inside these [ ] brackets we list the elements of this set.
        </p>
        <Pre>
            {format`
            self.componentName.subComponentName

            self.componentName.subFunctionname ()`}
        </Pre>
        <p>
            If the component/variable (both of which are instances of a particular class) is
            followed by a . period, which is in turn followed by the component or function title,
            then we are in fact referring to this component/variable’s ‘sub’-components (in order to
            obtain or change their values).
        </p>
        <Pre>self.functionname().subComponentName</Pre>
        <p>
            If the function returns a value, then we can immediately refer to the ‘sub’-components
            of that value’s class.
        </p>
        <Pre>{`{{functionname}}(t:func)(inputName: self.functionname().subComponentName)`}</Pre>
        <p>
            You may remember from the chapter on complex sentences that this sequence can be
            continuous.
        </p>
        <p>
            This sequence can be defined as an input or function if the value returned by the
            sequence belongs to the same class that the function input belongs to.
        </p>
        <Pre>self.componentName?.subComponentName</Pre>
        <p>
            Within this sequence you may come across question marks and exclamation marks. If we
            wish to refer to a subcomponent or subfunction of a particular component that may be
            empty, then we need to place a ? (to tell the compiler to start by checking whether the
            component is empty). If we are sure that the component needs to be defined at this stage
            of program execution, then we can insert an exclamation ! mark.
        </p>
        <Pre>
            {format`
            let variableName = 1

            self.functionname(inputName: 1.5)

            self.variableName = "Text Should be here"`}
        </Pre>
        <p>
            A variable value can be a number, in which case just a number will be written in the
            code. If the value is a text string, then it will be defined in quote " " marks.
        </p>
        <Pre>"You have \(self.comments.count()) comments"</Pre>
        <p>
            The changing part can be added inside the static string. To do this, we write " "
            brackets where we wish to place the changing value, and inside them we write a backslash
            \ and an open ( bracket, after which we insert the requisite value and a closed )
            bracket.
        </p>
        <Pre>
            {format`
            var variableName = false

            self.functionname(inputName: nil)`}
        </Pre>
        <p>
            A variable value can also be true/false (Bool class). Or it can be nil, an empty value.{' '}
            <b>Bool</b> means that we should receive a yes/no answer when executing this step (1 or
            0, true/false).
        </p>
        <Pre>var variableName = ClassName.staticComponentName</Pre>
        <p>
            If a class name is followed immediately by a period and the name of a component
            function, then we are referring to a static component or function. As they are common to
            all class instances, we can refer to just a class rather than to an instance.
        </p>
        <Pre>var variableName = ClassName.EnumName.enumElementName</Pre>
        <p>
            <b>enum</b> may also be specified within a class. Enum is used when a numerical value
            stores a meaningful list (for example rainbow colors are stored as numbers rather than
            color names). While you see the values assigned to these numbers in the code, the
            compiler reads them as numbers. If we are using enum, then after the class name comes a
            period, after which we refer to the enum name, then after another period we refer to one
            of enum’s elements.
        </p>
        <div className={s.gap} />
    </>
);
