import React from 'react';
import { HL, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import Addition from './Addition';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h1>Как это переходит в код</h1>
                <p>
                    Представим, что у нас уже описаны классы, отвечающие за отображение и работу
                    основных элементов интерфейса. Например, класс кнопки Button или надписи Label.
                    Подобные классы вам не придется писать с нуля, чаще всего вы будете использовать
                    стандартные классы - говоря в общем, это классы, которые уже были где-то
                    описаны.
                </p>
                <p>
                    Для отображения поста, мы создаем файл PostFeedView, в программе это выглядит
                    как чистое поле - квадрат “холста”, на котором будут “отрисованы” другие
                    элементы интерфейса поста.
                </p>
                <p>
                    Сначала запишем составляющие PostFeedView с названиями элементов отображения,
                    которыми они будут представлены. Как видите, все они - стандартные классы label,
                    button и др.:
                </p>
                <Pre>
                    <HL.Context active>
                        <HL color='orange'>profilePictureView</HL>: Image <br />
                        <HL color='orange'>userNameLabel</HL>: Label <br />
                        <HL color='orange'>userLocationLabel</HL>: Label <br />
                        <HL color='orange'>postImageView</HL>: Image <br />
                        <HL color='orange'>likeButton</HL>: Button <br />
                        <HL color='orange'>commentButton</HL>: Button <br />
                        <HL color='orange'>bookmarkButton</HL>: Button <br />
                        <HL color='orange'>showLikersButton</HL>: Button <br />
                        <HL color='orange'>likerFolloweeProfilePictureView</HL>: Image <br />
                        <HL color='orange'>likesLabel</HL>: Label <br />
                        <HL color='orange'>captionLabel</HL>: Label <br />
                        <HL color='orange'>commentCountLabel</HL>: Label <br />
                        <HL color='orange'>postDateLabel</HL>: Label
                    </HL.Context>
                </Pre>
                <p>
                    Как мы сказали, эти классы уже были где-то описаны и обычно импортируются вместе
                    с библиотеками языка, на котором пишется программа. Для создания приложений на
                    iPhone, например, вы сможете использовать библиотеку элементов интерфейса под
                    названием{' '}
                    <Term id='ui-kit' tooltip>
                        UIKit
                    </Term>{' '}
                    - User Interface Kit - и, помимо стандартных элементов отображения - кнопки,
                    лейбла, счетчика, включает в себя их сочетания - таблицы, колонки, ячейки. Чуть
                    позже мы расскажем о работе с библиотеками подробнее, а пока вы можете
                    представить, что это набор описаний, который мы импортировали в код и при
                    необходимости можем менять.
                </p>
            </Section.Main>
        </Section.Block>

        <Addition />
    </Section>
);
