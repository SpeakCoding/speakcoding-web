import React from 'react';
import { Hint, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h1>Libraries</h1>
                <p>
                    <Term id='library' tooltip>
                        Libraries
                    </Term>{' '}
                    are collections of descriptions of classes as well as their components and
                    functions.
                </p>
                <p>
                    When you download tools to work in a particular language, they are usually
                    accompanied by language libraries containing standard classes; these save you
                    having to search for these classes online. The process of working with libraries
                    began to develop with the appearance of large numbers of{' '}
                    <Hint>
                        tools
                        <Hint.Tooltip>
                            These tools are accessible via the command string (terminal) or code
                            editor.
                        </Hint.Tooltip>
                    </Hint>{' '}
                    that removed the need to search for libraries yourself. It then became possible
                    to control library versions (as libraries are constantly being updated). Later
                    toolkits allowed programmers to put links to remote libraries in code (the
                    version used is usually indicated in the code). Libraries can be compiled or
                    uncompiled; the difference is that some of the functions described in compiled
                    libraries can be hidden and be the intellectual property of the developer
                    company. You can still work with these functions, you just can’t alter their
                    source code.
                </p>
                <p>
                    <b>SDK</b>: Standard development kit, a library of libraries stored online that
                    can be downloaded. To work with it, you need to download the SDK and indicate
                    the compiler that contains the library (locally on the device you’re using to
                    write the code). Some SDKs are compiled, meaning you can’t just work with one
                    library – instead you need to download the whole SDK.
                </p>
                <p>
                    As you know, one example of a library used to create Instagram is{' '}
                    <Term id='ui-kit'>UIKit</Term>. This contains numerous classes that describe
                    standard interface elements such as buttons, text blocks, and pictures. The
                    components and functions are already described that display the necessary pixels
                    on screen for each of these classes.
                </p>
                <p>
                    How did we know which classes to choose in order to work with standard interface
                    elements? If you type ‘swift standard class button’ into your browser, the first
                    link you see will take you to the Apple Developer Documentation site and a page
                    dedicated to the UIButton class in the <Term id='ui-kit'>UIKit</Term> standard
                    library. This page contains a detailed description of the entire class, as well
                    as its components and functions. There are many libraries online offering their
                    own specific ways to display interface elements, and you may find these more
                    suitable for a particular task. But in the case of our app, most tasks can
                    easily be performed using standard libraries.
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={16}
            href='https://docs.google.com/forms/d/e/1FAIpQLSccnNDQY3quO1vTIS_P_8fr7IA1pHetcIZnUoUNnLGAeNCQTg/viewform?usp=sf_link'
        >
            Search for a UIKit and standard interface classes
        </Assignment>
    </>
);
