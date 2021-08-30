import React from 'react';
import { Code, HL, Structure } from '@sc/ui';

const code = `
func addLike(user User) {
    var newLike [[???]](orange)
    newLike = new Like(user);
    self.likes.add(newLike);
}`;

const Asset = () => (
    <Structure>
        <HL.Context active>
            <Code value={code} />
        </HL.Context>
    </Structure>
);

export default Asset;
