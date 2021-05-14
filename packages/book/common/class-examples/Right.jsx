import React from 'react';
import { Tabs } from '@sc/ui';
import PHP from './PHP';
import Python from './Python';
import Ruby from './Ruby';
import s from './example.css';

const Right = () => (
    <Tabs value='php'>
        <Tabs.Controls top='56px'>
            <Tabs.Button value='php'>PHP</Tabs.Button>
            <Tabs.Button value='python'>Python</Tabs.Button>
            <Tabs.Button value='ruby'>Ruby</Tabs.Button>
        </Tabs.Controls>
        <Tabs.Content tab='php'>
            <div className={s.tab}>
                <PHP />
            </div>
        </Tabs.Content>
        <Tabs.Content tab='python'>
            <div className={s.tab}>
                <Python />
            </div>
        </Tabs.Content>
        <Tabs.Content tab='ruby'>
            <div className={s.tab}>
                <Ruby />
            </div>
        </Tabs.Content>
    </Tabs>
);

export default Right;
