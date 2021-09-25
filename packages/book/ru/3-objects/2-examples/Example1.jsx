import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';

const code = `
class {{hl:User}}(orange) {
    {{hl:User}}(light-sky-blue)({{hl:inputUsername Text, inputEmail Text, inputPassword Text}}(aquamarine)) {
        {{hl:self.username = inputUsername}}(plum)
        {{hl:self.email= inputEmail}}(plum)
        {{hl:self.password= inputPassword}}(plum)  
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
                <Grid.Cell border='right' hlactive>
                    Функция класса <HL color='orange'>User</HL>, которая вызывается при создании{' '}
                    <HL color='light-sky-blue'>конкретного User</HL>, для которой{' '}
                    <HL color='aquamarine'>указывается имя пользователя, его email и пароль,</HL>{' '}
                    <HL color='plum'>
                        которая использует эти вводные, чтобы подставить значения для составляющих
                        этого экземпляра класса User
                    </HL>
                    .
                </Grid.Cell>
                <Grid.Cell hlactive>
                    <Code value={code} />
                </Grid.Cell>
            </Grid>
        </Section.Main>
    </Section.Block>
);
