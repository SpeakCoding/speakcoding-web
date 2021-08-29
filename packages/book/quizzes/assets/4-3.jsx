import React from 'react';
import { Code, HL, Structure } from '@sc/ui';

const code = `
[[User]](steel-blue)(
    [[inputUsername Text]](orange),
    [[inputEmail Text]](orange),
    [[inputPassword Text]](orange)
) {
    [[self.username = inputUsername;]](red)
    [[self.password = inputPassword;]](red)
    [[??]](red)
}`;

const Asset = () => (
    <Structure>
        <HL.Context active>
            <Code value={code} />
        </HL.Context>
    </Structure>
);

export default Asset;
