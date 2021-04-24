import React from 'react';
import { Structure } from '@sc/ui';

export const id = 'function-call',
    name = 'Вызов (обращение к) функции';

export const Definition = () => <>место в коде, где мы вызываем ранее описанную функцию.</>;

export const Additional = () => (
    <>
        <p>Общий вид обращения:</p>
        <Structure>
            <pre>имя_функции(список_вводных)</pre>
        </Structure>
    </>
);
