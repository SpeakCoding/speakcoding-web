import React from 'react';
import { Code, Grid, Hint, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `
\xa0   [[Post]](light-sky-blue _ 1)([[inputUser User, inputImage Image, inputText Text]](aquamarine _ 1)) {
        [[self.user = inputUser]](plum _ 1)
        [[self.image = inputImage]](plum _ 1)
        [[self.text = inputText]](plum _ 1)  
    }
}`;

export default () => (
    <Section.Block>
        <Section.Main>
            <p>
                <b>Еще пример:</b> в случае создания конкретного Поста нам понадобятся уже заранее
                созданные <b>User</b>, <b>Image</b> и <b>Caption</b> Поста, которые будут переданы
                как вводные в функцию-конструктор Post.
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
                    , которая вызывается при создании{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        конкретного Поста
                    </HL>
                    , для которой{' '}
                    <HL color='aquamarine' active inline={3}>
                        указывается пользователь, создающий пост, картинка и текст этого поста
                    </HL>
                    ,{' '}
                    <HL color='plum' active inline={3}>
                        которая использует эти вводные, чтобы задать соответствующие составляющие
                        этого экземпляра (объекта)
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <pre>
                        class{' '}
                        <Hint>
                            <HL color='orange' active inline={3}>
                                Post
                            </HL>
                            <Hint.Tooltip>
                                In Javascript init function's title repeats the name of the class.
                                You can find titles of these functions for each language on the
                                Internet
                            </Hint.Tooltip>
                        </Hint>{' '}
                        {'{'}
                    </pre>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
            <p>
                Некоторые <Term id='component'>составляющие</Term> не обязательно должны быть
                созданы заранее, они могут быть созданы в момент создания{' '}
                <Term id='instance'>экземпляра</Term> - через добавление соответствующего действия в
                функцию-конструктор.
            </p>
        </Section.Main>
    </Section.Block>
);
