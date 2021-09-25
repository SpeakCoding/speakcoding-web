import React from 'react';
import { Code, Grid, HL } from '@sc/ui';

const code =
    '{{hl:UPDATE}}(thistle) {{hl:posts}}(green) {{hl:SET}}(plum) ' +
    '{{hl:number_of_comments=1}}(wheat) {{hl:WHERE id=1}}(green-yellow);';

const Asset = () => (
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

        <Grid.Cell border='right'>Обновить число комментариев для поста с id=1</Grid.Cell>
        <Grid.Cell border='right' hlactive>
            <HL color='thistle'>Обновить</HL> строки из таблицы <HL color='green'>posts</HL>,{' '}
            <HL color='plum'>установив колонку</HL> <HL color='wheat'>number_of_comments в 1</HL>,{' '}
            <HL color='green-yellow'>но только у тех строк, у которых колонка id равна 1</HL>.
        </Grid.Cell>
        <Grid.Cell hlactive>
            <Code value={code} />
        </Grid.Cell>
    </Grid>
);

export default Asset;
