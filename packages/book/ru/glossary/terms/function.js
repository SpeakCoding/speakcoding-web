import React from 'react';

export const id = 'function',
    name = 'Функция';

export const Definition = () => (
    <>
        <em>{name}</em> - описание того, какие действия можно делать с экземплярами классов.
        Например, при описании класса Постов вы можете задать функцию, которая позволит изменить
        текст этого Поста, или сообщит, сколько раз этот пост был сохранен.
    </>
);

export const Additional = () => (
    <>
        <p>
            У каждой функции, будь она внутри описания какого-то класса или сама по себе, будут
            следующие элементы описания:
        </p>
        <ul>
            <li>Название</li>
            <li>Класс, к которому она относится</li>
            <li>
                Последовательности/список операций, которые совершаются при выполнении этой функции
                (их также называют телом функции)
            </li>
            <li>Вводные, которые необходимы для выполнения этой функции</li>
            <li>Класс значения, которое она передает (число/текст/и тд)</li>
        </ul>
    </>
);
