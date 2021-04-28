import React from 'react';

export const id = 'interface',
    name = 'Interface';

export const Definition = () => (
    <p>
        <em>{name}</em> - a number of display files (Views & ViewControllers) relate to the
        interface.
    </p>
);

export const Additional = () => (
    <>
        <p>These files do the following:</p>
        <ul>
            <li>Visualize data received as a result of the program running;</li>
            <li>React to interaction between the user and the program;</li>
            <li>
                Describe display elements that are positioned in a particular way on the screen.
            </li>
        </ul>
    </>
);
