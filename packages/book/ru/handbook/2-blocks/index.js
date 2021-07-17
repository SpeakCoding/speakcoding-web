import React from 'react';
import { Section } from '@sc/ui';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';

export default () => (
    <Section>
        <Section.Main narrow>
            <h2>Синтаксис и новые слова в коде</h2>
            <Part1 />
            <Part2 />
            <Part3 />
            <Part4 />
        </Section.Main>
    </Section>
);
