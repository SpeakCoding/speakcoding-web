import React from 'react';

export const id = 'api',
    name = 'Сервер API (Application Programming Interface)';

export const Definition = () => (
    <>
        <em>{name}</em> - это набор классов и функций, документации, где определено,{' '}
        <b>каким образом клиентская программа общается с сервером</b>. В частности, как сервер
        получает и хранит информацию об объектах (о конкретных пользователях, состоянии их ленты и
        тд).
    </>
);
