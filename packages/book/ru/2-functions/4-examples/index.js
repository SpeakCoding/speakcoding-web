import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Code, HL, Icon, Section } from '@sc/ui';
import s from './style.css';

const codePost = `
class Post {
    user            User
    time            Time
    image           Image
    setOfImages     []Image
    video           Video
    setOfLikes      []Like
    caption         Text
    setOfComments   []Comment`;

const codeFn1 = `
func (post* [[Post]](orange _ 1)) [[Add Like]](green _ 1)([[user User]](aquamarine _ 1)) { 
    [[new_like = new Like(user)]](plum _ 1)
    [[self.setOfLikes.add(new_like)]](plum _ 1)
}`;

const codeFn2 = `
func [[NumberOfLikes]](green _ 1)() [[Number]](light-sky-blue _ 1) { 
    [[number_of_likes = self.setOfLikes.length]](plum _ 1 3)
    [[return]](plum _ 1) [[number_of_likes]](light-sky-blue _ 1)
}`;

const CodePost = () => {
    const [expanded, setExpanded] = useState(false);

    const toggle = useCallback(event => {
        event.stopPropagation();
        setExpanded(current => !current);
    }, []);

    return (
        <div
            className={classNames(s.post, expanded && s.expanded)}
            onClick={expanded ? undefined : toggle}
        >
            <Code value={codePost} />
            <div className={s.expand} onClick={toggle}>
                <Icon name='chevron-right' size={24} />
            </div>
        </div>
    );
};

export default () => (
    <Section>
        <Section.Main>
            <h2>Примеры описания функции</h2>
            <div className={s.table}>
                <div className={s.cell}>
                    <b>Структура описания функции</b>
                </div>
                <div className={s.cell}>
                    <b>Описание функции текстом</b>
                </div>
                <div className={s.cell}>
                    <b>Описание функции кодом</b>
                </div>

                <div className={s.cell} />
                <div className={s.cell}>
                    <div className={s.hint}>
                        <span>Функции описываются там же, где класс</span>
                        <Icon name='arrow-right' size={24} />
                    </div>
                </div>

                <div className={s.cell}>
                    <CodePost />
                    <pre>...</pre>
                </div>

                <div className={s.cell}>
                    <ul>
                        <li>
                            <HL color='green' active>
                                Название
                            </HL>
                        </li>
                        <li>
                            <HL color='orange' active>
                                Класс
                            </HL>
                            , к которому она относится
                        </li>
                        <li>
                            <HL color='plum' active inline={3}>
                                Последовательность/список операций
                            </HL>
                            , которые она совершает
                        </li>
                        <li>
                            <HL color='aquamarine' active>
                                Вводные
                            </HL>
                        </li>
                        <li>
                            <HL color='light-sky-blue' active>
                                Значение
                            </HL>
                            , которое она передает
                        </li>
                    </ul>
                </div>

                <div className={s.cell}>
                    Функция класса{' '}
                    <HL color='orange' active inline={3}>
                        Пост
                    </HL>
                    , которую мы назовем{' '}
                    <HL color='green' active inline={3}>
                        “Добавить Лайк”
                    </HL>
                    , которая если ей{' '}
                    <HL color='aquamarine' active inline={3}>
                        указать пользователя
                    </HL>
                    ,{' '}
                    <HL color='plum' active inline={3}>
                        создает лайк от этого пользователя и добавляет его в список лайков этого
                        поста, и ничего не возвращает
                    </HL>
                    .
                </div>

                <div className={s.cell}>
                    <Code value={codeFn1} />
                </div>

                <div className={s.cell} />

                <div className={s.cell}>
                    Или функция класса{' '}
                    <HL color='orange' active inline={3}>
                        Пост
                    </HL>
                    , которую мы назовем{' '}
                    <HL color='green' active inline={3}>
                        “Количество Лайков”
                    </HL>
                    ,{' '}
                    <HL color='aquamarine' active inline={3}>
                        которой не указывается никаких вводных
                    </HL>
                    ,{' '}
                    <HL color='plum' active inline={3}>
                        проверяет количество лайков у поста и сообщает
                    </HL>{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        это число
                    </HL>
                    .
                </div>

                <div className={s.cell}>
                    <Code value={codeFn2} />
                </div>
            </div>
        </Section.Main>
    </Section>
);
