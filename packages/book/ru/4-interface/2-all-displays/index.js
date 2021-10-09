import React from 'react';
import { Button, Expand, Img, Section, Structure } from '@sc/ui';
import { Assignment, Quiz } from '../../../components';
import img1 from './instagram-1.png';
import img2 from './instagram-2.png';
import img3 from './instagram-3.png';
import img4 from './instagram-4.png';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Все отображения поста</h1>
                    <p>
                        Как мы уже говорили, каждая основная сущность в коде программы будет иметь
                        несколько вариантов описания: <b>структурное</b> и то, которое отвечает за
                        ее <b>отображение в интерфейсе программы</b>. В файлах отображения также
                        будет описана логика взаимодействия пользователя с программой и макет
                        расположения разных элементов отображения на экране.
                    </p>
                    <p>
                        Давайте поговорим об этом подробнее на примере постов. Мы можем найти два
                        отображения постов: один большой в ленте, второй маленький внутри сетки в
                        профиле пользователя. Соответственно, нам нужно будет создать два класса для
                        каждого из этих отображений.
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <div className={s.tiles}>
                        <div className={s.tile}>
                            <h2 className={s.title}>
                                PostFeedView (то, как отдельный пост отображается в ленте постов)
                            </h2>
                            <Img src={img1} width='100%' />
                        </div>

                        <div className={s.tile}>
                            <h2 className={s.title}>
                                PostTileView (то, как посты отображаются в профиле пользователя)
                            </h2>
                            <Img src={img2} width='100%' />
                        </div>
                    </div>

                    <p>
                        Кроме того, отдельные экраны и, соответственно, классы понадобятся для
                        создания и редактирования поста.
                    </p>

                    <div className={s.tiles}>
                        <div className={s.tile}>
                            <h2 className={s.title}>PostComposerViewController</h2>
                            <Img src={img3} width='100%' />
                        </div>

                        <div className={s.tile}>
                            <h2 className={s.title}>PostEditorController</h2>
                            <Img src={img4} width='100%' />
                        </div>
                    </div>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Все эти экраны - View-Compose-Edit - являются стандартными классами
                        отображения для всех основных сущностей программы и обычно называются
                        согласно тому, как их видит пользователь. Хранится в коде они будут
                        отдельными файлами с соответствующими названиями.
                    </p>
                    <p>
                        В классах отображения мы перечисляем,{' '}
                        <i>
                            какие составляющие объекта мы должны показать пользователю, и то{' '}
                            <Expand.Control htmlFor='2-2-1'>
                                <Button variant='rounded'>как ⤵</Button>
                            </Expand.Control>
                            будут отображаться эти данные о конкретном объекте, например, об этом
                            посте
                        </i>
                        .
                    </p>
                    <Expand id='2-2-1'>
                        В случае с PostFeedView мы добавим в класс отображения “сердечко”, которое
                        подсветится, если юзер лайкнул этот пост и количество комментариев, которые
                        набрал конкретный пост.
                    </Expand>
                    <p>
                        Также{' '}
                        <Expand.Control htmlFor='2-2-2'>
                            <Button variant='rounded'>в классах отображения ⤵</Button>
                        </Expand.Control>{' '}
                        мы перечисляем{' '}
                        <i>
                            элементы, которые необходимы для того, чтобы производить какие-либо
                            действия с объектами классов
                        </i>
                        : создавать новый Post, редактировать username в своем профиле пользователя
                        или лайкать комментарий.
                    </p>
                    <Expand id='2-2-2'>
                        Например, для <i>экрана создания поста</i> - PostComposerView - мы должны
                        будем отобразить поле для загрузки картинки, добавления текста, выбора
                        геолокации, поле ввода комментария и так далее.
                    </Expand>
                    <p>
                        Давайте посмотрим, какие еще составляющие есть у поста, которые нам хотелось
                        бы показать пользователю:
                    </p>
                    <Structure>
                        <h4>Post</h4>
                        <ul>
                            <li>User</li>
                            <li>Time</li>
                            <li>Image</li>
                            <li>Set of Pictures</li>
                            <li>or Video</li>
                            <li>Set of Likes</li>
                            <li>Caption</li>
                            <li>Set of Comments</li>
                        </ul>
                    </Structure>
                    <p>
                        В уже перечисленных view файлах мы отобразили не все комментарии и лайки из
                        набора, только их количество. Так как эти наборы могут быть достаточно
                        большими, нам понадобится отдельный view для того, чтобы их показать. Если
                        вы посмотрите на комментарии к любому посту, вы увидите, что во время
                        просмотра перейдете на отдельный экран. Для этого мы должны будем создать
                        еще один класс, который условно можем назвать CommentsView. Такой же
                        отдельный экран вы увидите, если захотите посмотреть все лайки поста
                        (LikesView).
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Quiz id='ru/7' />

        <Assignment id='ru/4' />
    </>
);
