import React from 'react';
import { Img, Section, Structure } from '@sc/ui';
import { Assignment } from '../../../components';
import img from './class-tweet.svg';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Мы немного упрощаем запись. Если вы откроете приложение, ваше внимание может
                        привлечь какой-то другой элемент интерфейса программы. Позже в курсе мы
                        расскажем, чем отличается описание основных составляющих программы от того,
                        что видит перед собой пользователь.
                    </p>
                    <p>
                        Чтобы глубже погрузиться в логику составления описаний, давайте разберем
                        структурную запись еще нескольких программ, которыми вы возможно
                        пользуетесь.
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <h2>Twitter (мобильное приложение)</h2>
                    <p>Как и Инстаграм, Twitter состоит из Ленты Сообщений-Твиттов.</p>
                    <Structure>
                        <h4>Feed</h4>
                        <ul>
                            <li>Set of Tweets</li>
                        </ul>
                        <h4>Tweet</h4>
                        <ul>
                            <li>User</li>
                            <li>Text</li>
                            <li>Time</li>
                            <li>Set of Retweets</li>
                            <li>Set of Replies</li>
                            <li>Set of Likes</li>
                            <li>Set of Shares</li>
                            <li>Picture/GIF</li>
                            <li>Location</li>
                        </ul>
                        <h4>User</h4>
                        <ul>
                            <li>Profile Picture</li>
                            <li>Username</li>
                        </ul>
                    </Structure>
                    <p>
                        Как видите, структура очень похожа и строится вокруг того, что является
                        основным элементом программы. Инстаграм - это социальная сеть для публикации
                        и обмена фотографиями и видео. Он строится вокруг постов с картинками/видео.
                        Твиттер - социальный сервис обмена мыслями и новостями в коротком формате,
                        строится вокруг сообщений-твиттов.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky center>
                        <Img src={img} width={392} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Давайте посмотрим на еще один <b>пример - мобильное приложение Venmo</b>.
                        Это социальный сервис обмена быстрыми платежами. Его основным элементом,
                        “основной” составляющей будет транзакция. Вот как могло бы выглядеть его
                        описание в структурном виде:
                    </p>
                    <Structure>
                        <h4>Transaction Feed</h4>
                        <ul>
                            <li>Set of transactions</li>
                        </ul>
                        <h4>Transactions</h4>
                        <ul>
                            <li>User</li>
                            <li>Payee</li>
                            <li>Date</li>
                            <li>Caption</li>
                            <li>Amount Paid</li>
                        </ul>
                        <h4>User</h4>
                        <ul>
                            <li>Profile Pic</li>
                            <li>Username</li>
                            <li>Personal QR code</li>
                            <li>Balance</li>
                        </ul>
                    </Structure>
                    <p>
                        Важно помнить, что в структурное описание приложения входит не все то, что
                        вы видите у себя на экране, в интерфейсе программы. При составлении
                        структурного описания мы должны ориентироваться на то, вокруг чего построена
                        программа - аудиофайлов, которые можно сохранять, объединять в наборы
                        (альбомы), платежей, переходящих от пользователя к пользователю, или
                        сообщений, которыми мы обмениваемся. Мы поговорим об этом еще раз в описании
                        задания ниже.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='ru/1' />
    </>
);
