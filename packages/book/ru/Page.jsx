import React from 'react';
import { Page } from '../components';

const chapters = [
    {
        prefix: 1,
        title: 'Язык программирования. Части речи: классы и составляющие',
        href: '/ru/chapter-1',
        free: true
    },
    { prefix: 2, title: 'Части речи: функции', href: '/ru/chapter-2' },
    { prefix: 3, title: 'Создание и обновление объектов', href: '/ru/chapter-3' },
    { prefix: 4, title: 'Интерфейс', href: '/ru/chapter-4', disabled: true },
    { prefix: 5, title: 'Репозитории и редакторы', href: '/ru/chapter-5', disabled: true },
    { prefix: 6, title: 'Сложносочиненные предложения', href: '/ru/chapter-6', disabled: true },
    {
        prefix: 7,
        title: 'Библиотеки и как находить то, что вам нужно',
        href: '/ru/chapter-7',
        disabled: true
    },
    { prefix: 8, title: 'Долгосрочное хранение информации', href: '/ru/chapter-8', disabled: true },
    {
        prefix: 9,
        title: 'Как программы взаимодействуют друг с другом',
        href: '/ru/chapter-9',
        disabled: true
    },
    { prefix: 10, title: 'Что происходит на бекенде', href: '/ru/chapter-10', disabled: true },
    { prefix: 11, title: 'Сервер', href: '/ru/chapter-11', disabled: true },
    {
        prefix: 12,
        title: 'Запуск программы: где запускаются все процессы',
        href: '/ru/chapter-12',
        disabled: true
    },
    { prefix: 'Бонус', title: 'Справочник', href: '/ru/handbook', disabled: true }
];

const RuPage = props => <Page {...props} chapters={chapters} />;

RuPage.Title = Page.Title;

export default RuPage;
