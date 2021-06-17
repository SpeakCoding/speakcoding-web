import React from 'react';
import { Page } from '../components';

const chapters = [
    {
        title: 'Coding is a language. Parts of speech: classes and components',
        href: '/en/chapter-1'
    },
    { title: 'Parts of speech: functions', href: '/en/chapter-2' },
    { title: 'Create and update objects', href: '/en/chapter-3' },
    { title: 'Interface', href: '/en/chapter-4' },
    { title: 'Repositories and editors', href: '/en/chapter-5' },
    { title: 'Complex sentences', href: '/en/chapter-6' },
    { title: 'Libraries and how to find what you need', href: '/en/chapter-7' },
    { title: 'Long-term information storage' },
    { title: 'How programs interact with each other' },
    { title: 'What’s happening on the backend' },
    { title: 'Server' },
    { title: 'Launch your program: where does all processes start' }
];

const EnPage = props => <Page {...props} chapters={chapters} />;

EnPage.Title = Page.Title;

export default EnPage;
