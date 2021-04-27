import React from 'react';
import { Card, Section } from '@sc/ui';
import Example from '../../../common/class-examples';

export default () => (
    <>
        <Section>
            <Section.Main>
                <p>
                    !Не обращайте внимания на слова, которых вы не знаете. Просто заметьте как текст
                    из описания превращается в код!
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Section>
            <Section.Main>
                <Example label='Описание текстом' />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>Текст → Структура → Описание через код</p>
                <p>ЭТО И ЕСТЬ ПРОГРАММИРОВАНИЕ!</p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Card mode='skill'>
            <h2>Новый скил добавлен!</h2>
            То, чему ты сейчас научился пригодится тебе для составления технических спецификаций
            продукта
        </Card>
    </>
);
