import React from 'react';
import { Code, HL, Structure } from '@sc/ui';

const code = `
var mutedSubscriptions Set[User]
mutedSubscriptions = myAccount.[[???]](red).muted()`;

const Asset = () => (
    <Structure>
        <HL.Context active>
            <Code value={code} />
        </HL.Context>
    </Structure>
);

export default Asset;
