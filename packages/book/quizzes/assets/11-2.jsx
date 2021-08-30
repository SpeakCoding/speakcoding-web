import React from 'react';
import { Code, Structure } from '@sc/ui';

const code = `
var lastPostLikes Set[Like]
lastPostLikes = myAccount.getLastPost().getLikes()`;

const Asset = () => (
    <Structure>
        <Code value={code} />
    </Structure>
);

export default Asset;
