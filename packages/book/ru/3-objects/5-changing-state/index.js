import React from 'react';
import { Card, Code, Grid, HL, Hint, Icon, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import FunctionParts from '../../../common/3/function-parts';
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

class newUsernameForm {
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

const code3 = `
func editCaption (newCaption Text)  {
    [[currentCaption]](orange _ 1) = [[newCaption]](light-sky-blue _ 1)
}`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Изменение состояния объектов</h1>
                    <p>
                        Когда у нас появились <i>конкретные</i> <Term id='instance'>объекты</Term>{' '}
                        какого-то <Term id='class'>класса</Term> и мы научились их сохранять, мы
                        можем менять их состояние. Например, когда мы создали аккаунт конкретного
                        юзера, мы можем менять его имя. Это можно делать напрямую, изменяя{' '}
                        <Term id='component'>составляющие объекта</Term>, или через{' '}
                        <Term id='function'>функции</Term> этого класса.
                    </p>
                    <p>
                        Давайте представим, что в Инстаграме есть форма, которая позволяет изменить
                        ваше имя пользователя. В этой форме есть поле ввода нового имени
                        пользователя newUsernameField, и кнопку Save. Форма хранит{' '}
                        <Term id='instance'>объект</Term> (экземпляр) вашего аккаунта (User) в своей{' '}
                        <Term id='component'>составляющей</Term> currentUser{' '}
                        <Term id='class'>класса</Term> User. И в ее <Term id='class'>классе</Term>
                        описана <Term id='function'>функция</Term> onClickSetButton, которая
                        вызывается при нажатии соответствующей кнопки. Эта функция изменит{' '}
                        <Term id='component'>составляющую</Term> username вашего аккаунта (объекта
                        класса User).
                    </p>
                    <ul>
                        <li>
                            Можно заменять <Term id='component'>составляющие</Term> или менять{' '}
                            <Term id='property'>характеристики</Term> напрямую, через добавление
                            соответствующего действия в последовательность шагов функции
                            onClickSetButton.
                        </li>
                    </ul>
                </Section.Main>
                <Section.Side />
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
                            <Code value={code11} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense />
                        <Grid.Cell dense>
                            <pre>
                                <Hint>
                                    class newUsernameForm
                                    <Hint.Tooltip>
                                        As you may have noticed, there is no username component in
                                        the newUsernameForm class, but there is a currentUser. Thus,
                                        despite the fact that the descriptions of newUsernameForm
                                        and User classes will exist in separate files in code, they
                                        will be connected
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
                <Section.Main>
                    <ul>
                        <li>
                            Или в <Term id='class'>классе</Term> может быть определена{' '}
                            <Term id='function'>функция</Term>, которая использует{' '}
                            <Term id='input'>вводные</Term> для того, чтобы изменить состояние
                            объекта.
                        </li>
                    </ul>
                </Section.Main>
                <Section.Side />
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

            <Section.Block>
                <Section.Main>
                    <p>
                        В <Term id='function'>функциях</Term> мы описываем последовательность
                        действий, которые можно производить с конкретными{' '}
                        <Term id='instance'>объектами</Term> (экземплярами) какого-то{' '}
                        <Term id='class'>класса</Term>. Изменение объекта - это изменение{' '}
                        <Term id='component'>составляющих</Term> и{' '}
                        <Term id='property'>характеристик</Term> этого{' '}
                        <Term id='instance'>объекта</Term>.
                    </p>
                    <p>
                        При описании действий, которые <Term id='function'>функция</Term> выполняет,
                        мы можем обращаться к <Term id='component'>составляющим</Term> экземпляра
                        напрямую. Т.к. <Term id='instance'>экземпляр класса</Term> содержит все{' '}
                        <Term id='component'>составляющие</Term>, перечисленные в описании этого
                        класса, нам не нужно будет добавлять их как <Term id='input'>вводные</Term>.
                        Давайте разберем на примере ниже.
                    </p>
                    <p>
                        Например, мы хотим отредактировать текст поста. Для этого в описании{' '}
                        <Term id='class'>класса</Term> Post мы создадим функцию editCaption(). Для
                        выполнения этой <Term id='function'>функции</Term> нам понадобится
                        обновленный текст поста, т.е. он будет являться ее{' '}
                        <Term id='input'>вводной</Term>, а сама <Term id='function'>функция</Term>{' '}
                        выглядит как последовательность следующих действий:
                    </p>
                </Section.Main>
                <Section.Side />
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <div className={s.function}>
                        <Grid>
                            <Grid.Cell border='right'>
                                <ol>
                                    <li>
                                        Взять{' '}
                                        <HL color='orange' active>
                                            нынешний текст
                                        </HL>{' '}
                                        поста
                                    </li>
                                    <li>
                                        Изменить его на{' '}
                                        <HL color='light-sky-blue' active>
                                            новый
                                        </HL>
                                    </li>
                                </ol>
                            </Grid.Cell>
                            <Grid.Cell>
                                <FunctionParts>
                                    <Code value={code3} />
                                </FunctionParts>
                            </Grid.Cell>
                        </Grid>
                    </div>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <p>
                        Как мы записали, Caption является составляющей класса Post. Поэтому, когда
                        мы создаем конкретный Post, у нас будет доступ ко всем составляющим этого
                        класса.
                    </p>
                    <p>
                        Получается, нам не нужно добавлять в код шаг указания конкретного текста под
                        этим постом. Поскольку у каждого Поста всегда есть текст, а функция
                        editCaption() описана в классе Post, у нее будет прямой доступ к тексту
                        (Caption) этого конкретного поста.
                    </p>
                </Section.Main>
                <Section.Side />
            </Section.Block>
        </Section>

        <Card mode='quiz'>
            <h2>Тест №6</h2>
            <Card.Button href='#'>Пройти</Card.Button>
        </Card>
    </>
);
