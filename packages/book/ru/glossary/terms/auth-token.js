import React from 'react';

export const id = 'auth-token',
    name = 'Ключ/токен авторизации';

export const Definition = () => (
    <>
        <em>{name}</em> - ключ, который сервер создает в момент сверки логина и пароля пользователя,
        пришедших от клиента, с информацией в своей базе данных. Токен используется в процедуре
        авторизации, чтобы не вводить логин и пароль при каждом запросе на сервер.
    </>
);
