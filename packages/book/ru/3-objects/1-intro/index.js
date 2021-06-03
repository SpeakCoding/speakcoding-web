import React from 'react';
import { Callout, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import { interceptor, InterceptorView } from '../../../phone';

async function onEnter() {
    await interceptor.logout();
    interceptor.open();
}

export default () => (
    <Section.Block>
        <Section.Main>
            <InterceptorView onEnter={onEnter} onExit={interceptor.close}>
                <h1>Создание Объектов (Экземпляров)</h1>
                <p>
                    Вернемся к описанию структуры через код. То, что мы делали в предыдущей главе -
                    это <b>описание</b> <Term id='class'>классов</Term> объектов, их{' '}
                    <Term id='property'>характеристик</Term> и <Term id='function'>функций</Term>.{' '}
                    <b>После того, как мы описали</b> Класс, появляется возможность создавать
                    объекты (экземпляры) этого класса.
                </p>
                <Callout>Описание классов НЕ равно созданию объектов этих классов</Callout>
                <p>
                    Например, взаимодействие пользователя с Инстаграмом начинается с того, что он
                    создает аккаунт в программе.
                </p>
                <p>В структурном описании User мы перечислили, из чего он будет состоять:</p>
                <p>
                    <HL color='orange' active>
                        User
                    </HL>{' '}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <HL color='orange' active>
                        Username
                    </HL>{' '}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <HL color='orange' active>
                        Profile Picture
                    </HL>{' '}
                    или{' '}
                    <HL color='orange' active>
                        Latest Story Image
                    </HL>
                </p>
                <p>
                    Когда вы открываете Инстаграм, вы видите экран, на котором вам предлагается
                    заполнить форму. Эта форма (см. справа) состоит из поля <b>Username</b>, поля{' '}
                    <b>Email</b>, поля <b>Password</b> и кнопки <b>Submit</b>. Как мы обсуждали (и
                    подробнее поговорим об этом в следующей части), эта форма будет являться
                    отдельным классом отображения - “view” - который опишет составляющие,
                    необходимые для регистрации нового пользователя. В него же мы добавим
                    последовательность шагов функции, вызывающейся при нажатии кнопки Submit. Она
                    нужна нам, чтобы информация, которую User написал в форме, сохранилась и
                    Инстаграм создал новый аккаунт, используя данные из формы.
                </p>
                <p>
                    Как мы уже обсуждали, каждый <Term id='instance'>объект (экземпляр)</Term>{' '}
                    конкретного <Term id='class'>класса</Term> будет состоять из всех{' '}
                    <Term id='property'>характеристик</Term> и{' '}
                    <Term id='component'>составляющих</Term> самого <Term id='class'>Класса</Term>,
                    которые мы ранее описали в общей структуре. Для создания конкретного{' '}
                    <Term id='instance'>объекта (экземпляра)</Term> все{' '}
                    <Term id='property'>характеристики</Term> должны быть описаны и все{' '}
                    <Term id='component'>составляющие</Term> заранее созданы.
                </p>
                <p>
                    Для создания конкретного объекта(экземпляра) мы используем специальную
                    функцию-конструктор, которая позволяет нам передать необходимые вводные, чтобы
                    создать этот объект (экземпляр). Эта функция-конструктор будет исполнена в
                    момент создания объекта, и данные передадутся в нее как вводные.
                </p>
                <p>
                    В случае с пользователем Инстаграма, мы знаем что у конкретного User всегда есть
                    username, email и password. Поэтому конструктор User будет выглядеть так:
                </p>
            </InterceptorView>
        </Section.Main>
        <Section.Side />
    </Section.Block>
);
