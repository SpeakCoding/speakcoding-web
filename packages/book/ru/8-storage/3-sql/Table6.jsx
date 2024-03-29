import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '{{hl:SELECT}}(thistle) {{hl:*}}(sandy-brown) FROM {{hl:posts}}(green) ' +
    '{{hl:ORDER BY}}(plum) {{hl:date}}(aquamarine) {{hl:DESC}}(light-sky-blue);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Оба этих запроса не могут прочитать больше одного поста, как вы помните, в
                    колонке id хранятся уникальные значения. Но читать можно и все посты сразу:
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
                        <HL color='thistle'>Прочитать</HL> <HL color='sandy-brown'>все колонки</HL>{' '}
                        строк из таблицы <HL color='green'>posts</HL>,{' '}
                        <HL color='plum'>отсортировав их</HL>{' '}
                        <HL color='aquamarine'>по времени создания</HL>{' '}
                        <HL color='light-sky-blue'>в порядке убывания</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
