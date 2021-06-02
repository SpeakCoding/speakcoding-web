import React from 'react';
import { HL, Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Term from '../../glossary/Term';
import Slides, { useSlide } from '../../../common/2/function-definition-slides';
import s from './style.css';

const Example = () => {
    const slide = useSlide();

    return (
        <div className={s.example}>
            Функция класса{' '}
            <HL color='green' active={slide >= 2}>
                Пост
            </HL>
            , которую мы назовем{' '}
            <HL color='orange' active={slide >= 1}>
                “Добавить Лайк”
            </HL>
            , которая если ей{' '}
            <HL color='aquamarine' active={slide >= 4}>
                указать пользователя
            </HL>{' '}
            <HL color='plum' active={slide >= 3} inline={5}>
                создает лайк от этого пользователя и добавляет его в список лайков этого поста, и
                сообщает
            </HL>{' '}
            <HL color='light-sky-blue' active={slide >= 5}>
                число
            </HL>
            —
            <HL color='plum' active={slide >= 3}>
                новое количество лайков
            </HL>
            .
        </div>
    );
};
export default () => (
    <>
        <Slides>
            <Section>
                <Section.Main>
                    <h2>Описание (определение) функции</h2>
                    <p>Описание всех функций состоит из:</p>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='orange' active>
                                Название
                            </HL>
                        </div>
                        Ты сам можешь выбрать удобное название для функции, оно не повлияет на ее
                        исполнение
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='green' active>
                                Класс
                            </HL>
                            , к которому она относится
                        </div>
                        Есть функции, которые не привязаны к классу и будут переиспользованы в
                        тексте дальше.
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='plum' active>
                                Последовательность/список операций
                            </HL>
                            , которые совершается при выполнении этой функции для экземпляра
                        </div>
                        Последовательность/список операций ничем не отличается от того, как если бы
                        вы описывали подробный план мероприятия, просто она написана языком, который
                        вам не знаком
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='aquamarine' active>
                                Вводные
                            </HL>
                            , которые необходимы для выполнения этой функции
                        </div>
                        Функция может не требовать вводных и тогда этой части не будет в описании
                    </Slides.Item>
                    <Slides.Item>
                        <div className={s.message}>
                            <HL color='light-sky-blue' active>
                                Класс значения
                            </HL>
                            , которое она передает
                        </div>
                        Например число или текст “ответ да”.
                    </Slides.Item>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Example />
                    </Section.Sticky>
                </Section.Side>
            </Section>
        </Slides>

        <Section>
            <Section.Block>
                <Section.Main>
                    <p>
                        Есть функции, которые не передают/возвращают никакого значения в результате
                        своего исполнения. Это значит, что она изменяет состояние экземпляра, но нам
                        не нужно его запоминать для дальнейшей работы программы.
                    </p>
                </Section.Main>
                <Section.Side />
            </Section.Block>
            <Section.Block>
                <Section.Main>
                    <div className={s.noReturn}>
                        <div className={s.label}>
                            Пример функции, в результате выполнения которой нам не нужно возвращать
                            никакого значения
                        </div>
                        <div>
                            Функция класса{' '}
                            <HL color='green' active>
                                Пост
                            </HL>
                            , которую мы назовем{' '}
                            <HL color='orange' active>
                                “Архивировать Пост”
                            </HL>
                            , которой мы ничего не передаем,{' '}
                            <HL color='plum' active>
                                архивирует конкретный пост
                            </HL>
                            .
                        </div>
                    </div>
                </Section.Main>
            </Section.Block>
        </Section>

        <Section>
            <Section.Main>
                <p>
                    Таким образом, у каждой <Term id='function'>функции</Term>, будь она внутри
                    описания какого-то <Term id='class'>класса</Term> или сама по себе, будут
                    следующие элементы описания:
                </p>
                <ul>
                    <li>
                        <HL color='orange' active>
                            Название
                        </HL>
                    </li>
                    <li>
                        <HL color='green' active>
                            Класс к которому она относится
                        </HL>
                    </li>
                    <li>
                        <HL color='plum' active inline={3}>
                            Последовательность/список операций, которые она совершает
                        </HL>
                    </li>
                    <li>
                        <HL color='aquamarine' active>
                            Вводные
                        </HL>
                    </li>
                    <li>
                        <HL color='light-sky-blue' active>
                            Значение, которое она передает
                        </HL>
                    </li>
                </ul>
            </Section.Main>
            <Section.Side />
        </Section>

        <Section>
            <Section.Main>
                <h2>Обращение к /вызов функции</h2>
                <p>
                    После того как мы описали функцию, мы можем обратиться к ней/вызвать ее в разных
                    местах кода. Вызывая функцию, мы передаем в нее все данные, которые она требует
                    как вводные. Вызов функции означает, что мы хотим, чтобы в этом месте кода
                    программа исполнила действия, описанные в функции.
                </p>
            </Section.Main>
            <Section.Side />
        </Section>

        <Quiz
            number={3}
            href='https://docs.google.com/forms/d/e/1FAIpQLScefPJNRkiqL9gZEMlNK7I17lkLEo-LsehIvDGUIsVsQ-jc7A/viewform?usp=sf_link'
        >
            Определение и описание функций
        </Quiz>
    </>
);
