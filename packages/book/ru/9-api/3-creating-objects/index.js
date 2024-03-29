import React from 'react';
import { Callout, Code, Grid, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import img from './serialization.svg';

const code1 = `let request = makeRequest(method: {{HTTPMethod.POST}}(hl:light-sky-blue), endpoint: "/ {{posts}}(hl:green).json", authorized: true, parameters: requestParameters)`;

const code2 = `let request = makeRequest(method: {{HTTPMethod.POST}}(hl:light-sky-blue), endpoint: "/ {{posts/\\(post.id)}}(hl:green).json", authorized: true, parameters: requestParameters)`;

const code3 = `
func signUp(emailAddress: String, password: String, completion: @escaping ((User?, Error?) -> Void)) {
    let {{hl:requestParameters}}(green) = [{{hl:"user": ["email": emailAddress, "password": password]}}(light-sky-blue)]
    let request = makeRequest(method: HTTPMethod.{{hl:POST}}(orange), endpoint: "/users.json", authorized: false, parameters: {{hl:requestParameters}}(green))
}`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h2>Создание и изменение объектов</h2>
                    <Callout>
                        Запрос POST используется для создания (записи) объектов на сервере.
                    </Callout>
                    <p>
                        Если мы хотим добавить новый пост, то информация, которую пользователь
                        введет в поля в интерфейсе: текст поста, картинка поста, и тд. (файл View
                        поста), устройство сначала сохранит в своей локальной базе данных. Для
                        создания этого поста (записи информации об этом посте) на сервере, мы
                        переведем его в текстовый формат и отправим через запрос{' '}
                        <HL color='light-sky-blue' active>
                            Post
                        </HL>
                        .
                    </p>
                    <Pre>{code1}</Pre>
                    <p>
                        Похожий процесс происходит при изменении объекта. Для него используется тот
                        же запрос - POST, но параметры в нем будут заменены на новую информацию об
                        этом объекте. Для того, чтобы изменить информацию о конкретном объекте, нам
                        понадобится его{' '}
                        <HL color='green' active>
                            id, который мы добавим в endpoint
                        </HL>
                        .
                    </p>
                    <Pre>{code2}</Pre>
                    <p>
                        Если мы вернемся к примеру с формой, которую видит пользователь, процесс
                        будет выглядеть так: на основании введенных в поля данных программа (клиент)
                        создаст новый объект, превратит его в запрос для сервера и передаст через
                        него обновленные параметры.
                    </p>
                    <p>
                        Для удаления объекта мы возьмем тот же URL, что и в предыдущем запросе, с
                        id, и используем метод DELETE. Больше никаких параметров для удаления
                        объекта передавать не нужно, сервер произведет операцию.
                    </p>
                    <p>
                        Как вы уже заметили, процесс общения между устройством и сервером выглядит
                        очень просто. В программе создается объект (экземпляр какого-то класса,
                        например, новый пост) → функция сериализации записывает информацию о нем в
                        строку и сохраняет в локальную базу данных → отправляем строку на сервер →
                        сервер принимает → конвертирует в объект → кладет в свою базу данных.
                    </p>
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
                            <b>Описание функции словами</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это выглядит в коде</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            Например, функция Sign up, которую мы видим на одноименном экране в
                            интерфейсе программы, по сути, не что иное, как создание (
                            <HL color='orange'>POST</HL>) объекта класса User. В запросе POST мы
                            отправляем <HL color='green'>параметры</HL> создания юзера -{' '}
                            <HL color='light-sky-blue'>имейл, пароль, юзернейм</HL> (форма sign up).
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <Code value={code3} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='ru/25' />
    </>
);
