import React from 'react';
import { Grid, HL, Section } from '@sc/ui';
import { Assignment, Skill } from '../../../components';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Второй вариант - записать информацию об объектах в базу данных.{' '}
                        <Term id='database' tooltip>
                            База данных
                        </Term>{' '}
                        - это особенный вид хранения данных, вы можете думать о ней как о таблице
                        Excel. Для каждого столбца такой таблицы определяется тип данных (например,
                        число, текстовая строка, и т.д.). Но не все данные могут быть напрямую
                        записаны в базу.
                    </p>
                    <p>
                        Например, если мы хотим сохранить конкретный пост, то у нас не будет
                        возможности напрямую сохранить тип “Set of Comments”. Для того, чтобы его
                        сохранить, мы:
                    </p>
                    <ul>
                        <li>
                            записываем все комментарии в отдельную таблицу, для каждого перечисляя,
                            из чего он состоит (текст комментария, какой пользователь его оставил, к
                            какому посту)
                        </li>
                        <li>также добавим в эту таблицу столбец с номером (id) поста</li>
                        <li>
                            в таблице про посты, в свою очередь, также будет столбец, содержащий{' '}
                            <HL color='orange' active>
                                номер поста
                            </HL>
                        </li>
                    </ul>
                    <p>
                        Так значения из таблицы постов будут связаны с таблицей комментариев (см.
                        пример таблицы ниже).
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        <b>Comments</b> Table
                    </p>
                    <Grid cols='repeat(5, 1fr)'>
                        <Grid.Cell border='right bottom'>id</Grid.Cell>
                        <Grid.Cell border='right bottom'>
                            <HL color='green' active>
                                post_id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>
                            <HL color='orange' active>
                                user_id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>text</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                    <p>
                        <b>Posts</b> Table
                    </p>
                    <Grid cols='repeat(4, 1fr)'>
                        <Grid.Cell border='right bottom'>
                            <HL color='green' active>
                                id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>
                            <HL color='orange' active>
                                user_id
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell border='right bottom'>text</Grid.Cell>
                        <Grid.Cell border='bottom'>created_at</Grid.Cell>
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell border='right' />
                        <Grid.Cell />
                    </Grid>
                    <p>
                        <b>Users</b> Table
                    </p>
                    <Grid cols='repeat(4, 1fr)'>
                        <Grid.Cell border='right bottom'>
                            <HL color='orange' active>
                                id
                            </HL>
                        </Grid.Cell>
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
                <Section.Main narrow>
                    <p>
                        Имена классов при сохранении обычно совпадают с тем, как они будут
                        отображаться в базах данных, но т.к название классу дают программисты, они
                        могут не совпадать.
                    </p>
                    <p>
                        Например, классу Post в базе данных будет соответствовать table Posts.
                        Обычно у каждой таблицы есть поле id. В нем для каждой строки из этой
                        таблицы хранится ее уникальный номер. Это похоже на номера паспортов граждан
                        одной страны — у каждого гражданина он свой. Почти все базы данных сами
                        умеют автоматически создавать уникальные номера для новых строк (новых
                        комментариев/постов/пользователей), и вам не придется их придумывать.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment
            number={18}
            href='https://docs.google.com/forms/d/e/1FAIpQLScJQzElGfKCPC6X0y-h6v5aKSs84C1WPM6bmUgOXfWkfBOwVA/viewform?usp=sf_link'
        >
            Дополните таблицы выше недостающими составляющими Post и подумайте, какие таблицы нам
            понадобится создать для записи всех данных поста
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>
                    Для каждого объекта класса мы должны будем добавить функцию, которая опишет
                    необходимые шаги для записи в/чтения из баз данных всех его составляющих. Мы
                    поговорим об этом подробнее позже.
                </p>
                <p>
                    Для того чтобы сохранять данные на серверах, фактически производятся очень
                    схожие операции. Мы переводим данные объекта в текстовый вид и, используя
                    стандартные функции операционной системы устройства, передаем их на сервер. На
                    сервере (устройстве) работает программа, которая, принимая сообщение, переводит
                    его из текста обратно в объект и сохраняет его в базу данных.
                </p>
                <p>
                    В некоторых современных языках функции сохранения и передачи данных на сервер
                    создаются автоматически, и тогда вам не требуется писать их самим.
                </p>
            </Section.Main>
        </Section>

        <Skill>
            Понимание того, как устроено хранение данных, - важная составляющая правильной
            документации проекта. Позже вы сможете использовать эти знания, чтобы составлять схемы
            хранения данных.
        </Skill>

        <Section>
            <Section.Main narrow>
                <p>
                    Давайте для начала разберемся, как происходит работа с базами данных, а затем,
                    как происходит передача и загрузка данных с сервера.
                </p>
            </Section.Main>
        </Section>
    </>
);
