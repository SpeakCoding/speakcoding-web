import React from 'react';
import { Img, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import { Time } from '../../../components';
import img from './post-people.svg';

export default () => (
    <Section>
        <Section.Main>
            <h1>Функции и зачем они нужны</h1>
            <Time.Chapter value='~25 мин' />
            <p>
                Давайте предположим, что мы хотим лайкнуть пост. На языке кода это действие звучит
                как “добавить лайк к конкретному посту”. Чтобы программа могла это сделать, ей нужно
                произвести определенную последовательность действий. Их список будет таким:
            </p>
            <ol>
                <li>Определить конкретный пост</li>
                <li>Посмотреть количество лайков этого поста</li>
                <li>Создать новый лайк от конкретного пользователя</li>
                <li>Добавить этот лайк к общему количеству лайков</li>
                <li>Сохранить/передать новое количество лайков.</li>
            </ol>
            <p>
                Так как мы постоянно лайкаем посты в Инстаграме, чтобы не переписывать эти действия
                в коде снова и снова, в программировании используют функции. Функция похожа на
                припев в песне: вместо того, чтобы переписывать строчки припева, мы записываем эти
                слова в константу.
            </p>
            <p>
                Функции используются для того, чтобы описать то, что можно делать с экземплярами
                классов. Что еще можно делать с постами, кроме как лайкать? Например, пересылать или
                сохранять. При описании <Term id='class'>класса</Term> Постов вы можете задать{' '}
                <Term id='function'>функцию</Term>, которая позволит изменить текст этого поста, или
                сообщит, сколько раз этот пост был сохранен.
            </p>
            <p>
                Другими словами, с помощью <Term id='function'>функций</Term> мы можем изменять{' '}
                <Term id='instance'>экземпляр класса</Term> или узнавать состояние этого экземпляра.
            </p>
        </Section.Main>
        <Section.Side>
            <Section.Sticky>
                <Img src={img} width={474} height={454} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
