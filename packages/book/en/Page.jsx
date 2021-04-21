import React from 'react';
import { Header, Layout } from '../components';

const Page = ({ children }) => (
    <Layout>
        <Header>Breadcrumbs EN</Header>
        {children}
    </Layout>
);

export default Page;
