import React from 'react';
import { Card, Hint, Img, Section, Structure } from '@sc/ui';
import Term from '../../glossary/Term';
import img from '../../../assets/1/8-var-types-ru.svg';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h2>Использование классов</h2>
                <p>
                    Выше мы упоминали, что каждая составляющая будет принадлежать какому-то классу.
                    В самом начале, когда мы описывали класс Post в Инстаграме, некоторые слова в
                    коде дублировались. Одно из слов означало название составляющей, а второе -
                    класс, к которому она относится. Например, у класса Post есть составляющая
                    captionText, которая, в свою очередь, относится к классу Text.
                </p>
                <Structure>
                    <pre>
                        class Post <br />
                        {'  '}caption Text
                    </pre>
                </Structure>
                <p>
                    Для каждого языка программирования есть некоторые стандартные (“изначальные”)
                    классы, которые не требуют описания: string (текстовая строка), int [целое
                    число]/uint (значит unsigned, не может быть отрицательным), float (число с
                    дробной частью после запятой), byte (unit of information), etc. Их стоит
                    заучить, но также можно поискать в Интернете.
                </p>
                <p>
                    Int/uint, float и byte обычно в коде обозначаются цифрами. Если ты видишь
                    кавычки “”, то, по аналогии с прямой речью в человеческом языке, это значит, что
                    информацию в них машина будет читать как текст.
                </p>
                <p>Примеры кода:</p>
                <Structure>
                    <pre>
                        var numberOfLikes: Int; <br />
                        numberOfLikes = 0; <br />
                        <br />
                        var appName: String; <br />
                        appName = "Instagram"; <br />
                    </pre>
                </Structure>
                <p>
                    Как и в человеческом языке, многие классы объектов уже были описаны до тебя: вы
                    знаете, что такое машина, дом, стол, вам не нужно каждый раз описывать их
                    заново. Не вникая в их описание, вы можете просто дать ссылку на этот класс
                    объектов (импортировать их описание). Со временем вы начнете чувствовать, что
                    можно импортировать, а что нужно описать с нуля. Таким образом, с нуля вы будете
                    писать только те классы, которые еще не были описаны и уникальны для вашего
                    приложения.
                </p>
                <p>
                    <b>Давайте рассмотрим импорт описаний классов на примере кнопки.</b> Класс
                    Button является стандартным, часто используемым классом, который до тебя уже
                    детально описали. Поэтому тебе не нужно описывать все составляющие и функции
                    кнопок, можно импортировать стандартный класс и использовать его.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section>
        <Section>
            <Section.Main>
                <div className={s.example}>
                    <div className={s.phrase}>
                        Импортируем описание стандартного класса Button
                        <div className={s.gap} />
                    </div>
                    <pre className={s.code}>import "Button"</pre>
                    <div className={s.phrase}>
                        Создаем экземпляр класса Button и записываем для него нужные нам
                        характеристики:
                        <div className={s.gap} />
                    </div>
                    <pre className={s.code}>
                        <Hint>
                            new
                            <Hint.Tooltip>
                                Word 'new' here means that we create a new instance of a class (in
                                this case, a new button of the Button class). These key words are
                                reserved in each programming language, and you can't use this word
                                to name a different component or function. In modern code editors
                                these words are usually highlighted so you can always find them in
                                code
                            </Hint.Tooltip>
                        </Hint>{' '}
                        PostButton = new Button()
                    </pre>
                    <div className={s.phrase}>Меняем размер кнопки</div>
                    <pre className={s.code}>newPostButton.Size(500, 20)</pre>
                    <div className={s.phrase}>Меняем позицию кнопки на экране</div>
                    <pre className={s.code}>newPostButton.Position(20, 20)</pre>
                    <div className={s.phrase}>
                        Вызываем функцию кнопки, которая отобразит ее на экране
                    </div>
                    <pre className={s.code}>newPostButton.Draw()</pre>
                </div>
            </Section.Main>
        </Section>
        <Section>
            <Section.Main>
                <p>
                    Для того, чтобы завершить описание <Term id='class'>классов</Term> необходимо
                    описать, какие действия могут быть произведены с их экземплярами. Для этого в
                    коде используется третий структурный элемент, еще одна “часть” его “речи” -{' '}
                    <Term id='function'>функция</Term>, о которых мы расскажем в следующей части.
                </p>
            </Section.Main>
            <Section.Side />
        </Section>
        <Card mode='skill'>
            <h2>Новый скил добавлен!</h2>
            Теперь ты сможешь сделать структурное описание своей будущей программы более подробным и
            осмысленным. Для всех составляющих, которые ты опишешь, ты сможешь добавить класс и
            название, в полной мере описав “скелет” будущего продукта.
        </Card>
    </>
);
