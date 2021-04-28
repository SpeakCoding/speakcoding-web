import React from 'react';

export const id = 'parent-class',
    name = 'Материнский класс';

export const Definition = () => (
    <>
        <em>{name}</em> - класс, от которого наследуются другие классы.
    </>
);
