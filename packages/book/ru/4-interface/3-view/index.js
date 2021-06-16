import React from 'react';
import { Section } from '@sc/ui';
import { Assignment, Quiz } from '../../../components';
import PostView from './PostView';
import PostCreate from './PostCreate';

export default () => (
    <>
        <Section>
            <PostView />
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Как вы видите, составляющие в файле отображения могут отличаться от
                        составляющих, которые мы перечислили в структурном описании того или иного
                        класса. Это связано с тем, что у них разные задачи. Файлы интерфейса
                        описывают составляющие, которые необходимы пользователю для взаимодействия с
                        программой или отображения каких-либо данных, которыми мы хотим с ним
                        поделиться (количетсво followers, списки комментариев к конкретному посту и
                        т.п).
                    </p>
                </Section.Main>
            </Section.Block>
            <PostCreate />
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Хотя названия составляющих очень похожи на названия основных классов
                        программы, в них обычно также есть название элемента отображения, которым
                        они будут представлены. Это может быть поле ввода (field), как в случае с
                        текстом поста, кнопка (button) или счетчик отмеченных людей/полученных
                        лайков. В отличие от структурного файла, где мы описываем классы объектов в
                        общем виде, в интерфейсе эти составляющие будут видны всегда, поэтому мы
                        должны тщательно обдумывать, что именно мы хотим показать пользователю и как
                        он будет с этим взаимодействовать.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>
        <Quiz
            number={8}
            href='https://docs.google.com/forms/d/e/1FAIpQLSes8wiuwJBig7RH1-mXAKVApqxGKbu2QYZ7YrQkWzr34Jk4UQ/viewform?usp=sf_link'
        >
            Разбор экрана: из чего состоит view
        </Quiz>
        <Assignment
            number={5}
            href='https://docs.google.com/forms/d/e/1FAIpQLSc9-3_FXw4SG82oQGaB_UXTSh7NPOqxC-1zfgtvA2gMEpPnSA/viewform?usp=sf_link'
        >
            Опишите, из чего состоит экран профиля пользователя (списком)
        </Assignment>
    </>
);
