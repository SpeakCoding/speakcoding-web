import React from 'react';
import { Page } from '../components';

const chapters = [
    {
        title: 'Язык программирования. Части речи: классы и составляющие',
        href: '/ru/chapter-1'
    },
    { title: 'Части речи: функции', href: '/ru/chapter-2' },
    { title: 'Создание и обновление объектов', href: '/ru/chapter-3' },
    { title: 'Интерфейс', href: '/ru/chapter-4' },
    { title: 'Репозитории и редакторы', href: '/ru/chapter-5' },
    { title: 'Сложносочиненные предложения' },
    { title: 'Библиотеки и как находить то, что вам нужно' },
    { title: 'Долгосрочное хранение информации' },
    { title: 'Как программы взаимодействуют друг с другом' },
    { title: 'Что происходит на бекенде' },
    { title: 'Сервер' },
    { title: 'Запуск программы: где запускаются все процессы' }
];

const RuPage = props => <Page {...props} chapters={chapters} />;

RuPage.Title = Page.Title;

export default RuPage;
