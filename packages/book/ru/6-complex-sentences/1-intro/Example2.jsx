import React from 'react';
import { Callout, Grid, HL, Hint, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>Еще один пример:</b>
                </p>
                <p>
                    В приложении мы хотим вывести на экран текст последнего комментария к последнему
                    посту из ленты постов конкретного User’a.
                </p>
            </Section.Main>
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
                        <HL color='light-sky-blue'>Комментарий</HL> к последнему посту из ленты
                        постов конкретного User’a, который начинается с{' '}
                        <HL color='plum'>имени пользователя</HL>, оставившего комментарий, а далее,
                        через знак пробела, идет <HL color='orange'>полный текст комментария</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <pre className={s.code}>
                            <HL color='light-sky-blue'>comment</HL> =<HL color='wheat'>my_feed</HL>.
                            <Hint>
                                <HL color='red'>GetLatest</HL>
                                <HL color='green'>Post</HL>
                                <Hint.Tooltip>
                                    Функция GetLatestPost() всегда возвращает Post
                                </Hint.Tooltip>
                            </Hint>
                            ().GetLatestComment().GetUser().
                            <HL color='plum'>username</HL>{' '}
                            <Hint>
                                + " " +
                                <Hint.Tooltip>
                                    Знак "+" - это союз, он делает то же, что и в математике,
                                    соединяет между собой любые две сущности. В этом случае мы
                                    добавляем +, чтобы связать имя пользователя и комментарий и
                                    записать их в одну строчку
                                </Hint.Tooltip>
                            </Hint>{' '}
                            my_feed.
                            <HL color='aquamarine'>GetLatestPost</HL>().
                            <HL color='aquamarine'>GetLatestComment</HL>().
                            <HL color='orange'>text</HL>
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <HL.Context active>
                        Получается, что, имея{' '}
                        <Term id='instance'>объект (экземпляр) класса Feed</Term>,{' '}
                        <HL color='wheat'>сохраненный в переменной my_feed</HL>, вы можете в той же
                        строке обратиться к его <HL color='red'>функции GetLatest</HL>
                        <HL color='green'>Post</HL>(). Понимая, что эта функция вернет{' '}
                        <HL color='green'>объект класса Post, определенного в функции</HL>, вы
                        можете сразу обратиться к <HL color='aquamarine'>функциям</HL>{' '}
                        <HL color='green'>класса этого объекта</HL>{' '}
                        <HL color='aquamarine'>GetLatestComment</HL>().
                    </HL.Context>
                </p>
                <p>
                    Таким образом, в упрощенном виде запись сложноподчиненных предложений будет
                    выглядеть так:
                </p>
                <p>
                    переменная . (через точку) обращение к составляющим/функциям экземпляра класса,
                    который мы получим в результаты исполнения функции.
                </p>
                <Callout>
                    Так как функции не всегда будут названы так прозрачно и читаемо, как в примере
                    выше, вы можете найти описание функции, кликнув по названию правой кнопкой мыши
                    (или сделать command+click). В большинстве спец редакторов это вернет вас к
                    описанию функции, где можно проверить значение, которое она{' '}
                    <HL color='aquamarine' active>
                        передает/возвращает
                    </HL>
                    .
                </Callout>
                <p>
                    Как и в случае с текстом, мы могли бы записать предложение выше несколькими
                    короткими простыми предложениями (см. таблицу), и это бы никак не отразилось на
                    эффективности работы программы, не упростило/усложнило бы задачу для машины.
                    Выбор типа записи за вами. Выбирайте то, что будет легче читать и вам, и тем,
                    кто увидит этот код впервые. Работая с кодом, большую часть времени мы тратим на
                    поиск ошибок.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>
                            Описание того, как получить текст последнего комментария к последнему
                            посту пользователя
                        </b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>
                    <Grid.Cell border='right'>
                        Комментарий к последнему посту из ленты постов конкретного User’a, который
                        начинается с имени пользователя, оставившего комментарий, а далее, через
                        знак пробела, идет полный текст комментария
                    </Grid.Cell>
                    <Grid.Cell>
                        <pre>
                            var comment Text <br />
                            var latestPost Post <br />
                            var latestComment Comment <br />
                            var temp Text <br />
                            <br />
                            latestPost = myUser.GetLatestPost() <br />
                            latestComment = latestPost.GetLatestComment() <br />
                            latestCommentText = latestComment.text <br />
                            comment = "Comment From myUser" + latestCommentText <br />
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
