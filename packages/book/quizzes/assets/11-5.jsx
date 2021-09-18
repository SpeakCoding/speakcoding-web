import React from 'react';
import { Code, HL, Structure } from '@sc/ui';

const code = `
var storyReplies Set[Comment]
storyReplies = myAccount.getStories().[[???]](red)`;

const Asset = () => (
    <Structure>
        <HL.Context active>
            <Code value={code} />
        </HL.Context>
    </Structure>
);

export default Asset;
