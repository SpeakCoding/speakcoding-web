import React from 'react';

export const id = 'endpoint',
    name = 'Endpoint';

export const Definition = () => (
    <p>
        <em>{name}</em> - part of an http request to a server, the end of a URL by which data can be
        received. This is a call to a file path (route): the endpoint determines how to receive and
        return client data.
    </p>
);
