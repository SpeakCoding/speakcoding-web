import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '[[UPDATE]](thistle) [[posts]](green) [[SET]](plum) ' +
    '[[number_of_comments=1]](wheat) [[WHERE id=1]](green-yellow);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Осталась только одна важная ситуация, которая встречается при работе с базами
                    данных, а именно - обновление данных. Допустим, к нашему посту добавили
                    комментарий, и мы хотим обновить количество комментариев:
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

                    <Grid.Cell border='right'>
                        Обновить число комментариев для поста с id=1
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Обновить</HL> строки из таблицы{' '}
                        <HL color='green'>posts</HL>, <HL color='plum'>установив колонку</HL>{' '}
                        <HL color='wheat'>number_of_comments в 1</HL>,{' '}
                        <HL color='green-yellow'>
                            но только у тех строк, у которых колонка id равна 1
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
