import React from 'react';
import { Callout, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment, Time } from '../../../components';
import img from './methods-functions.svg';
import Additional1 from './SignUp-Update';
import Additional2 from './Follow';
import s from './style.css';

const code1 = `
class UsersController < ApplicationController
end`;

const code2 = `
def show
    userToShow = User.{{hl:find}}(sandy-brown)({{hl:params}}(light-sky-blue)[:{{hl:id}}(steel-blue)])
    userJson = {{hl:UserSerializer}}(plum).new({{hl:userToShow}}(green-yellow), self).{{hl:serialize}}(red)
    render (json: { data: userJson })
end`;

const code3 = `
def current_user()
    authentication_token = request.headers['Authentication-Token']
    return nil if authentication_token.blank?
    return User.find_by(authentication_token: authentication_token)
end`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main hlactive>
                    <h1>Описание класса controller</h1>
                    <Time.Chapter value='~30 мин' />
                    <p>
                        Продолжим разбираться с тем, как устроен код на сервере. После того как у
                        нас появилось описание (model) основного класса User, нам нужно создать для
                        него контроллер, который определит, каким образом сервер будет отвечать на
                        отправляемые с клиента запросы.
                    </p>
                    <Pre value={code1} />
                    <p>Его мы наследуем от стандартного класса ApplicationController.</p>
                    <p>
                        В этом классе мы должны задать функции, которые будут вызываться в ответ на
                        запросы, приходящие от клиента (нашего приложения). У основных стандартных
                        запросов функции имеют стандартные имена:
                    </p>
                    <p className={s.requests}>
                        <b>show</b>
                        <span>-</span>
                        <span>
                            отвечает за то, чтобы получить данные (в данном случае, о пользователе);
                            соответствует запросу GET
                        </span>
                        <b>create</b>
                        <span>-</span>
                        <span>
                            создать (в данном случае, пользователя); соответствует запросу POST
                        </span>
                        <b>update</b>
                        <span>-</span>
                        <span>
                            изменить (в данном случае, профиль пользователя); соответствует запросу
                            PUT/PATCH
                        </span>
                        <b>delete</b>
                        <span>-</span>
                        <span>
                            удалить запись (в данном случае, о пользователе); соответствует запросу
                            DELETE
                        </span>
                    </p>
                    <p>
                        Когда на сервер приходит запрос с endpoint: "/
                        <HL color='aquamarine'>users.json</HL>
                        ", сервер создает экземпляр класса <HL color='aquamarine'>Users</HL>
                        Controller и вызывает соответствующую запросу функцию. Например, если он
                        получит запрос method.GET и если в endpoint указан user_id:
                        "/users/\(id).json", то будет вызвана функция show.
                    </p>
                    <Pre value={code2} />
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main hlactive narrow>
                    <p>
                        <b>Разбор кода в этом примере:</b>
                    </p>
                    <p>
                        Пришедший c клиента номер <HL color='steel-blue'>id</HL>, заданный в
                        endpoint, будет размещаться в проименованном наборе{' '}
                        <HL color='light-sky-blue'>params</HL> - params[:id], откуда мы его и
                        получаем (также в наборе можно будет найти и другие параметры, переданные в
                        этом запросе).
                    </p>
                    <p>
                        Так как класс User унаследован от ActiveRecord, он имеет статическую функцию{' '}
                        <HL color='sandy-brown'>find</HL>, которая произведет поиск среди записей
                        таблицы users.
                    </p>
                    <ol>
                        <li>
                            эта функция найдет запись, у которой id соответствует тому, который
                            пришел с клиента.
                        </li>
                        <li>
                            используя данные этой записи, функция создаст экземпляр класса User.
                        </li>
                        <li>
                            этот экземпляр мы поместим в временную переменную{' '}
                            <HL color='green-yellow'>userToShow</HL>.
                        </li>
                        <li>
                            используем класс <HL color='plum'>UserSerializer</HL> и его функцию{' '}
                            <HL color='red'>serialize</HL>, чтобы превратить наш экземпляр
                            пользователя в Json вид.
                        </li>
                        <li>
                            затем, используя стандартную функцию render (класса
                            ApplicationController), отправляем JSON на клиент. Отправляем,
                            предварительно добавив его в поименованный список под заголовком “data”,
                            так как именно этого ожидает наш клиент.
                        </li>
                    </ol>
                    <Callout>
                        Класс <b>ActiveRecord</b> добавляет различные статические функции, которые
                        позволяют искать пользователей в базе данных, такие как <b>find</b> или{' '}
                        <b>where</b> (которые позволяют задавать более сложные параметры поиска).
                    </Callout>
                </Section.Main>
            </Section.Block>

            <Additional1 />
        </Section>

        <Assignment id='ru/28' />

        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Кроме прочего, Controller отвечает за то, чтобы проверить, мог ли
                        пользователь сделать конкретное действие по отношению к объекту. Обычно
                        проверка происходит через функцию current user. Эта функция по составляющей
                        authentication/access token поможет нам найти и отправить всю информацию о
                        текущем пользователе:
                    </p>
                    <Pre value={code3} />
                </Section.Main>
            </Section.Block>

            <Additional2 />
        </Section>
    </>
);
