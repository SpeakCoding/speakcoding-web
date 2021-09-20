import React from 'react';
import { Hint, Img, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import img from './libraries.svg';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Библиотеки</h1>
                <p>
                    <Term id='library' tooltip>
                        Библиотеки
                    </Term>{' '}
                    представляют собой совокупность описания классов, составляющих и их функций.
                </p>
                <p>
                    Обычно когда вы скачиваете инструменты работы с каким-то языком, вместе с ними
                    загружаются стандартные библиотеки языка, где будут доступны стандартные классы.
                    Это позволит вам не искать их в Интернете. Развитие средств для работы с
                    библиотеками происходило таким образом, что вначале появилось{' '}
                    <Hint>
                        большое количество инструментов
                        <Hint.Tooltip>
                            Доступ к этим инструментам возможен через командную строку, редактор
                            кода.
                        </Hint.Tooltip>
                    </Hint>
                    , которые позволяли вам не искать библиотеки самостоятельно. Потом стал
                    возможным контроль версий библиотек (ведь библиотеки постоянно обновляются). В
                    более поздних инструментах программисты получили опцию вставлять в код ссылки на
                    удаленные библиотеки (обычно указывается версия, которую вы выбираете
                    использовать в коде). Библиотеки бывают скомпилированными и нескомпилированными.
                    Скомпилированные библиотеки отличаются тем, что части описанных в них функций
                    могут быть скрыты и являться интеллектуальной собственностью
                    компаний-разработчиков, но вы по-прежнему сможете работать с этими функциями,
                    хотя и не сможете исправить их изначальный код.
                </p>
                <p>
                    <b>SDK</b> - standard development kit, библиотека библиотек, хранится в
                    Интернете, ее можно скачать. Для работы вам нужно скачать SDK и указать
                    компилятору, где лежит библиотека (локально на устройстве, где вы пишете код).
                    Так как некоторые SDK идут в скомпилированном виде, вы не сможете работать с
                    одной библиотекой из всего SDK, вам нужно будет скачать его полностью.
                </p>
                <p>
                    Одним из примеров библиотеки, которую мы используем для создания Инстаграма, как
                    вы знаете, является <Term id='ui-kit'>UIKit</Term>. Она включает множество
                    классов, описывающих стандартные элементы интерфейса: кнопка, текстовый блок,
                    картинка. Для каждого из этих классов уже описаны все их составляющие и функции,
                    отвечающие за то, чтобы необходимые пиксели отобразились на экране.
                </p>
                <p>
                    Каким образом мы узнали, какие классы выбрать для работы со стандартными
                    элементами интерфейса? Если вы наберете в браузере "swift стандартный класс
                    button", то первая же ссылка приведёт вас на сайт разработчиков Apple Developer
                    Documentation и страницу, посвященную классу UIButton стандартной библиотеки{' '}
                    <Term id='ui-kit'>UIKit</Term>. На этой же странице вы можете найти подробное
                    описание всего класса, его составляющих и функций. В Интернете можно найти много
                    библиотек, предлагающих свои варианты отображения элементов интерфейса, и,
                    возможно, они подойдут вам лучше для решения конкретной задачи. Но на примере
                    нашего приложения вы видите, что эти задачи легко решаются даже стандартными
                    библиотеками.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section>

        <Assignment id='ru/16' />
    </>
);
