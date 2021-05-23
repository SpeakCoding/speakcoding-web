import React from 'react';
import { Card, Code, Grid, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code1 = `func onClickCreateButton() {
    [[var newUser]](aquamarine _ 1) [[User]](light-sky-blue _ 1)
    [[newUser]](aquamarine _ 1) = new User(usernameField.text, emailField.text, passwordField.text)
        ...
    }
}`;

const code21 = `Post {
    likes []Like

    ...
\xa0`;

const code22 = `
\xa0   func addLike(user User) {
        var [[newLike]](turquoise _ 1) Like 
        [[newLike]](turquoise _ 1) = new [[Like]](orange _ 1)(user)
`;

const code23 = `\xa0
        self.likes.add(newLike)

    }
}`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Временное хранение объектов</h1>
                    <p>
                        Мы поговорили о том, как описывать то, из чего состоит наша программа (
                        <Term id='class'>классы</Term>, <Term id='component'>составляющие</Term> и{' '}
                        <Term id='property'>характеристики</Term>), как создавать конкретные{' '}
                        <Term id='instance'>объекты</Term> (экземпляры) этих классов, а также
                        разобрались, для чего нам нужны <Term id='function'>функции</Term>.
                        Компьютер и программы выполняют только те действия, которые мы для них
                        описываем. Поэтому, когда мы создаем новый <Term id='instance'>объект</Term>{' '}
                        какого-то <Term id='class'>класса</Term>или получаем новую информацию в ходе
                        выполнения функций, которую хотим позже использовать, нам нужно указать, что
                        мы хотим эту информацию сохранить. В противном случае, к следующему же
                        предложению (строке кода) она перестанет существовать, и мы не сможем
                        обратиться к этим объектам в коде.
                    </p>
                    <p>
                        <b>Есть несколько способов хранить объекты краткосрочно:</b>
                    </p>
                    <ul>
                        <li>
                            Можно использовать специальные временные контейнеры -{' '}
                            <Term id='variables'>"переменные"</Term>, в которых хранятся нужные нам
                            данные.
                        </li>
                    </ul>
                </Section.Main>
                <Section.Side />
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid cols='36% 1fr'>
                        <Grid.Cell border='right bottom'>
                            <b>Пояснения к примеру</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Пример кода</b>
                        </Grid.Cell>
                        <Grid.Cell border='right'>
                            При сохранении информации в переменную (контейнер) мы должны придумать
                            для нее{' '}
                            <HL color='aquamarine' active>
                                название
                            </HL>{' '}
                            и определить{' '}
                            <HL color='light-sky-blue' active inline={3}>
                                класс объектов, которые в ней можно хранить
                            </HL>
                            .
                        </Grid.Cell>
                        <Grid.Cell>
                            <Code value={code1} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <ul>
                        <li>
                            Объекты классов (например, конкретный экземпляр Like), которые записаны
                            как составляющие какого-то объекта другого класса (например, в Set of
                            Likes какого-то конкретного Post), будут сохранены, пока хранится этот
                            объект другого класса (этот экземпляр Post).
                        </li>
                    </ul>
                </Section.Main>
                <Section.Side />
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid cols='36% 1fr'>
                        <Grid.Cell border='right bottom'>
                            <b>Текстовое описание функции addLike</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это выглядит в коде</b>
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='bottom' />
                        <Grid.Cell dense='bottom'>
                            <Code value={code21} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense>
                            Создали{' '}
                            <HL color='orange' active>
                                Like
                            </HL>{' '}
                            и поместили его в переменную (временный контейнер){' '}
                            <HL color='turquoise' active>
                                newLike
                            </HL>
                            .
                        </Grid.Cell>
                        <Grid.Cell dense>
                            <Code value={code22} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            Добавили newLike в составляющую Likes поста (эта составляющая имеет
                            класс Набор Лайков - Set of Likes).
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
                            <Code value={code23} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        Если проводить аналогию с языком, то <Term id='variables'>переменные</Term>{' '}
                        (временные контейнеры) можно сравнить с отдельными главами во время
                        написания романа. После того, как они сложились в единое повествование, мы
                        перестаем думать об этих отдельных предложениях. Но мы всегда можем их найти
                        на конкретной странице.
                    </p>
                </Section.Main>
                <Section.Side />
            </Section.Block>
        </Section>

        <Card mode='quiz'>
            <h2>Тест №5</h2>
            <Card.Button href='#'>Пройти</Card.Button>
        </Card>
    </>
);
