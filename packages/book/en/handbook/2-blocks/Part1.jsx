import React from 'react';
import { Pre } from '@sc/ui';
import { format } from './utils';
import s from './style.css';

export default () => (
    <>
        <p>
            <b>Importing a library</b>
        </p>
        <Pre>import LibraryName</Pre>
        <p>
            The library import consists of the word ‘import’ followed by the title of a library
            (each word in the library title is capitalized). This allows us in the current file to
            use all classes described in this library.
        </p>
        <div className={s.gap} />

        <p>
            <b>Class definition (description)</b>
        </p>
        <Pre>class ClassName {'{}'}</Pre>
        <p>
            The word ‘class’ appears, followed by the class title (each word in the class title is
            capitalized). The body of the class is written in curly {'{ }'} brackets. Clicking on
            the class name or one of the {'{ }'} brackets while pressing the Command key (or the
            Windows/Start key on laptop keyboards) displays all strings relating to the description.
        </p>
        <Pre>class ClassName : Inherited_Class, Another_Inherited_Class {'{}'}</Pre>
        <p>
            The classes from which the current class is inherited are listed after a colon and
            before the {'{'} brackets, with each class being separated by a comma (the current class
            also inherits all of these classes’ components and functions).
        </p>
        <p>
            <b>Extension</b>: A keyword denoting an extension to a class we have already described
            that adds further functions.
        </p>
        <p>
            <b>selector</b> in Swift: A class containing a function. It is used when you wish to
            pass a function as a function parameter (as an object).
        </p>
        <div className={s.gap} />

        <p>
            <b>Class components</b>
        </p>
        <Pre>var componentName: ComponentClassName</Pre>
        <p>
            The keyword <b>var</b> or <b>let</b>, followed by the component name, lowercased; each
            subsequent word in the title is capitalized, followed by a colon and this component’s
            class name, capitalized (each word in the title is also capitalized). Classes from
            imported libraries in XCode are marked in dark blue, while classes described in one of
            our code files are marked in dark green.
        </p>
        <p>
            Each component is written on its own line. Components are usually listed at the very
            start of the class description, before the function description, though not always:
            sometimes they can be found in other parts of the file as well.
        </p>
        <Pre>var componentName: [ComponentClassName]</Pre>
        <p>
            If a component class is a set, then in place of the component class we write square [ ]
            brackets, inside which we write this set’s element class.
        </p>
        <Pre>private var componentName: ComponentClassName</Pre>
        <p>
            One or more additional keywords may appear before the keyword <b>var</b> or <b>let</b>:
        </p>
        <p>
            <b>public/private</b>: Private denotes that this component can be read or changed only
            from functions of this class. The opposite of private is when either no keywords or the
            keyword public appear before the variable.
        </p>
        <Pre>@IBOutlet var componentName: ComponentClassName</Pre>
        <p>
            <b>@IBOutlet</b>: This denotes that a component is linked to a particular part of the
            interface in an .xib file. The @ symbol usually appears before the component, and while
            it has no programming significance, it is used by the compiler. When the compiler sees
            this symbol, it visits the file where these components’ parameters are defined. It then
            selects these parameters according to the parameters that we described in the visual
            editor. IBOutlet has another idiosyncrasy: when listing components, we are actually
            calling the corresponding classes and creating instances of these classes.
        </p>
        <Pre>weak var componentName: ComponentClassName</Pre>
        <p>
            <b>weak</b>: You may well find yourself needing to add this word when you encounter an
            error or conflict. This word is also generally associated with the compiler reading code
            and with the program being optimized. As we have discussed, to ensure that the program
            runs properly, we need to delete objects that are created while it is running and that
            we do not reuse in other parts of the code. Programmers used to have to do this
            themselves, though modern languages usually do it automatically. If the compiler returns
            a read error, you may need to check whether values are deleted automatically, and to
            read what the variable should be in your case; there are many articles explaining the
            particulars of using weak (though you are unlikely to use this knowledge in reading
            code).
        </p>
        <Pre>static var componentName: ComponentClassName</Pre>
        <p>
            <b>class</b> (specifically in combination with the var class) and <b>static</b>: a class
            component that does not relate to individual instances of the class, but that has the
            same (often initially defined) value for all instances of that class. We can refer to
            this component without having instances in which it is used. These components usually
            store standard (default) values for a class instance, and these values can be used
            throughout this class’s entire file.
        </p>
        <Pre>var componentName: ComponentClassName!</Pre>
        <p>
            The component class may be followed by an exclamation ! mark or a question ? mark. When
            you see ! <u>after the class</u>, this means that the component field must contain a
            value and that the value must be defined. Meanwhile a ? means that the component field
            can be empty.
        </p>
        <Pre>var componentName: ComponentClassName = defaultValue</Pre>
        <p>
            A component can be given a default value. This is done by putting an equals = sign after
            the name of the component and its class, and indicating the requisite value.
        </p>
        <Pre>var componentName = defaultValue</Pre>
        <p>
            In this case the class name can be omitted (not written) as it is determined
            categorically by the value class following the equals sign.
        </p>
        <Pre>
            {format`
            class var componentName: ComponentClassName {
                get {

                }
            }`}
        </Pre>
        <p>
            Default values can also be defined by a sequence block in curly {'{ }'} brackets. Every
            time this component’s value is read, the steps are performed that are described in the
            block with the keyword <b>get</b>. The value that is returned is the value that should
            be returned (either with the keyword return, or simply the value received in the last
            line of the block [after the keyword return]).
        </p>
        <div className={s.gap} />
    </>
);
