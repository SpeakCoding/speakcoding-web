import React from 'react';
import { Code, Structure } from '@sc/ui';

const code = `
var lastFollower User
lastFollower = myAccount.getFollowers().last.getUserName()`;

const Asset = () => (
    <Structure>
        <Code value={code} />
    </Structure>
);

export default Asset;
