import React from 'react';
import { Structure } from '@sc/ui';

export const id = 'function-description',
    name = 'Описание функции';

export const Definition = () => (
    <>
        <em>{name}</em> - место в коде, где мы подробно описываем основные элементы и шаги функции
        по формуле:
    </>
);

export const Additional = () => (
    <>
        <Structure>
            <pre>
                {`function имя_функции(список_вводных) {
    блок кода со списком действий функции
}`}
            </pre>
        </Structure>
    </>
);
