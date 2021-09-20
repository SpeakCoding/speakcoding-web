import React from 'react';
import { Grid, HL } from '@sc/ui';

const Asset = () => (
    <Grid>
        <Grid.Cell border='right' hlactive>
            Функция класса Пост, которая добавляет лайк к посту <br />
            <br />
            Где
            <ul>
                <li>
                    <HL color='plum'>Название</HL>
                </li>
                <li>
                    <HL color='light-sky-blue'>Класс, к которому она относится</HL>
                </li>
                <li>
                    <HL color='red'>Последовательности/список операций, которые она совершает</HL>
                </li>
                <li>
                    <HL color='orange'>Вводные</HL>
                </li>
                <li>
                    <HL color='green'>Класс значения, которое она передает</HL>
                </li>
            </ul>
        </Grid.Cell>
        <Grid.Cell hlactive>
            Функция класса <HL color='light-sky-blue'>Пост</HL>, которую мы назовем{' '}
            <HL color='plum'>Добавить Лайк</HL>, которая если ей{' '}
            <HL color='orange'>указать пользователя (который лайкает пост)</HL>,{' '}
            <HL color='red'>
                создает лайк от этого пользователя и добавляет его в список лайков этого поста, и
                сообщает
            </HL>{' '}
            <HL color='green'>число</HL> — <HL color='red'>новое количестко лайков</HL>
        </Grid.Cell>
    </Grid>
);

export default Asset;
