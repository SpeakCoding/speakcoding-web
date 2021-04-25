import React from 'react';
import { Section, Structure, Task } from '@sc/ui';

export default () => (
    <Section>
        <Section.Main>
            <p>
                Вот как можно было бы попробовать его описать. Инстаграм состоит в первую очередь из
                двух основных лент. Лента Постов и Лента Сториз.
            </p>
            <ul>
                <li>Лента Постов состоит из: Постов - Набора Постов (Set of Posts).</li>
                <ul>
                    <li>
                        Посты состоят из пользователя, картинки/видео, лайков, основного текста
                        поста и комментариев.
                    </li>
                    <ul>
                        <li>
                            Картинки состоят из: самой картинки и опционально из набора
                            упоминаний/tags.
                        </li>
                        <li>Комментарии состоят из: пользователя, текста</li>
                    </ul>
                </ul>
                <li>
                    Лента Стори состоит из: пользователя, иконки последней стори, из сета стори.
                </li>
                <ul>
                    <li>Стори состоят из времени, картинки/видео</li>
                </ul>
            </ul>
            <p>Запишем это в структурном виде:</p>
            <Structure>
                <h4>Feed</h4>
                <ul>
                    <li>Set of Posts</li>
                </ul>
                <h4>Post</h4>
                <ul>
                    <li>User</li>
                    <li>Timestamp</li>
                    <li>Image/Set of Pictures or Videos</li>
                    <li>Set of Likes</li>
                    <li>Caption</li>
                    <li>Set of Comments</li>
                </ul>
                <h4>Image</h4>
                <ul>
                    <li>Image Link</li>
                    <li>Set of Mentions</li>
                </ul>
                <h4>Comment</h4>
                <ul>
                    <li>User</li>
                    <li>Timestamp</li>
                    <li>Text</li>
                    <li>Set of Likes</li>
                    <li>(optional) Set of Replies</li>
                </ul>
                <h4>User</h4>
                <ul>
                    <li>Username</li>
                    <li>Profile Picture or Latest Story Image (if any)</li>
                </ul>
            </Structure>
            <Task>
                <h2>Quiz #1</h2>
                <Task.Button icon='question'>Complete quiz</Task.Button>
            </Task>
        </Section.Main>
        <Section.Side />
    </Section>
);