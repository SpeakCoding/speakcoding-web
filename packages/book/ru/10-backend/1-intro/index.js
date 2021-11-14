import React from 'react';
import { Section } from '@sc/ui';
import Intro from './Intro';
import Tables from './Tables';
import { Assignment } from '../../../components';

export default () => (
    <>
        <Section>
            <Intro />
            <Tables />
        </Section>

        <Assignment id='ru/26' />

        <Section>
            <Section.Main narrow>
                <p>
                    Теперь, когда вы знаете, как создаются таблицы на сервере, давайте поймем, как
                    выглядит описание структурных классов (основных сущностей нашей программы,
                    models), и чем оно отличается от описания этих же классов на клиенте.
                </p>
            </Section.Main>
        </Section>
    </>
);
