import React from 'react';
import { Grid, Hint, Img, Pre, Section } from '@sc/ui';
import { Skill } from '../../../components';
import Term from '../../glossary/Term';
import img from './var-types.svg';

const code1 = `
class Post
    caption Text`;

const code2 = `
var numberOfLikes: Int;
numberOfLikes = 0;

var appName: String;
appName = "Instagram";`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h2>Использование классов</h2>
                    <p>
                        Выше мы упоминали, что каждая составляющая будет принадлежать какому-то
                        классу. В самом начале, когда мы описывали класс Post в Инстаграме,
                        некоторые слова в коде дублировались. Одно из слов означало название
                        составляющей, а второе - класс, к которому она относится. Например, у класса
                        Post есть составляющая captionText, которая, в свою очередь, относится к
                        классу Text.
                    </p>
                    <Pre value={code1} />
                    <p>
                        Для каждого языка программирования есть некоторые стандартные
                        (“изначальные”) классы, которые не требуют описания: string (текстовая
                        строка), int [целое число]/uint (значит unsigned, не может быть
                        отрицательным), float (число с дробной частью после запятой), byte (unit of
                        information), etc. Их стоит заучить, но также можно поискать в Интернете.
                    </p>
                    <p>
                        Int/uint, float и byte обычно в коде обозначаются цифрами. Если вы видите
                        кавычки “”, то, по аналогии с прямой речью в человеческом языке, это значит,
                        что информацию в них машина будет читать как текст.
                    </p>
                    <p>
                        <b>Примеры кода:</b>
                    </p>
                    <Pre value={code2} />
                    <p>
                        Как и в человеческом языке, многие классы объектов уже были описаны до вас:
                        вы знаете, что такое машина, дом, стол, вам не нужно каждый раз описывать их
                        заново. Не вникая в их описание, вы можете просто дать ссылку на этот класс
                        объектов (импортировать их описание). Со временем вы начнете чувствовать,
                        что можно импортировать, а что нужно описать с нуля. Таким образом, с нуля
                        вы будете писать только те классы, которые еще не были описаны и уникальны
                        для вашего приложения.
                    </p>
                    <p>
                        <b>Давайте рассмотрим импорт описаний классов на примере кнопки.</b>
                    </p>
                    <p>
                        Класс Button является стандартным, часто используемым классом, который до
                        вас уже детально описали. Поэтому вам не нужно описывать все составляющие и
                        функции кнопок, можно импортировать стандартный класс и использовать его.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right bottom'>
                            <b>Описание функции словами</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это выглядит в коде</b>
                        </Grid.Cell>

                        <Grid.Cell border='right'>
                            Импортируем описание стандартного класса Button
                        </Grid.Cell>
                        <Grid.Cell>
                            <pre>import "Button"</pre>
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            Создаем экземпляр класса Button и записываем для него нужные нам
                            характеристики:
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
                            <pre>
                                <Hint>
                                    new
                                    <Hint.Tooltip>
                                        Слово new означает, что мы создаем новый экземпляр класса (в
                                        данном случае, новую кнопку, Button). Эти ключевые слова
                                        "заняты" для каждого языка, ты не можешь так называть
                                        переменные/функции и т.д. Но в современных редакторах для
                                        работы с кодом они подсвечиваются, поэтому ты всегда сможешь
                                        найти их в коде
                                    </Hint.Tooltip>
                                </Hint>{' '}
                                PostButton = new Button()
                            </pre>
                        </Grid.Cell>

                        <Grid.Cell border='right' dense>
                            Меняем размер кнопки
                        </Grid.Cell>
                        <Grid.Cell dense>
                            <pre>newPostButton.Size(500, 20)</pre>
                        </Grid.Cell>

                        <Grid.Cell border='right' dense>
                            Меняем позицию кнопки на экране
                        </Grid.Cell>
                        <Grid.Cell dense>
                            <pre>newPostButton.Position(20, 20)</pre>
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            Вызываем функцию кнопки, которая отобразит ее на экране
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
                            <pre>newPostButton.Draw()</pre>
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Для того, чтобы завершить описание <Term id='class'>классов</Term>{' '}
                        необходимо описать, какие действия могут быть произведены с их экземплярами.
                        Для этого в коде используется третий структурный элемент, еще одна “часть”
                        его “речи” -{' '}
                        <Term id='function' tooltip>
                            функция
                        </Term>
                        , о которых мы расскажем в следующей части.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Skill>
            Теперь вы можете сделать структурное описание своей будущей программы более подробным и
            осмысленным. Для всех составляющих вы можете добавить класс и название, в полной мере
            описав “скелет” будущего продукта.
        </Skill>
    </>
);
