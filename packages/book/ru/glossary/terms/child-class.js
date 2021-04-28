import React from 'react';

export const id = 'child-class:',
    name = 'Дочерний класс';

export const Definition = () => (
    <>
        <em>{name}</em> наследует все функции материнского класса, но в его описание могут быть
        добавлены дополнительные свойства, составляющие и функции.
    </>
);
