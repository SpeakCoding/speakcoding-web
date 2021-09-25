import React from 'react';
import { Code, Grid, Hint, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `class {{hl:Post}}(orange) {
    {{hl:Post}}(light-sky-blue)({{hl:inputUser User, inputImage Image, inputText Text}}(aquamarine)) {
        {{hl:self.time = System.CurrentTime()}}(plum)
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>Пример:</b> <Term id='component'>Составляющая</Term> Time может быть создана
                    в момент проверки компьютером своих часов.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Описание функции словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        Функция класса <HL color='orange'>Пост</HL>, которая вызывается при создании
                        конкретного Поста,{' '}
                        <HL color='plum'>
                            которая использует текущее время девайса/телефона, на котором создается
                            пост, чтобы задать время создания поста
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Так как в Инстаграме в описании класса Post есть составляющая Set of Comments
                    (набор комментариев), и при создании поста этот Set of Comments всегда пуст,
                    программа может создать его без каких либо вводных.
                </p>
                <p>
                    Создание пустого набора в коде будет выглядеть как [Comments](). Используя знак
                    равенства, мы должны будем поместить его в соответствующую составляющую.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right' />
                    <Grid.Cell>
                        <pre>
                            var comments = [Comment]
                            <Hint>
                                ()
                                <Hint.Tooltip>
                                    Можно записать создание набора через функцию init, а можно в
                                    описании класса через знак равно
                                </Hint.Tooltip>
                            </Hint>
                        </pre>
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
