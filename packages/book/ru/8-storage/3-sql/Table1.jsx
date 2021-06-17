import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
[[CREATE]](wheat) [[TABLE]](red) [[Posts]](sandy-brown) (
    [["id"]](orange),
    [["date"]](aquamarine),
    [["user_id"]](light-sky-blue),
    [["caption"]](plum),
    [["image_url"]](blue),
    [["location"]](green),
    [["number_of_likes"]](floral-white),
    [["number_of_comments"]](thistle),
    [["liked"]](green-yellow) 
);`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Чтобы начать сохранять данные в таблицу, нужно сначала создать её, описав, из
                    каких колонок она состоит. То есть, фактически, надо написать заголовок таблицы.
                    Вот как описывается в коде запрос на создание таблицы Posts, которая будет
                    хранить в себе данные о постах, полученных с сервера:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>Описание запроса словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде (SQL)</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='wheat'>Создать</HL> <HL color='red'>таблицу</HL>{' '}
                        <HL color='sandy-brown'>Posts</HL>, у которой есть ячейки
                        <ul>
                            <li>
                                <HL color='orange'>post id</HL>,
                            </li>
                            <li>
                                <HL color='aquamarine'>даты создания поста</HL>,
                            </li>
                            <li>
                                <HL color='light-sky-blue'>user id</HL>,
                            </li>
                            <li>
                                <HL color='plum'>текста поста</HL>,
                            </li>
                            <li>
                                <HL color='blue'>ссылки на картинку</HL> поста,
                            </li>
                            <li>
                                <HL color='green'>локации</HL> в посте, а также информацию о
                            </li>
                            <li>
                                <HL color='floral-white'>количестве лайков</HL> и
                            </li>
                            <li>
                                <HL color='thistle'>комментариев</HL> этого поста, а также
                            </li>
                            <li>
                                <HL color='green-yellow'>значение liked</HL> этого поста для
                                конкретного пользователя (“сердечко” под постом)
                            </li>
                        </ul>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
