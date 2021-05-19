import React from 'react';
import { Tabs, Tag } from '@sc/ui';
import { L } from '../../components';
import Content from './Content';
import s from './example.css';

const Examples = () => (
    <Tabs value='php'>
        <Tabs.Controls top='56px'>
            <div className={s.row}>
                <div>
                    <Tag>
                        <L book='en'>In writing</L>
                        <L book='ru'>Описание текстом</L>
                    </Tag>
                </div>
                <div className={s.tabs}>
                    <Tabs.Button value='php'>PHP</Tabs.Button>
                    <Tabs.Button value='python'>Python</Tabs.Button>
                    <Tabs.Button value='ruby'>Ruby</Tabs.Button>
                </div>
            </div>
        </Tabs.Controls>

        <div className={s.gap} />

        <Content tab='php' />
        <Content tab='python' />
        <Content tab='ruby' />
    </Tabs>
);

export default Examples;
