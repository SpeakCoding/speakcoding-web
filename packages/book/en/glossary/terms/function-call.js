import React from 'react';
import { Structure } from '@sc/ui';

export const id = 'function-call',
    name = 'Function call';

export const Definition = () => (
    <p>
        <em>{name}</em> - a point in the code where we call a previously described function.
    </p>
);

export const Additional = () => (
    <>
        <p>The general overview of the call is:</p>
        <Structure>
            <pre>title_function(list_inputs)</pre>
        </Structure>
    </>
);
