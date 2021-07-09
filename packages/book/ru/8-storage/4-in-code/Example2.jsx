import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';

const code1 = `
hasTable(name: String) -> Bool {
    let result = database.[[executeQuery(sqlQuery: SELECT]](green-yellow) [[count]](red)[[(*)]](floral-white) FROM [[sqlite_master]](wheat) [[WHERE type=”table” AND name=”post”]](steel-blue);
`;

const code2 = `
\xa0   return result.first!["count(*)"] as! [[Int > 0]](aquamarine)
}`;

const code3 = `func hasTable ([[inputName]](orange): String) {
    let query = """
        SELECT count(*) 
        FROM sqlite_master 
        WHERE type=”table” AND [[name=?]](orange)
        """
    let result = database.executeQuery(
        sqlQuery: query,
        parameters: [\u200b[[inputName]](orange)]
    )
    return result.first!["count(*)"] as! Int > 0
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Теперь приведем пример с запросом SELECT - как раз с помощью него мы будем
                    проверять, есть ли таблица постов в базе данных. Функция проверки будет
                    выглядеть так:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='40% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Описание функции проверки с запросом SELECT словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='bottom' hlactive>
                        стандартная функция hasTable{' '}
                        <HL color='green-yellow'>выполнит запрос SELECT</HL>, который{' '}
                        <HL color='floral-white'>прочитает все данные</HL> из{' '}
                        <HL color='wheat'>общей таблицы данных</HL>,{' '}
                        <HL color='red'>отфильтрует и посчитает</HL>{' '}
                        <HL color='steel-blue'>
                            те, где в ячейке type написано “таблица”, а в ячейке name “post”
                        </HL>
                    </Grid.Cell>
                    <Grid.Cell dense='bottom' hlactive>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        и в результате исполнения функции вернет{' '}
                        <HL color='aquamarine'>количество таких таблиц</HL>, если оно{' '}
                        <HL color='aquamarine'>больше 0</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code2} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <HL.Context active>
                    <p>
                        Теперь сделаем то же самое только таким образом, чтобы мы могли поставить{' '}
                        <HL color='orange'>разные имена</HL> таблицы.
                    </p>
                    <Pre value={code3} />
                </HL.Context>
            </Section.Main>
        </Section.Block>
    </>
);
