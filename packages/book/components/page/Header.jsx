import React from 'react';
import pt from 'prop-types';
import { Breadcrumbs } from '@sc/ui';
import Header from '../header';
import L from '../localize';
import Navigation from '../navigation';
import { useApp } from '../../tools';
import s from './page.css';

const PageHeader = ({ chapter, chapters }) => {
    const { profile } = useApp(),
        title = typeof chapter === 'number' && chapters[chapter - 1]?.title;

    return (
        <Header chapter={chapter}>
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <Navigation>
                        <L book='en'>All chapters</L>
                        <L book='ru'>Все главы</L>

                        <Navigation.Content>
                            <Navigation.Items>
                                {chapters.map(item => (
                                    <Navigation.Item
                                        key={item.title}
                                        href={item.href}
                                        disabled={!item.free && !profile.is_paid}
                                    >
                                        {item.prefix && (
                                            <span className={s.prefix}>{item.prefix}.&nbsp;</span>
                                        )}
                                        {item.title}
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
