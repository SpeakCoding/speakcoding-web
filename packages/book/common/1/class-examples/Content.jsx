import React from 'react';
import pt from 'prop-types';
import { Code, HL, Structure, Tabs } from '@sc/ui';
import * as code from './code';
import s from './example.css';

const Content = ({ tab }) => (
    <Tabs.Content tab={tab}>
        <div className={s.row}>
            {/* prettier-ignore */}
            <Structure bordered={false}>
                <HL color='orange' label='c1-b1-1'>Feed</HL>
                <ul>
                    <li><HL color='light-sky-blue' label='c1-b1-2'>Set of Posts</HL></li>
                </ul>
            </Structure>
            <div>
                <Code value={code[tab][0]} />
            </div>
        </div>

        <div className={s.row}>
            {/* prettier-ignore */}
            <Structure bordered={false}>
                <HL color='green' label='c1-b1-3'>Post</HL>
                <ul>
                    <li><HL color='wheat' label='c1-b1-4'>User</HL></li>
                    <li><HL color='green-yellow' label='c1-b1-9'>Time</HL></li>
                    <li><HL color='aquamarine' label='c1-b1-5'>Image / Set of images / Video</HL></li>
                    <li><HL color='steel-blue' label='c1-b1-8'>Set of likes</HL></li>
                    <li><HL color='grey' label='c1-b1-6'>Caption</HL></li>
                    <li><HL color='plum' label='c1-b1-7'>Set of comments</HL></li>
                </ul>
            </Structure>
            <div>
                <Code value={code[tab][1]} />
            </div>
        </div>

        <div className={s.row}>
            {/* prettier-ignore */}
            <Structure bordered={false}>
                <HL color='aquamarine' label='c1-b1-10'>Image</HL>
                <ul>
                    <li><HL color='red' label='c1-b1-11'>Image Link</HL></li>
                    <li><HL color='blue' label='c1-b1-12'>Set of tags</HL></li>
                </ul>
            </Structure>
            <div>
                <Code value={code[tab][2]} />
            </div>
        </div>

        <div className={s.row}>
            {/* prettier-ignore */}
            <Structure bordered={false}>
                <HL color='wheat' label='c1-b1-13'>User</HL>
                <ul>
                    <li><HL color='turquoise' label='c1-b1-14'>Username</HL></li>
                    <li><HL color='sandy-brown' label='c1-b1-15'>Profile Picture or Latest Story Image</HL></li>
                    <li><HL color='powder-blue' label='c1-b1-16'>Image</HL></li>
                </ul>
            </Structure>
            <div>
                <Code value={code[tab][3]} />
            </div>
        </div>
    </Tabs.Content>
);

Content.propTypes = {
    tab: pt.string.isRequired
};

export default Content;
