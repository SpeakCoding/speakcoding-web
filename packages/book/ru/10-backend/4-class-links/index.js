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
                    столбец user_id, и именно он будет использован. Тем самым, при помощи функций
                    класса <b>ActiveRecord</b> мы “свяжем” таблицу users с таблицей posts.
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
    </Section>
);
