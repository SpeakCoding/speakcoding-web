import React from 'react';
import { Code, HL, Structure } from '@sc/ui';

const code = `
var commentReply [[???]](red)
commentReply = myLastPost.getComment().last.getReply()`;

const Asset = () => (
    <Structure>
        <HL.Context active>
            <Code value={code} />
        </HL.Context>
    </Structure>
);

export default Asset;
