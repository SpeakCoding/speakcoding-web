import React from 'react';

export const id = 'database',
    name = 'База данных';

export const Definition = () => (
    <>
        <em>{name}</em> - это особенный вид хранения данных, вы можете думать о ней как о таблице
        Excel. Для каждого столбца такой таблицы определяется тип данных (например, число, текстовая
        строка, и т.д.).
    </>
);
