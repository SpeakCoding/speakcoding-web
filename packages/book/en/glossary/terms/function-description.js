import React from 'react';
import { Structure } from '@sc/ui';

export const id = 'function-description',
    name = 'Function description';

export const Definition = () => (
    <>a point in the code where we describe a function’s key elements and steps in detail.</>
);

export const Additional = () => (
    <>
        <p>The general overview of the description is:</p>
        <Structure>
            <pre>
                {`function title_function(list_inputs) {
    code block with list of function actions
}`}
            </pre>
        </Structure>
    </>
);
