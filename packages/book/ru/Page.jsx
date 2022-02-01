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
    { prefix: 4, title: 'Интерфейс', href: '/ru/chapter-4' },
    { prefix: 5, title: 'Репозитории и редакторы', href: '/ru/chapter-5' },
    { prefix: 6, title: 'Библиотеки и как находить то, что вам нужно', href: '/ru/chapter-6' },
    { prefix: 7, title: 'Сложносочиненные предложения', href: '/ru/chapter-7' },
    { prefix: 8, title: 'Долгосрочное хранение информации', href: '/ru/chapter-8' },
    { prefix: 9, title: 'Как программы взаимодействуют друг с другом', href: '/ru/chapter-9' },
    { prefix: 10, title: 'Что происходит на бекенде', href: '/ru/chapter-10' },
    { prefix: 11, title: 'Сервер', href: '/ru/chapter-11' },
    { prefix: 12, title: 'Запуск программы: где запускаются все процессы', href: '/ru/chapter-12' },
    { number: 12, prefix: 'Бонус', title: 'Справочник', href: '/ru/handbook' }
];

const RuPage = props => <Page {...props} chapters={chapters} />;

RuPage.Title = Page.Title;

export default RuPage;
