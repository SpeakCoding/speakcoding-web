import React from 'react';

export const id = 'sentence',
    name = 'Предложение';

export const Definition = () => (
    <>
        <em>{name}</em> - описание одного из действий, перечисленных в функции. Отделяется от
        предыдущего предложения переходом на новую строку, как если бы мы нажали ENTER в тексте.
    </>
);
