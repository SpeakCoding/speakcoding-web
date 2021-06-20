import React from 'react';
import { Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Сервер API (application programming interface)</h1>
                    <p>
                        Как вы знаете, общение между клиентом и сервером представляет собой работу
                        двух программ.
                    </p>
                    <p>
                        Устройство (клиентская программа) ↹ Устройство (серверная программа) <br />
                        Локальная база данных Серверная база данных
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        Когда мы сохраняем конкретный пост или любой другой объект, мы сохраняем все
                        данные о посте в виде текстовой строки и отправляем ее на сервер. На сервере
                        (устройстве) работает программа, которая, принимая сообщение, переводит его
                        из текста обратно в объект и сохраняет его в базу данных.
                    </p>
                    <p>
                        Программы могли бы общаться любым способом, и раньше общение клиента и
                        сервера не было стандартизировано. Каждый программист мог самостоятельно
                        описывать, как связать их между собой. Со временем сложилась культура,
                        которая решила мимикрировать процесс общения клиента (конкретного
                        устройства) и сервера под то, как было построено взаимодействие браузеров с
                        серверами со страницами в Интернете. Можно представить Интернет как огромную
                        сеть связанных хранилищ (серверов), на которых и содержится каждая страница.
                        Когда вы кликаете на ссылку на странице, заполняете форму или производите
                        поиск, браузер отправляет на сервер HTTP-запрос с текстовой строкой (URL). А
                        сервер принимает этот запрос и отвечает на него необходимой информацией. Это
                        унифицированный интерфейс доступа к данным, и он намного удобнее аналогичной
                        записи в формате кода с запросами к базе данных для каждого проекта по
                        отдельности.
                    </p>
                    <p>
                        Для каждой системы, будь то iOS или любая другая, существует какая-то
                        стандартная библиотека, описывающая взаимодействие сервера и клиента,
                        поэтому вы редко будете менять принципы этого взаимодействия (редактировать
                        функции взаимодействия клиента и сервера).
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>img</Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <h2>Методы HTTP запроса</h2>
                    <p>
                        <Term id='api' tooltip>
                            Серверный API
                        </Term>{' '}
                        - это набор классов и функций, документации, где написано,{' '}
                        <b>каким образом одна программа общается с другой программой</b>. В
                        частности, как она получает и хранит информацию об объектах (о конкретных
                        пользователях, состоянии их ленты и тд). Давайте подробнее поговорим о том,
                        как сервер обходится с запросами и какими они бывают.
                    </p>
                    <p>
                        Стандартные запросы на сервер, их еще называют{' '}
                        <Term id='method' tooltip>
                            методами (method)
                        </Term>
                        , бывают трех типов GET - для чтения информации, POST - для создания или
                        изменения объектов, DELETE - для удаления. Чтобы сообщить серверу, с каким
                        именно объектом или списком объектов мы хотим работать, каждый запрос будет
                        содержать “путь к объекту”. Например, для чтения информации о пользователе с
                        id - 1 - мы используем путь “user/1”. А для чтения набора его постов
                        “user/1/posts”.
                    </p>
                    <p>
                        На каждый тип запроса (method) на сервере есть функция, описывающая ответ на
                        запрос.
                    </p>
                    <p>
                        Т.е. на сервере есть основная функция десериализующая объекты, а дальше, в
                        зависимости от{' '}
                        <Term id='endpoint' tooltip>
                            endpoint
                        </Term>{' '}
                        запроса, он запускает соответствующую функцию указанного класса. Сервер
                        начинает читать составляющие этих объектов. Если в url endpoint значится
                        user.auth.json - значит, что нужно запустить функцию логина. Если в url
                        endpoint написано user.id.posts - сервер найдет в таблице постов все посты
                        конкретного пользователя по его id.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>img</Section.Sticky>
                </Section.Side>
            </Section.Block>
        </Section>

        <Assignment number={23} href='#'>
            Какой endpoint нужно добавить в запрос для того, чтобы прочитать список фолловеров
            пользователя?
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>Далее мы подробно разберем примеры запросов на сервер.</p>
            </Section.Main>
        </Section>
    </>
);
