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
                        All chapters
                        <Navigation.Content>
                            <Navigation.Title>
                                Introduction to Software Engineering
                            </Navigation.Title>
                            <Navigation.Item href='/en/chapter-1'>Introduction</Navigation.Item>
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
