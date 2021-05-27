import React from 'react';
import { Code, Grid, HL, Hint, Icon, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

const code11 = `
class User {
    [[username]](orange _ 1) Text
    ...
}
\xa0`;

const code12 = `
\xa0   [[newUsernameField]](turquoise _ 1)    TextField
    setButton            Button
    currentUser          User
`;

const code13 = `
\xa0
    func onClickSetButton() {
        currentUser.[[username]](orange _ 1) = [[newUsernameField.text]](green _ 1)
    }
}`;

const code21 = `
class User {
    username Text
    ...

    func [[SetUserName]](aquamarine _ 1) (newUsername Text) {
        self.username = newUsername
    }
}

class NewUsernameForm {
    newUsernameField    TextField
    setButton           Button
    currentUser         User

    func onClickSetButton() {
`;

const code22 = `
\xa0
        currentUser.[[SetUserName]](aquamarine _ 1)([[newUsernameField.text]](light-sky-blue _ 1))
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main>
                <Grid cols='36% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Пояснения к примеру</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Пример кода</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='bottom' />
                    <Grid.Cell dense='bottom'>
                        <Code value={code11} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense />
                    <Grid.Cell dense>
                        <pre>
                            <Hint>
                                class NewUsernameForm
                                <Hint.Tooltip>
                                    Как вы могли заметить, в классе NewUsernameForm нет составляющей
                                    username, но есть currentUser. Таким образом, несмотря на то,
                                    что описания классов NewUsernameForm и User будут находиться в
                                    разных файлах, они будут связаны
                                </Hint.Tooltip>
                            </Hint>
                            {' {'}
                        </pre>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense />
                    <Grid.Cell dense>
                        <Code value={code12} />
                    </Grid.Cell>

                    <Grid.Cell border='right'>
                        <div className={s.hint}>
                            <div>
                                Составляющую{' '}
                                <HL color='orange' active>
                                    username
                                </HL>{' '}
                                <HL color='green' active inline={3}>
                                    изменяем напрямую на введенное в поле формы имя
                                </HL>
                            </div>
                            <Icon name='arrow-right' size={24} />
                        </div>
                    </Grid.Cell>
                    <Grid.Cell>
                        <Code value={code13} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <ul>
                    <li>
                        Или в <Term id='class'>классе</Term> может быть определена{' '}
                        <Term id='function'>функция</Term>, которая использует{' '}
                        <Term id='input' tooltip>
                            вводные
                        </Term>{' '}
                        для того, чтобы изменить состояние объекта.
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
                        <b>Пример кода</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='bottom' />
                    <Grid.Cell dense='bottom'>
                        <Code value={code21} />
                    </Grid.Cell>

                    <Grid.Cell border='right' dense='top'>
                        <div className={s.hint}>
                            <div>
                                Изменяем через функцию{' '}
                                <HL color='aquamarine' active>
                                    SetUserName
                                </HL>
                            </div>
                            <Icon name='arrow-right' size={24} />
                        </div>
                    </Grid.Cell>
                    <Grid.Cell dense='top'>
                        <Code value={code22} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
