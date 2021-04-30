import React from 'react';
import { HL, Structure, Tag } from '@sc/ui';
import { L } from '../../components';
import s from './example.css';

const Left = () => (
    <>
        <div className={s.writing}>
            <Tag>
                <L book='en'>In writing</L>
                <L book='ru'>Описание текстом</L>
            </Tag>
        </div>
        <div className={s.structure}>
            {/* prettier-ignore */}
            <Structure bordered={false}>
                <HL color='orange' label='c1-b1-1'>Feed</HL>
                <ul>
                    <li><HL color='light-sky-blue' label='c1-b1-2'>Set of Posts</HL></li>
                </ul>
                <HL color='green' label='c1-b1-3'>Post</HL>
                <ul>
                    <li><HL color='wheat' label='c1-b1-4'>User</HL></li>
                    <li><HL color='aquamarine' label='c1-b1-5'>Image / Set of images / Video</HL></li>
                    <li><HL color='grey' label='c1-b1-6'>Caption</HL></li>
                    <li><HL color='green-yellow' label='c1-b1-7'>Set of comments</HL></li>
                    <li><HL color='steel-blue' label='c1-b1-8'>Set of likes</HL></li>
                    <li><HL color='green-yellow' label='c1-b1-9'>Time</HL></li>
                </ul>
                <HL color='aquamarine' label='c1-b1-10'>Image</HL>
                <ul>
                    <li><HL color='aquamarine' label='c1-b1-10'>Image Link</HL></li>
                    <li><HL color='aquamarine' label='c1-b1-10'>Set of tags</HL></li>
                </ul>
                <HL color='wheat' label='c1-b1-11'>User</HL>
                <ul>
                    <li><HL color='wheat' label='c1-b1-11'>Username</HL></li>
                    <li><HL color='wheat' label='c1-b1-11'>Profile Picture or Latest Story Image</HL></li>
                    <li><HL color='wheat' label='c1-b1-11'>Image</HL></li>
                </ul>
            </Structure>
        </div>
    </>
);

export default Left;
