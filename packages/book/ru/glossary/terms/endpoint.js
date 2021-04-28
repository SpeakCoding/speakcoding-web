import React from 'react';

export const id = 'endpoint',
    name = 'Endpoint';

export const Definition = () => (
    <>
        <em>{name}</em> (конечная точка) - часть http запроса на сервер, окончание url, по которому
        вы можете получить данные. Это обращение в пути к файлу (route): endpoint определяет, как
        принять и вернуть данные клиенту.
    </>
);
