import React from 'react';
import { Code, Grid, HL, Icon, Section } from '@sc/ui';
import Post from '../../../common/2/class-post';
import s from './style.css';

const codeFn1 = `
func (post* [[Post]](orange _ 1)) [[Add Like]](green _ 1)([[user User]](aquamarine _ 1)) { 
    [[new_like = new Like(user)]](plum _ 1)
    [[self.setOfLikes.add(new_like)]](plum _ 1)
}`;

const codeFn2 = `
func [[NumberOfLikes]](green _ 1)() [[Number]](light-sky-blue _ 1) { 
    [[number_of_likes = self.setOfLikes.length]](plum _ 1 3)
    [[return]](plum _ 1) [[number_of_likes]](light-sky-blue _ 1)
}`;

export default () => (
    <Section>
        <Section.Main>
            <h2>Примеры описания функции</h2>
            <Grid cols='25% 25% 50%'>
                <Grid.Cell border='right bottom'>
                    <b>Структура описания функции</b>
                </Grid.Cell>
                <Grid.Cell border='right bottom'>
                    <b>Описание функции текстом</b>
                </Grid.Cell>
                <Grid.Cell border='bottom'>
                    <b>Описание функции кодом</b>
                </Grid.Cell>

                <Grid.Cell border='right' />
                <Grid.Cell border='right'>
                    <div className={s.hint}>
                        <span>Функции описываются там же, где класс</span>
                        <Icon name='arrow-right' size={24} />
                    </div>
                </Grid.Cell>
                <Grid.Cell>
                    <Post />
                    <pre>...</pre>
                </Grid.Cell>

                <Grid.Cell border='right'>
                    <ul>
                        <li>
                            <HL color='green' active>
                                Название
                            </HL>
                        </li>
                        <li>
                            <HL color='orange' active>
                                Класс
                            </HL>
                            , к которому она относится
                        </li>
                        <li>
                            <HL color='plum' active inline={3}>
                                Последовательность/список операций
                            </HL>
                            , которые она совершает
                        </li>
                        <li>
                            <HL color='aquamarine' active>
                                Вводные
                            </HL>
                        </li>
                        <li>
                            <HL color='light-sky-blue' active>
                                Значение
                            </HL>
                            , которое она передает
                        </li>
                    </ul>
                </Grid.Cell>
                <Grid.Cell border='right'>
                    Функция класса{' '}
                    <HL color='orange' active inline={3}>
                        Пост
                    </HL>
                    , которую мы назовем{' '}
                    <HL color='green' active inline={3}>
                        “Добавить Лайк”
                    </HL>
                    , которая если ей{' '}
                    <HL color='aquamarine' active inline={3}>
                        указать пользователя
                    </HL>
                    ,{' '}
                    <HL color='plum' active inline={3}>
                        создает лайк от этого пользователя и добавляет его в список лайков этого
                        поста, и ничего не возвращает
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={codeFn1} />
                </Grid.Cell>

                <Grid.Cell border='right' />
                <Grid.Cell border='right'>
                    Или функция класса{' '}
                    <HL color='orange' active inline={3}>
                        Пост
                    </HL>
                    , которую мы назовем{' '}
                    <HL color='green' active inline={3}>
                        “Количество Лайков”
                    </HL>
                    ,{' '}
                    <HL color='aquamarine' active inline={3}>
                        которой не указывается никаких вводных
                    </HL>
                    ,{' '}
                    <HL color='plum' active inline={3}>
                        проверяет количество лайков у поста и сообщает
                    </HL>{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        это число
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={codeFn2} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section>
);
