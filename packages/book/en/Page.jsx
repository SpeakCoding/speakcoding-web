import React from 'react';
import { Page } from '../components';

const chapters = [
    {
        prefix: 1,
        title: 'Coding is a language. Parts of speech: classes and components',
        href: '/en/chapter-1',
        free: true
    },
    { prefix: 2, title: 'Parts of speech: functions', href: '/en/chapter-2' },
    { prefix: 3, title: 'Create and update objects', href: '/en/chapter-3' },
    { prefix: 4, title: 'Interface', href: '/en/chapter-4' },
    { prefix: 5, title: 'Repositories and editors', href: '/en/chapter-5' },
    { prefix: 6, title: 'Complex sentences', href: '/en/chapter-6' },
    {
        prefix: 7,
        title: 'Libraries and how to find what you need',
        href: '/en/chapter-7'
    },
    { prefix: 8, title: 'Long-term information storage', href: '/en/chapter-8' },
    {
        prefix: 9,
        title: 'How programs interact with each other',
        href: '/en/chapter-9'
    },
    {
        prefix: 10,
        title: 'What’s happening on the backend',
        href: '/en/chapter-10',
        disabled: true
    },
    { prefix: 11, title: 'Server', href: '/en/chapter-11', disabled: true },
    {
        prefix: 12,
        title: 'Launch your program: where does all processes start',
        href: '/en/chapter-12',
        disabled: true
    },
    { prefix: 'Bonus', title: 'Handbook', href: '/en/handbook', disabled: true }
];

const EnPage = props => <Page {...props} chapters={chapters} />;

EnPage.Title = Page.Title;

export default EnPage;
