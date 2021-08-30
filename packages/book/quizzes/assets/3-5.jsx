import React from 'react';
import { Code, Structure } from '@sc/ui';

const code = `
func editCaption(newCaption Text) {
    currentCaption = newCaption;
    post.edit.changecaption(newCaption);
}`;

const Asset = () => (
    <Structure>
        <Code value={code} />
    </Structure>
);

export default Asset;
