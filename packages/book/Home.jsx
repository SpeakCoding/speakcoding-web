import React, { useEffect } from 'react';
import { Link } from '@sc/ui';
import { useAPI, useApp } from './tools';

const Home = () => {
    const fetch = useAPI(),
        { profile } = useApp();

    const init = async () => {
        const { data } = await fetch('/courses.json', { method: 'GET' });

        // console.log(data, profile);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <Link href='/en/chapter-1'>EN | Chapter 1</Link>
            <br />
            <Link href='/en/glossary'>EN | Glossary</Link>
            <br /> <br />
            <Link href='/ru/chapter-1'>RU | Chapter 1</Link>
            <br />
            <Link href='/ru/glossary'>RU | Glossary</Link>
        </div>
    );
};
export default Home;
