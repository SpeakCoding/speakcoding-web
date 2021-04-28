import React from 'react';

export const id = 'standard-classes',
    name = 'Стандартные (“изначальные”) классы';

export const Definition = () => (
    <>
        <em>{name}</em> - те, которые не требуют описания: string (текстовая строка), int [целая
        цифра]/uint (значит unsigned, не может быть отрицательным), float (цифра с дробной частью
        после запятой), byte (unit of information), etc. Их стоит заучить, но также можно
        прогуглить. Для создания новых экземпляров этих классов не требуется запускать функцию
        создания, а можно напрямую в кода написать соответвующее значение.
    </>
);
