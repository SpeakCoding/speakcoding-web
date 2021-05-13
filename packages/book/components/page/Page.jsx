import React from 'react';
import pt from 'prop-types';
import { Breadcrumbs } from '@sc/ui';
import Header from '../header';
import L from '../localize';
import Layout from '../layout';
import Navigation from '../navigation';

const Page = ({ chapter, chapters, children }) => (
    <Layout phone={typeof chapter === 'number'}>
        <Header chapter={chapter}>
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Navigation>
                        <L book='en'>All chapters</L>
                        <L book='ru'>Все главы</L>

                        <Navigation.Content>
                            <Navigation.Items>
                                {chapters.map(({ title, href }) => (
                                    <Navigation.Item key={title} href={href}>
                                        {title}
                                    </Navigation.Item>
                                ))}
                            </Navigation.Items>
                        </Navigation.Content>
                    </Navigation>
                </Breadcrumbs.Item>

                {typeof chapter === 'number' && (
                    <Breadcrumbs.Item>{chapters[chapter - 1]?.title}</Breadcrumbs.Item>
                )}
            </Breadcrumbs>
        </Header>
        {children}
    </Layout>
);
Page.propTypes = {
    chapter: pt.number,
    chapters: pt.array
};

Page.defaultProps = {
    chapter: undefined,
    chapters: []
};

export default Page;
