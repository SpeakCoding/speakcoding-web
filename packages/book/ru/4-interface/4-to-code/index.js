import React from 'react';
import { Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import Addition from './Addition';

const code1 = `
profilePictureView: Image 
userNameLabel: Label 
userLocationLabel: Label 
postImageView: Image 
likeButton: Button 
commentButton: Button 
bookmarkButton: Button 
showLikersButton: Button 
likerFolloweeProfilePictureView: Image 
likesLabel: Label 
captionLabel: Label 
commentCountLabel: Label 
postDateLabel: Labels`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h1>Как это переходит в код</h1>
                <p>
                    Большинство классов, отвечающих за отображение и работу основных элементов
                    интерфейса, например, кнопки (Button) или надписи (Label), являются стандартными
                    и уже были где-то описаны. Подобные классы вам не придется писать с нуля.
                    Давайте разберем это на примере файла PostFeedView, который мы создаем для
                    отображения поста. В программе это выглядит как чистое поле - квадрат “холста”,
                    на котором будут “отрисованы” другие элементы интерфейса поста.
                </p>
                <p>
                    Для отображения поста, мы создаем файл PostFeedView, в программе это выглядит
                    как чистое поле - квадрат “холста”, на котором будут “отрисованы” другие
                    элементы интерфейса поста.
                </p>
                <p>
                    Сначала запишем составляющие PostFeedView с названиями элементов отображения,
                    которыми они будут представлены. Как видите, все они - стандартные классы:
                    label, button и др.:
                </p>
                <Pre>{code1}</Pre>
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
                    представить, что это набор описаний, который мы импортировали в код, и при
                    необходимости можем менять.
                </p>
            </Section.Main>
        </Section.Block>

        <Addition />
    </Section>
);
