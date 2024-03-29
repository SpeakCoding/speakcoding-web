import React from 'react';
import { HL, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import Example1 from './Example1';
import Example2 from './Example2';

const code1 = `
var database: SQLiteDatabase
database = SQLiteDatabase(filePath: {{databasePath}}(hl:light-sky-blue))`;

const code2 = `
let query = {{"""}}(hl:orange)
    CREATE TABLE posts (
        "id" ,
        "date",
        "user_id",
        "caption",
        "image_url",
        "location",
        "number_of_likes",
        "number_of_comments",
        "liked"
    )
    {{"""}}(hl:orange)`;

const code3 = `let query = "CREATE TABLE posts (\\"id\\", \\"date\\", \\"user_id\\", \\"caption\\", \\"image_url\\", \\"location\\", \\"number_of_likes\\", \\"number_of_comments\\", \\"liked\\")"`;

const code4 = `database.executeQuery(sqlQuery: query, values: nil)`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h2>
                        Теперь посмотрим, как происходит работа с базой данных в коде программы.
                    </h2>
                    <p>
                        Существует стандартный класс, описывающий базу данных SQLite -{' '}
                        <Term id='sqlite' tooltip>
                            SQLiteDatabase
                        </Term>
                        . Для работы с базой данных, нам необходимо создать экземпляр этого класса.
                        Мы сохраним его в переменную database.
                    </p>
                    <Pre>{code1}</Pre>
                    <p>
                        Здесь нужно указать{' '}
                        <HL color='light-sky-blue' active>
                            путь к файлу
                        </HL>{' '}
                        (включая его имя), записанный в виде строки. Представьте себе это, как если
                        бы нужно было указать путь к файлу, где хранится какой-нибудь Excel
                        документ.
                    </p>
                    <p>
                        У стандартного класса SQLiteDatabase есть стандартная функция -
                        database.open() -, которая подготовит созданный нами экземпляр к
                        последующему использованию (например, загрузит необходимые данные в память)
                        и исполнению вышеописанных SQL запросов (create database; select и тд).
                    </p>
                    <p>
                        Теперь, когда у нас появился рабочий экземпляр database, мы можем создать
                        нужные нам таблицы. Например, таблицу, которая будет хранить данные постов
                        (Post table). Для этого мы запишем в строку SQL запрос Create Table,
                        описанный выше:
                    </p>
                    <Pre>{code2}</Pre>
                    <p>
                        Для наглядности и удобства вместо записи в одну строку мы используем запись,
                        позволяющую сохранить многострочную строку в переменной query (поэтому
                        запись начинается и заканчивается{' '}
                        <HL color='orange' active>
                            повторными тройными кавычками
                        </HL>
                        ).
                    </p>
                    <p>Вот так выглядела бы запись этой операции одной строкой:</p>
                    <Pre>{code3}</Pre>
                    <p>
                        Теперь мы можем отправить этот запрос в базу данных через еще одну
                        стандартную функцию executeUpdate класса SQLiteDatabase.
                    </p>
                    <Pre>{code4}</Pre>
                    <p>
                        После первого запуска приложения в этой базе данных уже будет создана
                        таблица постов. Чтобы не потерять данные или не вызвать нежелательную
                        ошибку, важно избежать повторного создания таблицы. Для этого перед
                        выполнением запроса Create Table (строки, которые мы описывали выше) мы
                        добавим проверку создания этой таблицы в базе данных.
                    </p>
                </Section.Main>
            </Section.Block>

            <Example1 />
            <Example2 />
        </Section>

        <Assignment id='ru/20' />

        <Assignment id='ru/21' />

        <Assignment id='ru/22' />
    </>
);
