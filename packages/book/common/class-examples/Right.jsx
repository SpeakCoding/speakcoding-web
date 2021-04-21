import React from 'react';
import { Tabs } from '@sc/ui';
import PHP from './PHP';
import Python from './Python';
import Ruby from './Ruby';

const Right = () => (
    <Tabs value='php'>
        <Tabs.Controls top='56px'>
            <Tabs.Button value='php'>PHP</Tabs.Button>
            <Tabs.Button value='python'>Python</Tabs.Button>
            <Tabs.Button value='ruby'>Ruby</Tabs.Button>
        </Tabs.Controls>
        <Tabs.Content tab='php'>
            <PHP />
        </Tabs.Content>
        <Tabs.Content tab='python'>
            <Python />
        </Tabs.Content>
        <Tabs.Content tab='ruby'>
            <Ruby />
        </Tabs.Content>
    </Tabs>
);

export default Right;
