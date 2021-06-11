import React from 'react';
import { Code, Grid, HL, Icon, Section } from '@sc/ui';
import Post from '../../../common/2/class-post';
import s from './style.css';

const codeFn1 = `
func (post* [[Post]](orange)) [[Add Like]](green)([[user User]](aquamarine)) { 
    [[new_like = new Like(user)]](plum)
    [[self.setOfLikes.add(new_like)]](plum)
}`;

const codeFn2 = `
func [[NumberOfLikes]](green)() [[Number]](light-sky-blue) { 
    [[number_of_likes = self.setOfLikes.length]](plum)
    [[return]](plum) [[number_of_likes]](light-sky-blue)
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

                <Grid.Cell border='right' hlactive>
                    <ul>
                        <li>
                            <HL color='green'>Название</HL>
                        </li>
                        <li>
                            <HL color='orange'>Класс</HL>, к которому она относится
                        </li>
                        <li>
                            <HL color='plum'>Последовательность/список операций</HL>, которые она
                            совершает
                        </li>
                        <li>
                            <HL color='aquamarine'>Вводные</HL>
                        </li>
                        <li>
                            <HL color='light-sky-blue'>Значение</HL>, которое она передает
                        </li>
                    </ul>
                </Grid.Cell>
                <Grid.Cell border='right' hlactive>
                    Функция класса <HL color='orange'>Пост</HL>, которую мы назовем{' '}
                    <HL color='green'>“Добавить Лайк”</HL>, которая если ей{' '}
                    <HL color='aquamarine'>указать пользователя</HL>,{' '}
                    <HL color='plum'>
                        создает лайк от этого пользователя и добавляет его в список лайков этого
                        поста, и ничего не возвращает
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell hlactive>
                    <Code value={codeFn1} />
                </Grid.Cell>

                <Grid.Cell border='right' />
                <Grid.Cell border='right' hlactive>
                    Или функция класса <HL color='orange'>Пост</HL>, которую мы назовем{' '}
                    <HL color='green'>“Количество Лайков”</HL>,{' '}
                    <HL color='aquamarine'>которой не указывается никаких вводных</HL>,{' '}
                    <HL color='plum'>проверяет количество лайков у поста и сообщает</HL>{' '}
                    <HL color='light-sky-blue'>это число</HL>.
                </Grid.Cell>
                <Grid.Cell hlactive>
                    <Code value={codeFn2} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section>
);
