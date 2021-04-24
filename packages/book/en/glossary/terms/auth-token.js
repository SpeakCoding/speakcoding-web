import React from 'react';

export const id = 'auth-token',
    name = 'Authorization key/token';

export const Definition = () => (
    <>
        a key that the server creates when the user’s login and password, which have come from the
        client, are checked against the information in the server’s database. The token is used in
        the authorization procedure to avoid needing to input the login and password with every
        request to the server.
    </>
);
