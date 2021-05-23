import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
class [[User]](orange _ 1) {
    [[User]](light-sky-blue _ 1)([[inputUsername Text, inputEmail Text, inputPassword Text]](aquamarine _ 1 3)) {
        [[self.username = inputUsername]](plum _ 1)
        [[self.email= inputEmail]](plum _ 1)
        [[self.password= inputPassword]](plum _ 1)  
    }
}`;

export default () => (
    <Section.Block>
        <Section.Main>
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
                        User
                    </HL>
                    , которая вызывается при создании{' '}
                    <HL color='light-sky-blue' active inline={3}>
                        конкретного User
                    </HL>
                    , для которой{' '}
                    <HL color='aquamarine' active inline={3}>
                        указывается имя пользователя, его email и пароль,
                    </HL>{' '}
                    <HL color='plum' active inline={3}>
                        которая использует эти вводные, чтобы подставить значения для составляющих
                        этого экземпляра класса User
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section.Block>
);
