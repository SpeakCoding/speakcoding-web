import React from 'react';
import pt from 'prop-types';
import { Breadcrumbs } from '@sc/ui';
import { Header, Layout, Navigation } from '../components';

const Page = ({ nav, bar, phone, children }) => (
    <Layout phone={phone}>
        <Layout.GlossaryLink href='/en/glossary'>Glossary</Layout.GlossaryLink>
        <Header bar={bar}>
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Navigation>
                        All chapters
                        <Navigation.Content>
                            <Navigation.Title>
                                Introduction to Software Engineering
                            </Navigation.Title>
                            <Navigation.Items>
                                <Navigation.Item href='/en/chapter-1'>
                                    Coding is a language. Parts of speech: classes and components
                                </Navigation.Item>
                                <Navigation.Item>Parts of speech: functions</Navigation.Item>
                                <Navigation.Item>Create and update objects</Navigation.Item>
                                <Navigation.Item>Interface</Navigation.Item>
                                <Navigation.Item>Repositories and editors</Navigation.Item>
                                <Navigation.Item>Complex sentences</Navigation.Item>
                                <Navigation.Item>
                                    Libraries and how to find what you need
                                </Navigation.Item>
                                <Navigation.Item>Long-term information storage</Navigation.Item>
                                <Navigation.Item>
                                    How programs interact with each other
                                </Navigation.Item>
                                <Navigation.Item>What’s happening on the backend</Navigation.Item>
                                <Navigation.Item>Server</Navigation.Item>
                                <Navigation.Item>
                                    Launch your program: where does all processes start
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
    nav: pt.string,
    bar: pt.bool,
    phone: pt.bool
};

Page.defaultProps = {
    nav: undefined,
    bar: undefined,
    phone: undefined
};

export default Page;
