import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import s from './style.css';

const code6 = `
private {{hl:func}}(orange) {{hl:updateLikes}}(sandy-brown)() {
    let likerFollowee = {{hl:self.post}}(light-sky-blue).{{hl:likerFollowee}}(green)
    self.{{hl:likerFolloweeProfilePictureView}}(plum).showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)
    {{hl:if likerFollowee != nil}}(red) {
        let textTemplate = (self.post.{{hl:numberOfLikes > 1}}(aquamarine)) ? {{hl:"Liked by {user} and {others}" : "Liked by {user}"}}(wheat)
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>Прерывание</h2>
                <p>
                    Прерывание используется, когда нам нужно перестать читать абзац или передать
                    (вернуть/return) значение функции, выполненной внутри абзаца.
                </p>
                <p>
                    Слова <b>break/continue/return</b> используются в коде для обозначения
                    прерывания списка действий, которые описаны в абзаце:
                </p>
                <p>
                    <b>Break</b> - перестать делать вообще цикл. <br />
                    <b>Continue</b> - перестать делать данное повторение и начать снова. <br />
                    Первые два используются только в описании циклов, а <b>return</b> только для
                    функций.
                </p>
                <p>
                    <b>Вот несколько примеров:</b>
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        Показать только комментарии с ответами
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <pre>
                            <b>for</b> comment in comments {'{'} <br />
                            {'    '}
                            <b>if</b> comment.replies.count == 0 {'{'} <br />
                            {'        '}
                            <b>continue</b> <br />
                            {'    }'} <br />
                            {'    '}comment.display() <br />
                            {'}'}
                        </pre>
                    </Grid.Cell>
                    <Grid.Cell border='right'>Найти первый комментарий с ответами</Grid.Cell>
                    <Grid.Cell>
                        <pre>
                            var firstCommentWithReplies: Comment? <br />
                            <b>for</b> comment in comments {'{'} <br />
                            {'    '}
                            <b>if</b> comment.replies.count > 0 {'{'} <br />
                            {'        '}firstCommentWithReplies = comment <br />
                            {'        '}
                            <b>break</b> <br />
                            {'    }'} <br />
                            {'}'}
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Если мы используем слово break/continue в абзаце-условии, оно будет относиться
                    ко всему абзацу-циклу.
                </p>
                <p>
                    Return аналогичен break, но для функций. Если функция ничего не должна
                    передавать, то после return ничего не пишется. Если есть конкретное значение,
                    которое мы должны вернуть для использования в коде дальше, то после return
                    пишется переменная, содержащая это значение/объект какого-то класса.
                </p>
                <p>
                    <b>Пример</b>: Найти и отобразить лайки твоих друзей под конкретным постом в
                    Инстаграм.
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
                        <HL color='orange'>Функция</HL> <HL color='sandy-brown'>Обновить Лайки</HL>,
                        которая проверит, есть ли среди лайков к{' '}
                        <HL color='light-sky-blue'>конкретному посту</HL>{' '}
                        <HL color='green'>лайки друзей юзера</HL>, который читает этот пост. <br />
                        <br />
                        <HL color='red'>Если есть</HL>,{' '}
                        <HL color='plum'>отобразит фото их профилей</HL>{' '}
                        <HL color='wheat'>
                            с надписью "Liked by {'{user}'}" или “Liked by [user] and others”
                        </HL>
                        ,<HL color='aquamarine'>если таких лайков больше одного</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <div className={s.code}>
                            <Code value={code6} />
                        </div>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
