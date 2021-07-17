import React from 'react';
import pt from 'prop-types';
import { Breadcrumbs } from '@sc/ui';
import Header from '../header';
import L from '../localize';
import Navigation from '../navigation';
import s from './page.css';

const PageHeader = ({ chapter, chapters }) => {
    const title = typeof chapter === 'number' && chapters[chapter - 1]?.title;

    return (
        <Header chapter={chapter}>
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Navigation>
                        <L book='en'>All chapters</L>
                        <L book='ru'>Все главы</L>

                        <Navigation.Content>
                            <Navigation.Items>
                                {chapters.map(({ prefix, title: itemTitle, href }) => (
                                    <Navigation.Item key={itemTitle} href={href}>
                                        {prefix && (
                                            <span className={s.prefix}>{prefix}.&nbsp;</span>
                                        )}
                                        {itemTitle}
                                    </Navigation.Item>
                                ))}
                            </Navigation.Items>
                        </Navigation.Content>
                    </Navigation>
                </Breadcrumbs.Item>

                {title && <Breadcrumbs.Item>{title}</Breadcrumbs.Item>}
            </Breadcrumbs>
        </Header>
    );
};
PageHeader.propTypes = {
    chapter: pt.number,
    chapters: pt.array
};

PageHeader.defaultProps = {
    chapter: undefined,
    chapters: []
};

export default PageHeader;
