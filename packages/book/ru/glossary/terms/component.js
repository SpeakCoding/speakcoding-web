import React from 'react';
import { HL, Structure } from '@sc/ui';

export const id = 'component',
    name = 'Составляющая';

export const Definition = () => (
    <>
        элемент описания класса, то из чего будут состоять все конкретные экземпляры класса. Прим.:
        все комментарии будут состоять из имени пользователя и текста самого комментария. Текст и
        имя пользователя - составляющие класса Комментарий.
    </>
);

export const Additional = () => (
    <>
        <p>
            У составляющей есть{' '}
            <HL color='powder-blue' label='g-class-1'>
                название
            </HL>{' '}
            и{' '}
            <HL color='red' label='g-class-2'>
                класс
            </HL>
            , к которому она относится.
        </p>
        <p>Пример:</p>
        <Structure>
            <pre>
                класс Period <br />
                {'    '}составляющая{' '}
                <HL color='powder-blue' label='g-class-1'>
                    startDate
                </HL>{' '}
                <HL color='red' label='g-class-2'>
                    Date
                </HL>{' '}
                <br />
                {'    '}составляющая{' '}
                <HL color='powder-blue' label='g-class-1'>
                    endDate
                </HL>{' '}
                <HL color='red' label='g-class-2'>
                    Date
                </HL>
            </pre>
        </Structure>
        <p>
            Еще один пример из Инстраграма. Возьмем класс - User. Одна из его составляющих - Profile
            Picture, которая, в свою очередь, относится к классу Pictures.
        </p>
    </>
);
