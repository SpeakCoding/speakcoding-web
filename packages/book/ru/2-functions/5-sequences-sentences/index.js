import React from 'react';
import { Callout, Lottie, Section } from '@sc/ui';
import { Assignment, Skill } from '../../../components';
import Term from '../../glossary/Term';
import animationData from './img-lottie.json';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Последовательность действий функции. Предложения</h1>
                <p>
                    Обычно в описании последовательности действий <Term id='function'>функции</Term>{' '}
                    в коде одна строка равна одному конкретному действию. Если проводить параллель с
                    текстом, можно думать об этом как об одном{' '}
                    <Term id='sentence' tooltip>
                        предложении
                    </Term>
                    . В языках программирования, которые появились 20-30 лет назад,{' '}
                    <Term id='sentence'>предложения</Term> отделялись друг от друга ; в более
                    современных языках для этого используется просто новая строка, как если бы мы
                    нажали ENTER в тексте.
                </p>
                <p>
                    Как и с любым человеческим языком, чем лучше вы им владеете, тем более сложные
                    языковые конструкции вы умеете составлять. Вы можете думать об этом, как о
                    разнице между простыми и сложносочиненными предложениями, позже мы поговорим об
                    этом подробнее.
                </p>
                <Callout>
                    <b>ПОВТОРИМ:</b> <br />В ходе выполнения программы, которую мы пишем, функции
                    позволяют нам создавать экземпляры классов (конкретные посты/профили
                    пользователей и т.д) и менять их характеристики (делать профили пользователей
                    открытыми или приватными, менять тексты постов и т.д).
                </Callout>
            </Section.Main>
            <Section.Side>
                <Lottie.IntersectionBox>
                    <Section.Sticky>
                        <Lottie animationData={animationData} />
                    </Section.Sticky>
                </Lottie.IntersectionBox>
            </Section.Side>
        </Section>

        <Skill>
            Понимание функций позволит тебе подумать и описать, как классы, которые вы определили в
            структуре, могут взаимодействовать между собой, какие действия можно производить с этими
            классами, как можно изменять их экземпляры.
        </Skill>

        <Assignment id='ru/3' />
    </>
);
