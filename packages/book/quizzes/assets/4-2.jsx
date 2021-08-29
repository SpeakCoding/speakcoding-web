import React from 'react';
import { Code, HL, Structure } from '@sc/ui';

const code = `
class [[Post]](steel-blue) {
    [[user]](light-sky-blue)            [[User]](light-sky-blue)
    [[time]](aquamarine)            [[Time]](aquamarine)
    [[image]](green-yellow)           [[Image]](green-yellow)
    [[setOfImages]](green)     [[[]Image]](green)
    [[video]](orange)           [[Video]](orange)
    [[setOfLikes]](sandy-brown)      [[[]Like]](sandy-brown)
    [[caption]](red)         [[Text]](red)
    [[setOfComments]](plum)   [[[]Comment]](plum)
}`;

const Asset = () => (
    <Structure>
        <HL.Context active>
            <Code value={code} />
        </HL.Context>
    </Structure>
);

export default Asset;
