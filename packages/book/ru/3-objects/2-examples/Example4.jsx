import React from 'react';
import { Code, Grid, Hint, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `class [[Post]](orange _ 1) {
    [[Post]](light-sky-blue _ 1)([[inputUser User, inputImage Image, inputText Text]](aquamarine _ 1)) {
        [[self.time = System.CurrentTime()]](plum _ 1)
    }
}`;

export default () => (
    <Section.Block>
        <Section.Main>
            <p>
                <b>Пример:</b> <Term id='component'>Составляющая</Term> Time может быть создана в
                момент проверки компьютером своих часов.
            </p>
            <Grid cols='36% 1fr'>
                <Grid.Cell border='right bottom'>
                    <b>Описание функции словами</b>
                </Grid.Cell>
                <Grid.Cell border='bottom'>
                    <b>Как это выглядит в коде</b>
                </Grid.Cell>
                <Grid.Cell border='right'>
                    Функция класса{' '}
                    <HL color='orange' active inline={3}>
                        Пост
                    </HL>
                    , которая вызывается при создании конкретного Поста,{' '}
                    <HL color='plum' active inline={3}>
                        которая использует текущее время девайса/телефона, на котором создается
                        пост, чтобы задать время создания поста
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
            <p>
                Так как в Инстаграме в описании класса Post есть составляющая Set of Comments (набор
                комментариев), и при создании поста этот Set of Comments всегда пуст, программа
                может создать его без каких либо вводных.
            </p>
            <p>
                Создание пустого набора в коде будет выглядеть как [Comments](). Используя знак
                равенства, мы должны будем поместить его в соответствующую составляющую.
            </p>
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
);
