import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import { Link } from '@sc/ui';
import s from './blocks.css';

const options = {
    overrides: {
        a: {
            component: Link,
            props: { blank: true }
        }
    }
};

const Markdown = ({ children }) => (
    <div className={s.markdown}>
        <MarkdownToJSX options={options}>{children}</MarkdownToJSX>
    </div>
);

export default Markdown;
