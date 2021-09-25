import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import s from './style.css';

const code1 =
    '{{hl:INSERT}}(green) {{hl:INTO}}(floral-white) {{hl:posts}}(red) ({{hl:"id"}}(orange), ' +
    '{{hl:"date"}}(light-sky-blue), {{hl:"user_id"}}(aquamarine), {{hl:"caption"}}(plum), ' +
    '{{hl:"image_url"}}(wheat), {{hl:"location"}}(blue), {{hl:"number_of_likes"}}(sandy-brown), ' +
    '{{hl:"number_of_comments"}}(thistle), {{hl:"liked"}}(green-yellow))';

const code2 =
    'VALUES ({{hl:1}}(orange), {{hl:1603046189}}(light-sky-blue), {{hl:1}}(aquamarine), ' +
    '{{hl:"My first post! #welcome"}}(plum), {{hl:"https://speakcoding.com/posts/1/images/square.png"}}(wheat), ' +
    '{{hl:"Anchorage, Alaska"}}(blue), {{hl:0}}(sandy-brown), {{hl:0}}(thistle), {{hl:0}}(green-yellow))';

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
                        <b>Как это выглядит в коде (SQL)</b>
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
