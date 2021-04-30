import React from 'react';
import pt from 'prop-types';
import { Breadcrumbs } from '@sc/ui';
import { Header, Layout, Navigation } from '../components';

const Page = ({ chapter, nav, bar, phone, children }) => (
    <Layout phone={phone}>
        <Layout.GlossaryLink href='/ru/glossary'>Глоссарий</Layout.GlossaryLink>
        <Header chapter={chapter} bar={bar}>
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Navigation>
                        Все главы
                        <Navigation.Content>
                            <Navigation.Title>Часть I Классы и Составляющие</Navigation.Title>
                            <Navigation.Items>
                                <Navigation.Item href='/ru/chapter-1'>
                                    Язык программирования. Части речи: классы и составляющие
                                </Navigation.Item>
                                <Navigation.Item>Части речи: функции</Navigation.Item>
                                <Navigation.Item>Создание и обновление объектов</Navigation.Item>
                                <Navigation.Item>Интерфейс</Navigation.Item>
                                <Navigation.Item>Репозитории и редакторы</Navigation.Item>
                                <Navigation.Item>Сложносочиненные предложения</Navigation.Item>
                                <Navigation.Item>
                                    Библиотеки и как находить то, что вам нужно
                                </Navigation.Item>
                                <Navigation.Item>Долгосрочное хранение информации</Navigation.Item>
                                <Navigation.Item>
                                    Как программы взаимодействуют друг с другом
                                </Navigation.Item>
                                <Navigation.Item>Что происходит на бекенде</Navigation.Item>
                                <Navigation.Item>Сервер</Navigation.Item>
                                <Navigation.Item>
                                    Запуск программы: где запускаются все процессы
                                </Navigation.Item>
                            </Navigation.Items>
                        </Navigation.Content>
                    </Navigation>
                </Breadcrumbs.Item>
                {nav && <Breadcrumbs.Item>{nav}</Breadcrumbs.Item>}
            </Breadcrumbs>
        </Header>
        {children}
    </Layout>
);

Page.propTypes = {
    chapter: pt.number,
    nav: pt.string,
    bar: pt.bool,
    phone: pt.bool
};

Page.defaultProps = {
    chapter: undefined,
    nav: undefined,
    bar: undefined,
    phone: undefined
};

export default Page;
