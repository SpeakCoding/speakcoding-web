import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '[[SELECT]](thistle) [[*]](light-sky-blue) FROM [[posts]](green) [[WHERE]](plum) [[id=1]](green-yellow);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Прежде всего, базы данных существуют для того, чтобы данные из них можно было
                    прочитать и использовать в своей программе. Вот как можно прочитать пост, у
                    которого id равен 1:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='1fr 1fr 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Описание запроса словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='right bottom'>
                        <b>Уточнение описания</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде (SQL)</b>
                    </Grid.Cell>

                    <Grid.Cell border='right'>Прочитать все данные о посте с id=1</Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Прочитать</HL>{' '}
                        <HL color='light-sky-blue'>все колонки</HL> строк из таблицы{' '}
                        <HL color='green'>posts</HL>, <HL color='plum'>у которых</HL>{' '}
                        <HL color='green-yellow'>id равен 1</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
