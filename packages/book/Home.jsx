import React from 'react';
import { Link } from '@sc/ui';

const Home = () => (
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

export default Home;
