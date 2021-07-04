import React from 'react';
import { Code, Grid, Hint, HL, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import s from './style.css';

const code1 = `
create_table("users") do |table_users|
    table_users.[[string]](steel-blue)("full_name")
    table_users.[[string]](steel-blue)("bio")
    table_users.[[string]](steel-blue)("email")

    table_users.[[string]](steel-blue)("password_digest")
    table_users.[[string]](steel-blue)("authentication_token")

    table_users.[[datetime]](orange)("created_at", precision: 6, null: false)
    table_users.[[datetime]](orange)("updated_at", precision: 6, null: false)
end
`;

const code2 = `
let request = makeRequest(method: HTTPMethod.POST, endpoint: "/[[posts]](light-sky-blue).json", authorized: true, parameters: requestParameters)

create_table (“posts”) do |table_posts|
    table_posts.[[bigint]](sandy-brown)(“user_id”)
    table_posts.string(“caption”)
    table_posts.string(“location”)

    table_posts.timestamps()
end
`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h2>Создание таблиц на сервере</h2>
                    <p>Таблица Users будет аналогична той, что мы описывали на клиенте.</p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main hlactive>
                    <p>
                        <b>Users</b> Table
                    </p>
                    <Grid cols='1fr 1fr 1fr 1fr'>
                        <Grid.Cell border='right bottom'>id</Grid.Cell>
                        <Grid.Cell border='right bottom'>username</Grid.Cell>
                        <Grid.Cell border='right bottom'>email</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>

                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main hlactive narrow>
                    <p>
                        Если вы откроете файл db/migrate/create_users.rb в коде, то увидите описание
                        создания таблицы Users и ее столбцов в базе данных серверной части.
                    </p>
                    <Pre.Box>
                        <Code value={code1} />
                    </Pre.Box>
                    <p>
                        <b>Разбор этой части кода</b>
                    </p>
                    <p>
                        Функция create_table - статическая функция стандартной{' '}
                        <Hint>
                            библиотеки ActiveRecord
                            <Hint.Tooltip>
                                <div className={s.hint}>
                                    Язык, на котором написан код серверной части, позволяет опустить
                                    упоминание библиотеки,
                                    ActiveRecord::ConnectionAdapters::SchemaStatements.create_table
                                    ("users"). Компилятор сам проверит все используемые в проекте
                                    библиотеки на функцию с таким названием - create_table - и
                                    возьмет ее описание оттуда.
                                </div>
                            </Hint.Tooltip>
                        </Hint>
                        , она отвечает за создание таблицы в базе данных (формирует и выполняет
                        SQL-запрос CREATE TABLE).
                    </p>
                    <p>
                        У этой функции два входящих параметра: имя таблицы “users”, а также
                        “closure” функция. “Closure” - это функция, которая будет использована
                        внутри create_table. В данном случае она поможет уточнить некоторые
                        параметры таблицы. Для того, чтобы добавить определение “closure” функции,
                        мы используем ключевое слово “do”, после которого в | | пишем вводную
                        table_users, экземпляр специального класса, с помощью функций которого можно
                        указать, какие столбцы должны быть у этой таблицы. Для этого мы вызываем
                        функции переменной{' '}
                        <Hint>
                            table_users
                            <Hint.Tooltip>
                                Вы вероятно помните эти названия из стандартных, не требующих
                                описания классов, которые мы обсуждали в первой главе. В библиотеке
                                ActiveRecord названия функций совпадают с типом данных, которые
                                могут хранится в конкретном столбце. В эти функции, как вводная,
                                передается название столбца и, в некоторых случаях, дополнительные
                                параметры
                            </Hint.Tooltip>
                        </Hint>
                        : <HL color='steel-blue'>string</HL>, integer,{' '}
                        <HL color='sandy-brown'>bigint</HL>, <HL color='orange'>datetime</HL>,
                        которые отвечают за создание столбцов соответствующих классов.
                    </p>
                    <p>
                        <b>Еще пример создания</b>
                    </p>
                    <p>
                        Давайте посмотрим на еще один пример таблицы, которую нам нужно будет
                        создать в базе данных на сервере. Например, если мы захотим передать на
                        сервер посты пользователя, аналогично User, мы создадим таблицу для класса{' '}
                        <HL color='light-sky-blue'>Post</HL>.
                    </p>
                    <Pre.Box>
                        <Code value={code2} />
                    </Pre.Box>
                    <p>
                        Как видите, есть поля, которые совпадают с составляющими класса (caption,
                        location), но ряд полей не сами значения, а id, которые ссылаются на другие
                        таблицы. Так в таблице, куда сервер сохранит полученный набор постов, будет
                        ячейка с{' '}
                        <HL color='orange' inline={3}>
                            id создавшего их пользователя
                        </HL>
                        :
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        <b>Posts</b> Table
                    </p>
                    <Grid cols='1fr 1fr 1fr 1fr'>
                        <Grid.Cell border='right bottom'>id</Grid.Cell>
                        <Grid.Cell border='right bottom' hlactive>
                            <HL color='orange'>user_id</HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>caption</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>

                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment number={26} href='https://forms.gle/fUhZB24NPJqLAvzq6'>
            Найдите файл, в котором определено создание таблицы Comments, и подробно опишите, какие
            и какого типа поля мы в нем создаем.
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>
                    Теперь, когда вы знаете, как создаются таблицы на сервере, давайте поймем, как
                    выглядит описание структурных классов (основных сущностей нашей программы,
                    models), и чем оно отличается от описания структурных классов на клиенте.
                </p>
            </Section.Main>
        </Section>
    </>
);