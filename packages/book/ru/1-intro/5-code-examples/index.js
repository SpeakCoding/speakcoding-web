import React from 'react';
import { Achievement, Section } from '@sc/ui';
import Example from '../../../common/class-examples';

export default () => (
    <>
        <Section>
            <Section.Main>
                <Example />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>Текст → Структура → Описание через код</p>
                <p>ЭТО И ЕСТЬ ПРОГРАММИРОВАНИЕ!</p>
                <Achievement>
                    <h2>New skill!</h2>
                    То, чему ты сейчас научился пригодится тебе для составления технических
                    спецификаций продукта.
                </Achievement>
            </Section.Main>
            <Section.Side />
        </Section>
    </>
);
