import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = '[[INSERT INTO]](thistle) [[posts]](red) ([["id"]](orange)) VALUES ([[1]](orange));';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Возникает вопрос: “Зачем перечислять значения каждый раз, если они и так указаны
                    в заголовке?”. Во-первых, это улучшает читаемость кода. Вам не нужно каждый раз
                    искать описание таблицы, когда вы смотрите на запрос, который будет добавлять в
                    нее запись. Во-вторых, запрос-вставка может содержать не все значения, которые
                    есть в заголовке, оставив некоторые “ячейки” новой строки пустыми. Например, вы
                    хотите вставить в таблицу пост, но у вас пока есть только его id:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='56% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Описание запроса словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде (SQL)</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Вставить в таблицу</HL> <HL color='red'>posts</HL> новую
                        строку, у которой <HL color='orange'>id</HL> равен <HL color='orange'>1</HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    У вновь вставленной строки будет заполнен только один столбец - id. Для того
                    чтобы дописать значения позже, мы используем запрос UPDATE, мы еще поговорим о
                    нем.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
