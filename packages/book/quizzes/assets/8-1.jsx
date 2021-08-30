import React from 'react';
import { Img, Structure } from '@sc/ui';
import { OpenNewTab } from '../blocks';
import img from './8-1.png';

const Asset = () => (
    <OpenNewTab url={img}>
        <Structure>
            <Img src={img} />
        </Structure>
    </OpenNewTab>
);

export default Asset;
