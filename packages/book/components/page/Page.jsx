import React from 'react';
import pt from 'prop-types';
import Header from './Header';
import Layout from '../layout';
import Title from './Title';

const Page = ({ chapter, chapters, phone, children }) => {
    const title = typeof chapter === 'number' && chapters[chapter - 1]?.title;

    return (
        <Layout phone={phone}>
            {title && <Title>{`${chapter}. ${title}`}</Title>}
            <Header chapter={chapter} chapters={chapters} />
            {children}
        </Layout>
    );
};

Page.propTypes = {
    chapter: pt.number,
    chapters: pt.array,
    phone: pt.bool
};

Page.defaultProps = {
    chapter: undefined,
    chapters: [],
    phone: true
};

export default Page;
