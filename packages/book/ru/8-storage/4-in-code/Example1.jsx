import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
if {{hl:!}}(plum){{hl:hasTable}}(sandy-brown)(name: "post") {
    let query = """
        CREATE TABLE posts (
            "id" INTEGER PRIMARY KEY NOT NULL,
            "date" REAL,
            "user_id" INTEGER,
            "caption" TEXT,
            "image_url" TEXT,
            "location" TEXT,
            "number_of_likes" INTEGER,
            "number_of_comments" INTEGER,
            "liked" INTEGER
        )
        """

    database.executeQuery(sqlQuery: query, values: nil)
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Описание функции, проверяющей наличие таблицы в БД словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        Эту проверку мы поместим в отдельную{' '}
                        <HL color='sandy-brown'>функцию hasTable</HL>, которая как вводную будет
                        принимать имя таблицы.
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
                    Если машина обнаружит, что таблица с именем post{' '}
                    <HL color='plum' active>
                        уже существует
                    </HL>
                    , она не будет выполнять весь абзац кода после if.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
