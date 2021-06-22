import React from 'react';
import { Callout, Code, HL, Link, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';

const code = `
func requestCompletion (result: Any?, metadata: [String : String]?, [[error: Error?]](steel-blue)) { 
    if let postJSONs = result as? [[\u200b[\u200b[]](plum)[[String]](orange): Any[[]\u200b]\u200b]](plum) {
        let posts = postJSONs.[[map]](light-sky-blue) { (postJSON) -> Post in
            Post.instance(withJSON: postJSON)
        }
        feed.posts = posts
        Cache.shared.update(feed: feed)
        completion(posts, nil)
    } else {
        completion(nil, error)
    }
}`;

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h2>Чтение объектов или чтение листа объектов</h2>
                <Callout>
                    GET - чтение информации, запрос используется для получения данных с сервера.
                    Читаем объект или список.
                </Callout>
                <HL.Context active>
                    <p>
                        Давайте представим, что мы хотим загрузить на телефон{' '}
                        <HL color='light-sky-blue'>все посты</HL>{' '}
                        <HL color='thistle'>конкретного пользователя</HL>. Для этого на клиенте мы
                        должны будем написать <HL color='orange'>функцию</HL> и специальный запрос,
                        который будет содержать длинную подробную адресную строку, похожую на строку
                        в браузере (
                        <Link href='https://api.speakcoding.co/users/1/posts.json' blank>
                            https://api.speakcoding.co/users/1/posts.json
                        </Link>
                        ).
                    </p>
                    <Pre>
                        <HL color='orange'>func getPostsOf</HL>(<HL color='thistle'>user: User</HL>)
                        -> <HL color='light-sky-blue'>[Post]</HL>
                    </Pre>
                    <p>
                        Для начала нам нужно сформулировать <HL color='green'>запрос</HL>. Он будет
                        состоять из нескольких частей
                    </p>
                    <ul>
                        <li>
                            пути к файлу на сервере c указанием -{' '}
                            <HL color='sandy-brown'>endpoint</HL> - точки приема запроса на стороне
                            сервера,
                        </li>
                        <li>
                            типа запроса (их называют методами), который определяет необходимое
                            действие (получить все посты)
                        </li>
                        <li>
                            <HL color='turquoise'>параметров</HL>, которыми запрашиваемые данные
                            должны обладать. В нашем случае дополнительных параметров не требуется.
                        </li>
                        <li>
                            Так же некоторые запросы требуют, чтобы клиент, запрашивающий данные,
                            был авторизован (об этом расскажем дальше):
                        </li>
                    </ul>
                    <Pre>
                        let <HL color='green'>request</HL> = makeRequest(method:{' '}
                        <HL color='light-sky-blue'>HTTPMethod</HL>.GET,{' '}
                        <HL color='sandy-brown'>endpoint:</HL> "
                        <HL color='sandy-brown'>/users/\(user.id)/posts</HL>.json", authorized:
                        true, <HL color='turquoise'>parameters: nil</HL>)
                    </Pre>
                    <p>
                        Запрос GET является описанием операции, которую должен произвести сервер, и
                        на этот запрос на сервере существует функция с описанием того, как на него
                        реагировать. Можно ввести эту ссылку в браузере и получить информацию о
                        нужном нам объекте.
                    </p>
                    <p>
                        После того как мы сформировали наш запрос, мы опишем функцию, которая{' '}
                        <HL color='red'>выполнит запрос</HL>.
                    </p>
                    <Pre>
                        <HL color='red'>performRequest</HL>(request: request, completion:
                        requestCompletion)
                    </Pre>
                    <p>
                        Этой функции мы передадим функцию requestCompletion, которая будет выполнена
                        в тот момент, когда сервер вернет нам информацию об объекте (объект (result)
                        или выдаст <HL color='steel-blue'>ошибку</HL>, если такого объекта нет.
                    </p>
                    <Pre.Box>
                        <Code value={code} />
                    </Pre.Box>
                </HL.Context>
                <p>
                    Как мы обсуждали, информация, которую возвращает сервер, будет изначально
                    представлена в виде текстовой строки написанной в формате JSON.
                </p>
                <Callout>
                    <Term id='json' tooltip>
                        JSON
                    </Term>{' '}
                    - это формат (удобен для текстовой записи информации об объектах), его можно
                    представить в виде проименованного набора, где каждому имени соответствует
                    название составляющей. Поэтому в коде выше, так как мы запрашиваем информацию о
                    всех постах, результат ответа сервера - json - будет во множественном числе
                    (отсюда двойные квадратные скобки в функциях выше).
                </Callout>
                <p>
                    В нашем случае (так как мы получаем от сервера набор постов, и каждый пост будет
                    представлен в виде проименнованного набора) результат, полученный с сервера,
                    будет представлен в виде набора проименнованных наборов [ [String : Any] ]
                </p>
                <Pre>
                    Json == String -> [String : Any] <br />
                    [Json == String] -> [ [String : Any] ]
                </Pre>
                <p>
                    Вы могли бы общаться с сервером по-другому, но когда вы думаете о данных в
                    связке с каким-то конкретным объектом, это сильно упрощает работу с ними.
                </p>
                <p>В современных языках у стандартных наборов появились свои стандартные функци.</p>
                <p>
                    Здесь{' '}
                    <HL color='light-sky-blue' active>
                        map
                    </HL>{' '}
                    проходится по всем объектам в своей базе данных, выполняет написанные далее
                    строчки кода, чтобы превратить информацию о них в объекты необходимого нам
                    класса (в данном случае - текст). Она вернет набор элементов нового типа и
                    отправит ответ на устройство.
                </p>
                <p>
                    Функции Makerequest (создает объект) и performrequest (отправляет объект на
                    сервер) чаще всего являются стандартными, и мы можем скопировать их из какого-то
                    хранилища/библиотеки в интернете. Они переводят параметры в вид, которым
                    пользуются стандартные функции стандартных библиотек, которые общаются с
                    сервером.
                </p>
            </Section.Main>
        </Section>

        <Assignment number={24} href='https://forms.gle/A7Wfuu2sHZhFZfQ1A'>
            С помощью какого запроса мы получим последние комментарии к последнему посту
            пользователя? На основании примеров выше попробуйте написать весь запрос целиком.
        </Assignment>
    </>
);