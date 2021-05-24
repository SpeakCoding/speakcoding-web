import React from 'react';
import { Lottie, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import animationData from './img-lottie.json';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>Пример записи описания функции в коде</h2>
                <p>Общий вид описания:</p>
                <p>
                    function имя_функции(список_вводных) {'{'} <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;блок кода со списком действий функции <br />
                    {'}'}
                </p>
                <div className={s.slide}>
                    <div>
                        Хотя функции на разных языках записываются по-разному, отличительная черта,
                        которая позволит вам находить их в тексте - это круглые скобки ().
                    </div>
                </div>
                <div className={s.slide}>
                    <div>
                        Они всегда идут после названия функции, которое вы таким образом тоже можете
                        легко обнаружить в тексте кода.
                    </div>
                </div>
                <div className={s.slide}>
                    <div>
                        В зависимости от языка перед названием часто пишется ключевое слово
                        func/function/def/;. Иногда перед названием ничего не пишется, но по
                        структуре блока вы можете понять, что перед вами функция.
                    </div>
                </div>
                <div className={s.slide}>
                    <div>
                        После названия в круглых скобках, через запятую, будет написано перечисление
                        вводных и их классов.
                    </div>
                </div>
                <div className={s.slide}>
                    <div>
                        После круглых скобок будут идти строки определяющие последовательность
                        действий функции. Этот блок кода в фигурных скобках называют еще телом
                        функции. Обычно его легко выделить относительно остального текста кода
                    </div>
                    <ul>
                        <li>
                            В большинстве языков он обрамлен фигурными скобками {'{ }'}, которые
                            закрываются сразу после закрытия круглых скобок
                        </li>
                        <li>
                            В некоторых языках после закрытия круглых скобок стоит двоеточие и с
                            новой строки с отступом описывается последовательность действий
                        </li>
                    </ul>
                </div>
                <div className={s.slide}>
                    <div>
                        Чаще всего <Term id='function'>функции</Term> относятся к конкретному{' '}
                        <Term id='class'>классу</Term> (прим. Функция “Редактировать текст поста”
                        относится к классу Post), поэтому сама <Term id='function'>функция</Term>{' '}
                        записывается там же, где мы описываем сам <Term id='class'>класс</Term>.
                        Нужно помнить об этом при написании <Term id='function'>функций</Term>.
                    </div>
                </div>
            </Section.Main>
            <Section.Side>
                <Lottie.ScrollBox>
                    <Section.Sticky>
                        <Lottie animationData={animationData} endFramesOffset={50} />
                    </Section.Sticky>
                </Lottie.ScrollBox>
            </Section.Side>
        </Section>
    </>
);