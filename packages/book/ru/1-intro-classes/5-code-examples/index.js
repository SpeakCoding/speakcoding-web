import React from 'react';
import { Section } from '@sc/ui';
import { Skill } from '../../../components';
import Example from '../../../common/1/class-examples';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <p>
                    !Не обращайте внимания на слова, которых вы не знаете. Просто заметьте как текст
                    из описания превращается в код!
                </p>
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <Example />
            </Section.Main>
        </Section>
        <Section>
            <Section.Main narrow>
                <p>Текст → Структура → Описание через код</p>
                <p>ЭТО И ЕСТЬ ПРОГРАММИРОВАНИЕ!</p>
            </Section.Main>
        </Section>
        <Skill>
            То, чему ты сейчас научился пригодится тебе для составления технических спецификаций
            продукта
        </Skill>
    </>
);
