import React from 'react';
import { Button, Code, Expand, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code1 = `
User
    Username
    Password`;

const code2 = `
User 
    [] Post (набор созданных пользователем постов)`;

const code3 = `
User
    Followers [] User  (профили пользователей, которые на него подписаны)
    Following [] User (профили пользователей, на которых он подписан)`;

const code4 = `
Personal Feed 
    [] Post (лента постов, созданных теми, на кого он подписаны)`;

const code5 = `
User
    [] Posts (набор созданных пользователем постов)
    [] Followers (те, кто его читают)
    [] Followers you follow (те, кого он читает)
    Personal Feed (лента постов, созданных теми, кого он читает)`;

export default () => (
    <Section>
        <Section.Main narrow>
            <h2>Ruby on Rails: Файлы и папки</h2>
            <p>
                Написание серверной части фактически мало отличается от написания клиентского кода.
                Однако, из-за того что, в отличие от клиентского кода, серверная часть у многих
                приложений очень похожа, появились стандартные “решения”. Они позволили сильно
                упростить разработку и сконцентрироваться только на небольшой части кода, которая
                уникальна для вашего приложения. Одним из таких решений является фреймворк{' '}
                <Term id='ruby-on-rails'>Ruby on Rails</Term>, который стандартизировал принципы
                хранения данных, наименования классов, функций и, соответственно, файлов и папок, в
                которых они хранятся на сервере.
            </p>
            <p>Все вышеописанные классы должны находиться в строго определенных папках:</p>
            <p>
                <b>app/models</b> - в файлах этой папки хранятся все основные классы программы. Все
                файлы названы в соответствии с названиями классов. Например, app/models/user.rb
            </p>
            <p>
                <b>app/controllers</b> - post/users/comments - это, что мы видим в endpoint’ах.
                Контроллеры описывают стандартные функции с экземплярами классов, а также
                специальные функции классов вроде current user, которая позволяет проверить, мог ли
                пользователь совершить конкретное действие по отношению к объекту.
            </p>
            <p>
                <b>db</b> - тут хранится схема серверной базы данных, а также записи для
                тестирования сервера (seed). До того как в программе появляются настоящие
                пользователи, мы тестируем сервер на собственных данных.
            </p>
            <p>
                <b>config/routes.rb</b> - файлы описывают, на какие пути в endpoint URL реагировать:
                когда сервер видит в URL запросе user, он будет читать его согласно описанному в
                route взаимодействию.
            </p>
            <p>Дополнительно могут использоваться такие папки как:</p>
            <p>
                <b>app/serializer</b> - в этих файлах для каждого класса (каждой составляющей
                программы) прописано, как переводить его объекты в текст. Теоретически это описание
                могло бы быть частью структурного описания (model) User, но в Ruby on Rails обычно
                пишут это отдельным файлом.
            </p>
            <p>
                <b>app/jobs, layouts/views</b> - часть стандартного проекта, которая создается
                автоматически вместе с проектом Ruby on Rails и которую не обязательно потребуется
                кастомизировать под вашу программу. В этих файлах, например, может быть описано, что
                возврат данных от сервера может происходить в виде html страницы.
            </p>
            <p>
                Загрузив фреймворк Ruby on Rails из Интернета и выполнив все необходимые шаги
                прилагающейся к нему инструкции, вы сможете “создать проект”. Эта операция создаст
                все стандартные необходимые папки и заполнит их стандартными файлами, после чего вам
                останется только создать файлы, описанные в предыдущих главах этой части (модели,
                контроллеры, описывающие создание базы данных).
            </p>
            <h2>
                (Дополнительно) Лента постов{' '}
                <Expand.Control htmlFor='11-3-1'>
                    <Button variant='rounded'>⤵</Button>
                </Expand.Control>
            </h2>
            <Expand id='11-3-1'>
                <p>
                    В завершение этой главы мы хотим обсудить, как формируется поток постов, которые
                    вы просматриваете при запуске Instagram.
                </p>
                <p>
                    Итак, вы скачиваете приложение из магазина приложений, регистрируете аккаунт,
                    создаете пользователя (User). Информация о нем будет сохранена в памяти вашего
                    устройства и на сервере программы:
                </p>
                <Pre.Box>
                    <Code value={code1} />
                </Pre.Box>
                <p>
                    После установки вы начнете создавать посты, информация о которых будет также
                    сохранена:
                </p>
                <Pre.Box>
                    <Code value={code2} />
                </Pre.Box>
                <p>
                    К ним добавится список людей, на которых вы подпишетесь, и тех, кто подпишется
                    на вас:
                </p>
                <Pre.Box>
                    <Code value={code3} />
                </Pre.Box>
                <p>
                    Таким образом, у вас (как и у других пользователей) сформируется ваш personal
                    feed - лента постов, созданных теми, на кого вы подписаны
                </p>
                <Pre.Box>
                    <Code value={code4} />
                </Pre.Box>
                <p>
                    Получается, о personal feed можно думать как о составляющей класса User или как
                    о дополнительной сущности класса Feed, в которой мы будем временно хранить набор
                    отфильтрованных постов. Как вы помните, в серверном коде эти связи будут
                    описаны:
                </p>
                <Pre.Box>
                    <Code value={code5} />
                </Pre.Box>
                <p>
                    Получается, что каждый раз, когда вы входите в программу или обновляете ленту
                    постов, вы запрашиваете с сервера personal feed (
                    <Term id='instance'>объект класса</Term> Feed), который содержит список всех
                    последних постов ваших друзей (users you follow). Ваш телефон получил эти данные
                    с сервера и превратил их в последнее обновления вашего Personal Feed. Таким
                    образом, у вашего устройства появляются все данные текущего состояния ленты.
                </p>
            </Expand>
        </Section.Main>
    </Section>
);
