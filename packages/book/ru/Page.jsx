import React from 'react';
import { Header, Layout } from '../components';

const Page = ({ children }) => (
    <Layout>
        <Header>Breadcrumbs RU</Header>
        {children}
    </Layout>
);

export default Page;
