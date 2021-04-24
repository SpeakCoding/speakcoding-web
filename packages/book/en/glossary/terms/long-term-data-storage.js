import React from 'react';

export const id = 'long-term-data-storage',
    name = 'Long-term data storage';

export const Definition = () => (
    <>
        data storage that a program can access to ‘restore’ any requisite information about the
        program’s most recent state. For example, in Instagram we store information about the latest
        posts that have received comments.
    </>
);

export const Additional = () => (
    <ol>
        <li>
            We can store data in a <b>local storage-client</b> (a telephone or computer’s memory).
            This data is stored locally and is accessible only on that particular device; when the
            app is closed, we don’t lose the data.
        </li>
        <li>
            We can store the data <b>on a server or in the ‘cloud’</b>. This avoids losing it along
            with the device, and allows us to share it with other users if need be.
        </li>
    </ol>
);
