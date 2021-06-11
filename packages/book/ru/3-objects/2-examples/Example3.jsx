import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `
class [[Post]](orange) {
    [[Post]](light-sky-blue)([[inputUser User, inputImage Image, inputText Text]](aquamarine)) {
        [[self.user = inputUser]](plum)
        [[self.image = inputImage]](plum)
        [[self.text = inputText]](plum)  
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>Еще пример:</b> в случае создания конкретного Поста нам понадобятся уже
                    заранее созданные <b>User</b>, <b>Image</b> и <b>Caption</b> Поста, которые
                    будут переданы как вводные в функцию-конструктор Post.
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
                        Функция класса <HL color='orange'>Пост</HL>, которая вызывается при создании{' '}
                        <HL color='light-sky-blue'>конкретного Поста</HL>, для которой{' '}
                        <HL color='aquamarine'>
                            указывается пользователь, создающий пост, картинка и текст этого поста
                        </HL>
                        ,{' '}
                        <HL color='plum'>
                            которая использует эти вводные, чтобы задать соответствующие
                            составляющие этого экземпляра (объекта)
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
                    Некоторые <Term id='component'>составляющие</Term> не обязательно должны быть
                    созданы заранее, они могут быть созданы в момент создания{' '}
                    <Term id='instance'>экземпляра</Term> - через добавление соответствующего
                    действия в функцию-конструктор.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
