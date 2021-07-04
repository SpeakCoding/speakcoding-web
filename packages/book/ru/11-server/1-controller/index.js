import React from 'react';
import { Callout, Code, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Additional1 from './SignUp-Update';
import Additional2 from './Follow';

const code1 = `
class UsersController < ApplicationController
end`;

const code2 = `
def show
    userToShow = User.[[find]](sandy-brown)([[params]](light-sky-blue)[:[[id]](steel-blue)])
    userJson = [[UserSerializer]](plum).new([[userToShow]](green-yellow), self).[[serialize]](red)
    render (json: { data: userJson })
end`;

const code3 = `
def current_user()
    authentication_token = request.headers['Authentication-Token']
    return nil if authentication_token.blank?

    return User.find_by(authentication_token: authentication_token)
end

def render_unauthorized()
    render json: {
        errors: [
            {
                detail: "You're not authorized to access this data"
            }
        ]
    }, status: 403
end`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main hlactive>
                    <h1>Описание класса controller</h1>
                    <p>
                        Продолжим разбираться с тем, как устроен код на сервере. После того как у
                        нас появилось описание (model) основного класса User, нам нужно создать для
                        него контроллер, который определит, каким образом сервер будет отвечать на
                        отправляемые с клиента запросы.
                    </p>
                    <Pre.Box>
                        <Code value={code1} />
                    </Pre.Box>
                    <p>Его мы наследуем от стандартного класса ApplicationController.</p>
                    <p>
                        В этом классе мы должны задать функции, которые будут вызываться в ответ на
                        запросы, приходящие от наших клиентских приложений. У основных стандартных
                        запросов функции имеют стандартные имена:
                    </p>
                    <p>
                        <b>show</b> - отвечает за то, чтобы получить данные (в данном случае, о
                        пользователе); соответствует запросу GET <br />
                        <b>create</b> - создать (в данном случае, пользователя); соответствует
                        запросу POST <br />
                        <b>update</b> - изменить (в данном случае, профиль пользователя);
                        соответствует запросу PUT/PATCH <br />
                        <b>delete</b> - удалить запись (в данном случае, о пользователе);
                        соответствует запросу DELETE
                    </p>
                    <p>
                        Когда на сервер приходит запрос с endpoint: "/
                        <HL color='aquamarine'>users.json</HL>
                        ", сервер создает экземпляр класса <HL color='aquamarine'>Users</HL>
                        Controller и вызывает соответствующую запросу функцию. Например, если он
                        получит запрос method.GET и если в endpoint указан user_id:
                        "/users/\(id).json", то будет вызвана функция show.
                    </p>
                    <Pre.Box>
                        <Code value={code2} />
                    </Pre.Box>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img />
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
                        получаем. (Также в наборе можно будет найти и другие параметры, переданные в
                        этом запросе).
                    </p>
                    <p>
                        Так как класс User унаследован от ActiveRecord, он имеет статическую функцию{' '}
                        <HL color='sandy-brown'>find</HL>, которая произведет поиск среди записей
                        таблицы users.
                    </p>
                    <ul>
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
                    </ul>
                    <Callout>
                        Класс <b>ActiveRecord</b> добавляет различные статические функции, которые
                        позволяют искать пользователей в базе данных, такие как <b>find</b> или{' '}
                        <b>where</b> (которые позволяют задавать более сложные параметры поиска).
                    </Callout>
                </Section.Main>
            </Section.Block>

            <Additional1 />
        </Section>

        <Assignment number={28} href='#'>
            Разберите функции sign up и update (выше) на примере функции show.
        </Assignment>

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
                    <Pre.Box>
                        <Code value={code3} />
                    </Pre.Box>
                </Section.Main>
            </Section.Block>

            <Additional2 />
        </Section>
    </>
);
