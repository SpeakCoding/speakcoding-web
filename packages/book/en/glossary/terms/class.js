import React from 'react';

export const id = 'class',
    name = 'Class';

export const Definition = () => (
    <p>
        <em>{name}</em> - an element, a template in which we give an overview of the composition of
        all instances of this class. For example, all Instagram posts belong to the Post class; when
        creating the Post class, we list in its definition all of the elements that constitute each
        and every post, such as users, pictures, and captions.
    </p>
);
