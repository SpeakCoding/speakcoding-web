import React from 'react';
import { HL, Img, Link, Pre, Section } from '@sc/ui';
import { Intro, Time } from '../../../components';
import img from './how-it-works.svg';
import intro from './intro.png';

const code1 = `let request = makeRequest(method: {{HTTPMethod.POST}}(hl:green), endpoint: "/ {{users}}(hl:light-sky-blue).json", authorized: false, parameters: requestParameters)`;

export default () => (
    <Section.Block>
        <Section.Main hlactive>
            <h1>Серверная часть программы</h1>
            <Time.Chapter value='~30 мин' />
            <Intro pic={intro} video='https://kinescope.io/embed/201215883' />
            <p>
                Чтобы разобраться в том, как устроен код серверной части программы, давайте
                вспомним, как мы создаем и храним информацию об объектах на сервере.
            </p>
            <p>
                Представим, что мы хотим создать и сохранить нового пользователя. Введенные в поля
                формы данные программа сохранит в локальную базу данных на устройстве (например, на
                вашем мобильном). Затем, превратив их в текстовую строку, отправит на сервер с
                помощью запроса <HL color='green'>POST</HL>:
            </p>
            <Pre>{code1}</Pre>
            <p>
                Сервер непрерывно “ожидает” получения таких запросов. Получив запрос, он произведет
                следующие действия:
            </p>
            <ol>
                <li>
                    Проверив, какой класс указан в endpoint (<HL color='light-sky-blue'>users</HL>)
                    и тип (method) запроса (<HL color='green'>POST</HL>), сервер запустит
                    соответствующую этому запросу функцию. В данном случае, функцию создания и
                    добавления нового пользователя в базу данных. Шаги этой функции описаны в
                    специальном классе <HL color='light-sky-blue'>User</HL>Controller. Он называется
                    так по аналогии с контроллером (Controller), который мы описывали в клиентском
                    коде. Т.е. фактически будет создан экземпляр класса UserController и запущена
                    функция <b>create</b> этого класса, отвечающая за создание нового объекта
                    (user).
                </li>
                <li>
                    Эта функция десериализует полученную от устройства (например, вашего мобильного
                    телефона) строку и создаст новый объект класса User. Она сохранит его в
                    соответствующую таблицу в базе данных (добавит строку с данными о нем в
                    соответствующую таблицу на стороне сервера).
                </li>
            </ol>
            <p>Для того, чтобы сервер мог произвести все эти операции, нам нужно:</p>
            <ol>
                <li>Описать функцию, которая создаст таблицы в базе данных сервера.</li>
                <li>
                    Описать основные структурные классы программы на сервере (они называются model),
                    включая функции сериализации и десериализации, а также функции записи и чтения
                    из базы данных.
                </li>
                <li>
                    Описать Controllers для структурных классов, включая функции создания нового
                    экземпляра, чтения уже добавленного, и другие.
                </li>
                <li>
                    Описать функцию, которая будет читать пришедшие от клиента (устройства) запросы
                    и запускать функции соответствующих контроллеров. Для этого она будет проверять
                    тип запросов (POST/GET/DELETE) и endpoints URL запроса.
                </li>
            </ol>
            <p>
                Рассмотрим каждый из этих пунктов подробно.{' '}
                <Link href='https://github.com/SpeakCoding/speakcoding-backend-instagram' blank>
                    Здесь
                </Link>{' '}
                вы найдете код серверной части.
            </p>
        </Section.Main>

        <Section.Side>
            <Section.Sticky>
                <Img src={img} />
            </Section.Sticky>
        </Section.Side>
    </Section.Block>
);
