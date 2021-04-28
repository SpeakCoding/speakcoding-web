import React from 'react';

export const id = 'instance',
    name = 'Экземпляр класса/ Instance of a class';

export const Definition = () => (
    <>
        <em>{name}</em> - конкретный экземпляр какой-то из сущностей, которые мы создаем при
        написании программы. Экземпляром класса Постов будет являться любой конкретный пост.
    </>
);
