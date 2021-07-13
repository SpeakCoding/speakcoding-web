import React from 'react';
import { Img, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import img from './database.svg';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table5 from './Table5';
import Table6 from './Table6';
import Table7 from './Table7';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Работа с базами данных в коде</h1>
                    <h2>Базы данных</h2>
                    <p>
                        В программировании данными называется любая информация, а базами данных -
                        места ее хранения. Примеры баз данных, какими их видят программисты:
                    </p>
                    <ul>
                        <li>книга с рецептами как база данных рецептов</li>
                        <li>библиотека как база данных книг</li>
                        <li>галерея в вашем телефоне как база данных фотографий</li>
                    </ul>
                    <p>
                        Как видно на примере ДНК, базы данных есть и внутри вас. Человек в целом
                        может считаться базой данных своих воспоминаний, прожитого опыта, связей с
                        другими людьми.
                    </p>
                    <p>
                        В программировании используются специальные базы данных: их много и
                        взаимодействовать с ними нужно по-разному. Самые распространенные для
                        взаимодействия с программами используют Язык Структурных Запросов (от англ.
                        <Term id='sql' tooltip>
                            SQL — Structured Query Language
                        </Term>
                        ). Любое взаимодействие с базой данных происходит путем отправки ей запроса
                        на какое-либо действие (создание, чтение, изменение или удаление данных).
                    </p>
                    <p>
                        Данные в таких базах хранятся в таблицах. Можно думать, что каждая таблица в
                        такой базе данных — лист в Excel.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <div className={s.img}>
                            <Img src={img} />
                        </div>
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Table1 />
            <Table2 />
            <Table3 />
            <Table4 />
            <Table5 />
            <Table6 />
            <Table7 />

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Вы могли заметить, что кроме слов, определяющих тип запроса (INSERT, UPDATE,
                        SELECT, DELETE), в запросах также встречаются ключевые <b>слова-условия</b>{' '}
                        запросов (WHERE, SET и т.д. ). Исторически и те, и другие пишутся большими
                        буквами, чтобы визуально отличать их от названий таблиц и колонок. Для базы
                        данных же все равно, в каком регистре вы будете их указывать. Выбор{' '}
                        <b>слов-условий</b> зависит от <b>типа</b> запроса, который вы описываете.
                        Существуют отдельные курсы и списки литературы, посвященные работе с базами
                        данных, но для общего понимания вам достаточно знать четыре основные
                        команды, которые позволят вам работать с данными в таблицах:
                    </p>
                    <ol>
                        <li>SELECT если мы хотим прочитать строки из таблицы,</li>
                        <li>UPDATE чтобы изменить их,</li>
                        <li>INSERT чтобы добавить новые строки,</li>
                        <li>DELETE для удаления строк.</li>
                    </ol>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment
            number={19}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdGR5wQ6YrTm_MzE06yaI76LKUTge-i1ImA6y9EvsDv7JwZ8w/viewform?usp=sf_link'
        >
            Опишите словами, какой запрос в БД необходимо написать для редактирования поста c id=1.
            Попробуйте записать его как SQL запрос.
        </Assignment>
    </>
);
