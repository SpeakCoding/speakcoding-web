import React from 'react';

export const id = 'property',
    name = 'Характеристика';

export const Definition = () => (
    <>
        <em>{name}</em> - качество/признак, составляющий отличительную особенность класса. Например,
        у нас есть зеленая книга, и ее цвет - это ее характеристика. У класса Книга есть
        характеристика Цвет. В программировании при описании классов их характеристики записывают
        так же, как их составляющие. То есть при составлении описания Книги, мы скажем это так,
        будто у Книги есть составляющая Цвет класса Цвета.
    </>
);
