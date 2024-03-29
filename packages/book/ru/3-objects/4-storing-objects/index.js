import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import { Quiz, Skill } from '../../../components';
import Term from '../../glossary/Term';

const code1 = `func onClickCreateButton() {
    {{hl:var newUser}}(aquamarine) {{hl:User}}(light-sky-blue)
    {{hl:newUser}}(aquamarine) = new User(usernameField.text, emailField.text, passwordField.text)
        ...
    }
}`;

const code21 = `Post {
    likes []Like

    ...
\xa0`;

const code22 = `
\xa0   func addLike(user User) {
        var {{hl:newLike}}(turquoise) Like 
        {{hl:newLike}}(turquoise) = new {{hl:Like}}(orange)(user)
`;

const code23 = `\xa0
        self.likes.add(newLike)

    }
}`;

export default () => (
    <>
        <Skill>
            Чтобы изменять объекты в коде, писать приложения, вам всегда нужно будет создавать
            конкретные экземпляры (объекты) класса.
        </Skill>
        <Quiz id='ru/4' />

        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Временное хранение объектов</h1>
                    <p>
                        Мы поговорили о том, как описывать то, из чего состоит наша программа (
                        <Term id='class'>классы</Term>, <Term id='component'>составляющие</Term> и{' '}
                        <Term id='property'>характеристики</Term>), как создавать конкретные{' '}
                        <Term id='instance'>объекты</Term> (экземпляры) этих классов, а также
                        разобрались, для чего нам нужны <Term id='function'>функции</Term>.
                        Компьютер и программы выполняют только те действия, которые мы для них
                        описываем. Поэтому, когда мы создаем новый <Term id='instance'>объект</Term>{' '}
                        какого-то <Term id='class'>класса</Term> или в ходе выполнения функций
                        получаем новую информацию, которую хотим позже использовать, нужно указать,
                        что мы хотим эту информацию сохранить. В противном случае, к следующему же
                        предложению (строке кода) она перестанет существовать, и мы не сможем
                        обратиться к этим объектам в коде.
                    </p>
                    <p>
                        <b>Есть несколько способов хранить объекты краткосрочно:</b>
                    </p>
                    <ul>
                        <li>
                            Можно использовать специальные временные контейнеры -{' '}
                            <Term id='variable' tooltip>
                                "переменные"
                            </Term>
                            .
                        </li>
                    </ul>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid cols='36% 1fr'>
                        <Grid.Cell border='right bottom'>
                            <b>Пояснения к примеру</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это выглядит в коде</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            При сохранении информации в переменную (контейнер) мы должны придумать
                            для нее <HL color='aquamarine'>название</HL> и определить{' '}
                            <HL color='light-sky-blue'>
                                класс объектов, которые в ней можно хранить
                            </HL>
                            .
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <Code value={code1} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <ul>
                        <li>
                            Объекты классов (например, конкретный экземпляр Like), которые записаны
                            как составляющие какого-то объекта другого класса (например, в Set of
                            Likes какого-то конкретного Post), будут сохранены, пока хранится этот
                            объект другого класса (этот экземпляр Post).
                        </li>
                    </ul>
                </Section.Main>
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

                        <Grid.Cell border='right' dense hlactive>
                            Создали <HL color='orange'>Like</HL> и поместили его в переменную
                            (временный контейнер) <HL color='turquoise'>newLike</HL>.
                        </Grid.Cell>
                        <Grid.Cell dense hlactive>
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
                <Section.Main narrow>
                    <p>
                        Если проводить аналогию с языком, то <Term id='variable'>переменные</Term>{' '}
                        (временные контейнеры) можно сравнить с отдельными главами во время
                        написания романа. После того, как они сложились в единое повествование, мы
                        перестаем думать о них как об отдельных частях. Но мы всегда можем их найти
                        на конкретной странице.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Quiz id='ru/5' />
    </>
);
