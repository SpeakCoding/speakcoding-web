import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code = `[[func onClickCreateButton()]](green _ 1) {
    [[newUsername = textFieldUsername.text]](orange _ 1)
    [[newEmail = textFieldEmail.text]](orange _ 1)
    [[newPassword = textFieldPassword.text]](orange _ 1)
    [[newUser = new User]](plum _ 1 3) [[(newUsername, newEmail, newPassword)]](aquamarine _ 3)
    ...
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='constructor'>Функция-конструктор</Term>, создающая конкретный объект (
                    <Term id='instance'>экземпляр</Term>) класса, должна быть названа определенным
                    образом. Такое название является жестко заданным для каждого языка. В некоторых
                    языках она повторяет название класса, а в некоторых, таких как Python,
                    называется __init__. Это название всегда можно найти, набрав в поисковике
                    конкретный язык.
                </p>
                <p>
                    Теперь, когда мы задали функцию-конструктор, мы можем создавать объекты
                    (экземпляры) класса, вызывая ее. Во многих языках вызов этой функции
                    сопровождается словом-индикатором{' '}
                    <HL color='orange' active>
                        new
                    </HL>
                    .
                </p>
                <Pre>
                    <HL color='orange' active>
                        new
                    </HL>{' '}
                    User(usernameText, emailText, passwordText)
                </Pre>
                <p>
                    Выше, в примере с формой, мы добавим шаг создания экземпляра(объекта) в функцию,
                    которая будет вызываться при нажатии кнопки Submit. Она возьмет данные из формы
                    и выполнит последовательность шагов по созданию new User.
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
                    <Grid.Cell border='right'>
                        Функция{' '}
                        <HL color='green' active inline={3}>
                            onClickCreateButton()
                        </HL>
                        , которая{' '}
                        <HL color='plum' active inline={3}>
                            будет вызываться при нажатии кнопки Submit, использует
                        </HL>{' '}
                        <HL color='orange' active inline={3}>
                            все введенные в поля формы данные
                        </HL>{' '}
                        <HL color='plum' active inline={3}>
                            и создаст
                        </HL>{' '}
                        <HL color='aquamarine' active inline={3}>
                            экземпляр класса User
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell>
                        <Code value={code} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
