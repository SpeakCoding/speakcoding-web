import React from 'react';
import { Button, Expand, Grid, HL, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';

const code1 = `create_table ("followships") do |table_followeship|
    table_followeship.bigint("follower_id")
    table_followeship.bigint("followee_id")
    table_followeship.datetime("created_at")
    table_followeship.datetime("updated_at")
end`;

const code2 = `has_many (:followers_records, class_name: 'Followship', foreign_key: 'followee_id', dependent: :destroy)
has_many (:following_records, class_name: 'Followship', foreign_key: 'follower_id', dependent: :destroy)
has_many :followers, through: :followers_records, source: :follower
has_many :followees, through: :following_records, source: :followee`;

const code3 = `def create()
    @post = {{hl:Post.new}}(light-sky-blue)({{hl:post_params}}(green))
    @post.user = current_user
    @{{hl:post.save}}(light-sky-blue)
end`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h2>Связи между классами</h2>
                <p>
                    Остается разобрать случаи, когда составляющие относятся к более сложному классу,
                    который нельзя напрямую хранить в таблице. Например, часть составляющих User на
                    клиенте является наборами. Так, у любого пользователя есть составляющая posts
                    (посты, которые он создал). Для добавления такой составляющей мы воспользуемся
                    стандартной функцией класса <b>ActiveRecord</b> - has_many (так как у каждого
                    пользователя может быть много постов) и передадим в нее название составляющей
                    “posts”. Эта функция добавит составляющую post всем экземплярам User.
                </p>
                <p>
                    При чтении этой составляющей фактически будет выдаваться набор экземпляров Post,
                    созданный на основе отфильтрованных строк таблицы posts. Это записи постов
                    пользователя, которые <b>ActiveRecord</b> найдет в таблице posts по
                    соответствующему id. Как вы помните, в таблице posts для каждой записи есть
                    столбец user_id, и именно он будет использован при поиске. Тем самым, при помощи
                    функций класса <b>ActiveRecord</b> мы “свяжем” таблицу users с таблицей posts.
                </p>
                <p>
                    Симметрично в классе Post мы используем функцию has_one(“user”), которая добавит
                    составляющую user, каждому экземпляру поста, связав каждый пост с конкретным
                    пользователем, используя столбец user_id в таблице posts.
                </p>
                <h2>
                    (Дополнительно) Many to many{' '}
                    <Expand.Control htmlFor='10-4-1'>
                        <Button variant='rounded'>читать ⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='10-4-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                С читателями (фоловерами) дела обстоят сложнее, так как и владелец
                                профиля пользователя, и те, кто его читают, принадлежат к одному
                                классу User.
                            </p>
                        </Section.Main>
                    </Section.Block>

                    <Section.Block>
                        <Section.Main>
                            <p>
                                <b>Followships</b> Table
                            </p>
                            <Grid cols='1fr 1fr 1fr 1fr'>
                                <Grid.Cell border='right bottom'>id</Grid.Cell>
                                <Grid.Cell border='right bottom' hlactive>
                                    <HL color='steel-blue'>follower_id</HL>
                                </Grid.Cell>
                                <Grid.Cell border='right bottom' hlactive>
                                    <HL color='sandy-brown'>followee_id</HL>
                                </Grid.Cell>
                                <Grid.Cell border='bottom'>created_at</Grid.Cell>

                                <Grid.Cell border='right' />
                                <Grid.Cell border='right' />
                                <Grid.Cell border='right' />
                                <Grid.Cell />
                            </Grid>
                        </Section.Main>
                    </Section.Block>

                    <Section.Block>
                        <Section.Main hlactive narrow>
                            <p>
                                В таблице followship, куда сервер сохранит информацию о читателях
                                (фоловерах) конкретного пользователя, каждому "
                                <HL color='steel-blue'>follower_id</HL>" будет соответствовать
                                user_id пользователя, читающего этот профиль пользователя. А{' '}
                                <HL color='sandy-brown'>followee_id</HL> - user_id владельца профиля
                                пользователя.
                            </p>
                            <p>
                                В файле <b>db/schema.rb</b> кода серверной части вы увидите описание
                                создания и этой таблицы в базе данных, и ее столбцов.
                            </p>
                            <Pre>{code1}</Pre>
                            <p>
                                Каждая подписка на профиль пользователя - это добавление записи в
                                этой таблице. Каждая отписка - удаление записи в этой таблице. Это
                                many-to-many связь таблицы users c самой с собой через таблицу
                                followships.
                            </p>
                            <p>
                                В случае, когда у вас две сущности одного класса, которые как-то
                                относятся друг к другу, или когда в описании класса вы ссылаетесь
                                дважды на один и тот же тип сущностей, как в случае с followships,
                                вы должны будете указать название ячейки текстом напрямую в коде.
                            </p>
                            <p>Для этого мы создадим промежуточный класс Followship:</p>
                            <Pre>{code2}</Pre>
                            <p>
                                Таким образом, в серверной части существует три типа связей между
                                сущностями:
                            </p>
                            <ul>
                                <li>
                                    Тип связи one-to-many - как в случае с пользователем и его
                                    постами, когда с одной сущностью может быть связано несколько
                                    записей в другой таблице. <br />
                                    Post has one user <br />
                                    User has many posts
                                </li>
                                <li>
                                    One-to-one - когда одна запись в таблице соответствует одной
                                    записи в другой таблице
                                </li>
                                <li>
                                    Many-to-many - когда нескольким записям в одной таблице
                                    соответствует несколько записей в другой. Этот тип требует
                                    дополнительных таблиц, где данные будут разбиты по принципу
                                    one-to-many. <br />
                                    Follower has many Followees. <br />
                                    Followee has many Followers.
                                </li>
                            </ul>
                        </Section.Main>
                    </Section.Block>

                    <Assignment id='ru/27' />
                </Expand>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <h2>Функции добавления и чтения записей в базах данных</h2>
                <p>
                    Внутри наследуемого класса <b>ActiveRecord</b> будут храниться статические
                    функции, которые позволяют непосредственно читать и изменять данные из таблиц в
                    базе данных.
                </p>
                <p>
                    Представим, что мы хотим создать новый пост. Вот как будет выглядеть эта функция
                    на стороне сервера.
                </p>
                <Pre value={code3} />
                <p>
                    Здесь сервер получит <HL color='green'>набор параметров поста</HL> (данные,
                    которые пользователь ввел в форму на клиенте) и, вызвав автоматическую функцию{' '}
                    <b>create</b> класса ActiveRecord, создаст экземпляр поста и сохранит его в свою
                    базу данных. Фактически класс ActiveRecord позволяет нам не писать SQL запрос
                    INSERT (добавления строки в базу данных), а произвести операцию автоматически,
                    через наследуемые функции класса.
                </p>
                <p>
                    <b>Еще один пример:</b>
                </p>
                <Pre>
                    @post = Post.<HL color='red'>find</HL>(params[
                    <HL color='light-sky-blue'>:id</HL>])
                </Pre>
                <p>
                    Здесь сервер получил от клиента параметры, в частности,{' '}
                    <HL color='light-sky-blue'>id</HL> и, с помощью функции{' '}
                    <HL color='red'>find</HL> (унаследована вместе с ActiveRecord) он сделает запрос
                    SELECT и найдет в таблице Post все посты с таким user id.
                </p>
                <p>
                    Если мы изменяем конкретный пост, то статическая функция <b>update</b> класса
                    ActiveRecord произведет SQL запрос UPDATE в базу данных и заменит значения на{' '}
                    <HL color='orange' inline={3}>
                        полученные от клиента параметры
                    </HL>
                    :
                </p>
                <Pre>
                    @post = current_user.posts.find(params[:id]) <br />
                    @post.attributes = <HL color='orange'>post_params</HL> <br />@
                    <HL color='light-sky-blue'>post.save</HL>
                </Pre>
                <p>Резюмируя отличия описания model классов на сервере, можно отметить, что:</p>
                <ul>
                    <li>
                        класс на сервере создается на основании описания составляющих, указанных в
                        БД (например, у Like появится “составляющая” post_id).
                    </li>
                    <li>
                        мы также описываем класс через то, с какими другими сущностями программы он
                        связан. То есть, в отличие от описания структурного класса на клиенте, на
                        сервере мы описываем связи между таблицами (как пользователи связаны с
                        постами).
                    </li>
                    <li>
                        эти связи нужны, чтобы в коде мы могли в одной строке написать команды,
                        обращаясь к функциям и составляющим классов в обход SQL запросов, как в
                        примере ниже:
                    </li>
                </ul>
                <Pre>
                    @posts = Post.preload(:comments).where(user: users).order('created_at desc')
                </Pre>
            </Section.Main>
        </Section.Block>
    </Section>
);
