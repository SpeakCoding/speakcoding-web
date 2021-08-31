import React from 'react';
import { Section } from '@sc/ui';
import { QuizNew as Quiz } from '../../../components';
import Example1 from './Example1';
import Example2 from './Example2';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Сложноподчиненные предложения</h1>
                    <p>
                        Вы помните, что в коде одна строка обычно равна одному действию. В главе о
                        функциях мы договорились считать это предложениями. Но бывают и более
                        сложные предложения, которые описывают несколько действий сразу.
                    </p>
                    <p>
                        Логика записи сложного предложения в коде зачастую обратна тому, как мы
                        формулируем мысли в речи, но похожа на сложноподчиненное предложение.
                    </p>
                </Section.Main>
            </Section.Block>
            <Example1 />
            <Example2 />
        </Section>

        <Quiz
            id='ru/11'
            number={11}
            href='https://docs.google.com/forms/d/e/1FAIpQLScAJ-rZMOyc0lZrMthND09A_BYDOEb8hH-gHP0zpPW88GD19A/viewform?usp=sf_link'
        >
            Сложноподчиненные предложения
        </Quiz>
    </>
);
