import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code =
    '{{hl:SELECT}}(thistle) {{hl:image_url, date}}(sandy-brown) FROM {{hl:posts}}(green) {{hl:WHERE}}(plum) {{hl:id=1}}(green-yellow);';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Можно читать не все колонки, а только те, которые нам интересны. Допустим, это
                    картинка и дата создания:
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
                        Для поста с id=1 прочитать колонку со ссылкой на картинку и дату поста
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        <HL color='thistle'>Прочитать</HL>{' '}
                        <HL color='sandy-brown'>колонки image_url и date</HL> строк из таблицы{' '}
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
