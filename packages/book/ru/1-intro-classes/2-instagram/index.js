import React from 'react';
import { Section, Structure } from '@sc/ui';
import { Quiz } from '../../../components';
import { interceptor, InterceptorView } from '../../../phone';
import HL from '../../../common/1/post-highlight';

export default () => (
    <>
        <Section>
            <Section.Main>
                <InterceptorView onEnter={interceptor.open} onExit={interceptor.close}>
                    <p>
                        Вот как можно было бы попробовать его описать. Инстаграм состоит в первую
                        очередь из двух основных лент: Ленты Постов и Ленты Сториз.
                    </p>
                    <ul>
                        <li>Лента Постов состоит из Набора Постов (Set of Posts).</li>
                        <ul>
                            <li>
                                Посты состоят из <HL c='red'>пользователя</HL>,{' '}
                                <HL c='aquamarine'>картинки/видео</HL>,{' '}
                                <HL c='steel-blue'>лайков</HL>,{' '}
                                <HL c='grey'>основного текста поста</HL> и{' '}
                                <HL c='orange'>комментариев</HL>.
                            </li>
                            <ul>
                                <li>
                                    <HL c='aquamarine'>Картинки</HL> состоят из: самой картинки и
                                    опционально из набора упоминаний/tags.
                                </li>
                                <li>
                                    <HL c='orange'>Комментарии</HL> состоят из: пользователя, текста
                                </li>
                            </ul>
                        </ul>
                        <li>
                            Лента Сториз состоит из: пользователя, иконки последней стори, из сета
                            стори.
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
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section>

        <Quiz id='ru/1' />
    </>
);
