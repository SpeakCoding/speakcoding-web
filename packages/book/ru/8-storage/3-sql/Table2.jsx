import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import s from './style.css';

const code1 =
    '[[INSERT]](green) [[INTO]](floral-white) [[posts]](red) ([["id"]](orange), ' +
    '[["date"]](light-sky-blue), [["user_id"]](aquamarine), [["caption"]](plum), ' +
    '[["image_url"]](wheat), [["location"]](blue), [["number_of_likes"]](sandy-brown), ' +
    '[["number_of_comments"]](thistle), [["liked"]](green-yellow))';

const code2 =
    'VALUES ([[1]](orange), [[1603046189]](light-sky-blue), [[1]](aquamarine), ' +
    '[["My first post! #welcome"]](plum), [["https://speakcoding.com/posts/1/images/square.png"]](wheat), ' +
    '[["Anchorage, Alaska"]](blue), [[0]](sandy-brown), [[0]](thistle), [[0]](green-yellow))';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Теперь, когда есть таблица постов, мы можем сохранить в ней информацию о постах,
                    которую получим с сервера. Добавление записи в таблицу аналогично добавлению
                    строки в Excel. Для этого существует запрос INSERT:
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
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' dense='bottom' hlactive>
                        <HL color='green'>Добавить в таблицу</HL> <HL color='red'>Постов</HL> новую
                        строку, заполнив поля значений данными о конкретном посте (
                        <HL color='orange'>id</HL>; <HL color='light-sky-blue'>date</HL>;{' '}
                        <HL color='aquamarine'>user id</HL>…)
                    </Grid.Cell>
                    <Grid.Cell dense='bottom' hlactive>
                        <Code value={code1} />
                    </Grid.Cell>
                    <Grid.Cell border='right'>или</Grid.Cell>
                    <Grid.Cell />
                    <Grid.Cell border='right' dense='top'>
                        Список столбцов задается перечислением имен столбцов из заголовка таблицы.
                        Значения должны быть заданы в том же порядке, в котором заданы столбцы.
                    </Grid.Cell>
                    <Grid.Cell dense='top' hlactive>
                        <div className={s.sql}>
                            <Code value={code2} />
                        </div>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
