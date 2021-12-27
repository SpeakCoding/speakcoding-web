import React from 'react';
import { Grid, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment, Time } from '../../../components';
import Term from '../../glossary/Term';
import img from './phone-cloud.svg';

const code1 = `'{ "post": { "caption": "This is my first post!", "user": "liberman1984", "comments": [] } }'`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Долгосрочное хранение информации об объектах</h1>
                    <Time.Chapter value='~15 мин' />
                    <p>
                        Вы уже знаете, как сохранять объекты классов для работы с ними в коде.
                        Хранение информации в переменных временное, важно помнить, что они
                        перестанут существовать при выходе из программы. Если вы создаете программу,
                        для которой не нужно сохранять ее текущее состояние, и каждый новый запуск
                        программы начинается с нуля, то не нужно думать о том, как мы храним эти
                        данные. Примером здесь может быть калькулятор: программа хранит минимум
                        информации во время рабочей сессии и удаляет ее до следующего запуска. Но,
                        чаще всего, нам нужна информация из программ. Например, в Инстаграме мы
                        храним данные о последних постах, полученных комментариях. Это можно сделать
                        несколькими способами:
                    </p>
                    <ol>
                        <li>
                            Устройства, которыми мы пользуемся (телефон, компьютер, и т д),
                            называются клиентами, и у каждого клиента есть определенное количество
                            локальной памяти.{' '}
                            <b>
                                Мы можем хранить данные в локальном хранилище клиента - в памяти
                                телефона/компьютера
                            </b>
                            . Данные в этом случае сохраняются и будут доступны только на этом
                            устройстве. Когда приложение выключается, мы их не теряем. Каждый раз
                            программа как бы заново “создает” конкретные посты/пользователей и т.д
                            из той информации, которая была сохранена в локальном хранилище.
                        </li>
                        <li>
                            <b>Можно хранить данные на сервере или в “облаке”</b>{' '}
                            (онлайн-хранилище), чтобы не потерять их вместе с устройством и, при
                            необходимости, обмениваться ими с другими пользователями.
                        </li>
                    </ol>
                    <p>
                        Когда мы сохраняем конкретный пост, мы сохраняем не сам пост, а все те
                        данные из поста, которые нужны нам, чтобы этот объект можно было
                        “воссоздать”. В случае с конкретным пользователем Инстаграма, например, это
                        его имя, уникальный номер его профиля и картинку.
                    </p>
                    <p>
                        Если бы мы хотели сохранить книгу, то мы бы записали все, что о ней было
                        известно - ее цвет, количество страниц, пометки на полях, текст etc.
                    </p>
                    <p>
                        Если мы хотим сохранить информацию о конкретном посте локально, нам нужно
                        “разобрать” его и конвертировать информацию о нем в текст.
                    </p>
                    <p>
                        Процедура записи информации об <Term id='instance'>объектах классов</Term> в
                        текстовом виде называется{' '}
                        <Term id='serialization' tooltip>
                            сериализацией
                        </Term>
                        .
                    </p>
                    <p>
                        При восстановлении производится обратная операция (
                        <Term id='deserialization' tooltip>
                            “десериализация”
                        </Term>
                        ), которая воссоздает объект из текста, “подставляя” данные в шаблон
                        воссоздаваемого объекта. Для обеих этих операций мы должны написать эти
                        функции “сохранения и восстановления” <Term id='instance'>объектов</Term>.
                    </p>
                    <p>
                        <b>Пример способа записи поста в виде строки:</b>
                    </p>
                    <Pre>{code1}</Pre>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right bottom'>
                            <b>Уточнение к примеру</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это выглядит в коде</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' dense='bottom' />
                        <Grid.Cell dense='bottom'>
                            <pre>
                                {
                                    '{ "caption": "This is my first post!", "user": "liberman1984", "comments": [] }'
                                }
                            </pre>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            в коде функции сериализации и десериализации информация об объекте будет
                            выглядеть, как набор <HL color='plum'>любых значений</HL>, записанный в
                            виде <HL color='wheat'>текстовой строки</HL>
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <pre>
                                String -> [<HL color='wheat'>String</HL> : <HL color='plum'>Any</HL>
                                ] -> Post
                            </pre>
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        После того, как мы записали информацию об объекте в виде строки, мы можем
                        сохранить ее локально в памяти устройства, на котором запущена программа.
                        Данные, записанные таким образом, сохраняются в обычный текстовый файл.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='ru/17' />
    </>
);
