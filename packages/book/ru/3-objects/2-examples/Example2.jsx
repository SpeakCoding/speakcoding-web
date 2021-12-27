import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code1 = `{{new}}(hl:orange) User(usernameText, emailText, passwordText)`;

const code2 = `{{hl:func onClickCreateButton()}}(green) {
    {{hl:newUsername = textFieldUsername.text}}(orange)
    {{hl:newEmail = textFieldEmail.text}}(orange)
    {{hl:newPassword = textFieldPassword.text}}(orange)
    {{hl:newUser = new User}}(plum) {{hl:(newUsername, newEmail, newPassword)}}(aquamarine)
    ...
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='constructor' tooltip>
                        Функция-конструктор
                    </Term>
                    , создающая конкретный объект (<Term id='instance'>экземпляр</Term>) класса,
                    должна быть названа определенным образом. Такое название является жестко
                    заданным для каждого языка. В некоторых языках она повторяет название класса, а
                    в некоторых, таких как Python, называется __init__. Это название всегда можно
                    найти, набрав в поисковике конкретный язык.
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
                <Pre>{code1}</Pre>
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
                    <Grid.Cell border='right' hlactive>
                        Функция <HL color='green'>onClickCreateButton()</HL>, которая{' '}
                        <HL color='plum'>будет вызываться при нажатии кнопки Submit, использует</HL>{' '}
                        <HL color='orange'>все введенные в поля формы данные</HL>{' '}
                        <HL color='plum'>и создаст</HL>{' '}
                        <HL color='aquamarine'>экземпляр класса User</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code2} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
