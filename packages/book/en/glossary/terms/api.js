import React from 'react';

export const id = 'api',
    name = 'API (Application Programming Interface) server';

export const Definition = () => (
    <p>
        <em>{name}</em> - a set of classes, functions, and documentation that defines how the client
        program communicates with the server. Specifically, it describes how the server receives and
        stores information about objects (e.g. about specific users or the state of their feeds).
    </p>
);
