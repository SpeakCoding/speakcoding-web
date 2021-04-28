import React from 'react';

export const id = 'child-class:',
    name = 'Child class';

export const Definition = () => (
    <p>
        <em>{name}</em> - a class that inherits all of the parent class’s defining attributes.
        Additional properties, components, and functions can also be added to its definition.
    </p>
);
