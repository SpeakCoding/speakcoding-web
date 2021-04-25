import React from 'react';
import pt from 'prop-types';
import { Breadcrumbs } from '@sc/ui';
import { Header, Layout, Navigation } from '../components';

const Page = ({ nav, children }) => (
    <Layout>
        <Header>
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Navigation>
                        Все главы
                        <Navigation.Content>
                            <Navigation.Title>Часть I Классы и Составляющие</Navigation.Title>
                            <Navigation.Item href='/ru/chapter-1'>Вводное слово</Navigation.Item>
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
    nav: pt.string
};

Page.defaultProps = {
    nav: undefined
};

export default Page;
