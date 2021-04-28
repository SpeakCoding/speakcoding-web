import React from 'react';
import { HL, Structure } from '@sc/ui';

export const id = 'component',
    name = 'Component';

export const Definition = () => (
    <p>
        <em>{name}</em> - an element of a class’s definition, part of the composition of every
        instance of the class. For example, all comments consist of a username and the text of the
        comment itself. The text and username are components of the Comments class.
    </p>
);

export const Additional = () => (
    <>
        <p>
            Each component has a{' '}
            <HL color='powder-blue' label='g-class-1'>
                title
            </HL>{' '}
            and{' '}
            <HL color='red' label='g-class-2'>
                class
            </HL>{' '}
            to which it belongs.
        </p>
        <p>Example:</p>
        <Structure>
            <pre>
                Period class <br />
                {'    '}component{' '}
                <HL color='powder-blue' label='g-class-1'>
                    startDate
                </HL>{' '}
                <HL color='red' label='g-class-2'>
                    Date
                </HL>{' '}
                <br />
                {'    '}component{' '}
                <HL color='powder-blue' label='g-class-1'>
                    endDate
                </HL>{' '}
                <HL color='red' label='g-class-2'>
                    Date
                </HL>
            </pre>
        </Structure>
        <p>
            Another example from Instagram is the User class. One of its components is the Profile
            Picture, which in turn belongs to the Picture class.
        </p>
    </>
);
