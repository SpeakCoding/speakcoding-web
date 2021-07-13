import React from 'react';
import { Grid, HL, Hint, Img, Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Term from '../../glossary/Term';
import xcode from './xcode.png';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Изменения составляющих и взаимодействие с классами</h1>
                    <p>
                        Для всех составляющих интерфейса нужно задать их составляющие и
                        характеристики, касающиеся их отображения, например: размер кнопки, картинка
                        кнопки, положение относительно других элементов.
                    </p>
                    <p>
                        <b>
                            Посмотрим на элемент UserProfilePicture in circle (класс PostFeedView):
                        </b>
                    </p>
                </Section.Main>
            </Section.Block>
            <Section.Block>
                <Section.Main>
                    <p>
                        <Img src={xcode} width='100%' />
                    </p>
                </Section.Main>
            </Section.Block>
            <Section.Block>
                <Section.Main narrow>
                    <ul>
                        <li>отступает сверху 15 пикселей и слева 15 пикселей</li>
                        <li>ее размер - 64х64 пикселя</li>
                        <li>
                            если картинки нет (или мы ее еще не загрузили ее из памяти или с
                            сервера) используем “placeholder”
                        </li>
                        <li>картинку нужно обрезать кружком</li>
                        <li>
                            (об этом позже) при нажатии на картинку мы переходим в профиль юзера
                        </li>
                    </ul>
                    <p>Все это составляющие/характеристики класса UIImage.</p>
                    <p>
                        <b>Еще один пример:</b>
                    </p>
                    <p>
                        Картинка поста Asynchronous Image View, в свою очередь, имеет такое
                        описание:
                    </p>
                    <ul>
                        <li>
                            ограничена прямоугольной рамкой 320 пикселей в ширину и 300 в высоту
                        </li>
                        <li>
                            отступ сверху от предыдущего элемента Profile Picture - 14 пикселей,
                            отступ снизу от следующего элемента Like Button - 5 пикселей
                        </li>
                        <li>
                            если картинки нет (или мы ее еще не загрузили ее из памяти или с
                            сервера) прозрачный фон.
                        </li>
                        <li>при двойном нажатии на картинку, должен быть поставлен лайк</li>
                    </ul>
                    <p>
                        Для{' '}
                        <Term id='standard-classes' tooltip>
                            стандартных классов
                        </Term>{' '}
                        визуальных элементов экрана можно задать функции, которые будут выполняться
                        при тех или иных действиях пользователя. Например, функция для кнопки,
                        которая выполняется при нажатии этой кнопки (в предыдущей части мы описывали
                        последовательность действий для кнопки Submit и регистрации нового
                        пользователя).
                    </p>
                    <p>
                        При этом, функция будет являться не частью описания класса, а храниться в
                        составляющей объекта. То есть в файлах типа View в стандартном классе
                        UIButton уже заданы функции, в которых мы можем вызвать функцию, которая
                        должна быть выполнена при том или ином событии. Эту передаваемую функцию мы
                        описываем здесь же в классе PostFeedView. Посмотрите на пример:
                    </p>
                </Section.Main>
            </Section.Block>
            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right bottom'>
                            <b>
                                Описание функции Like и ее элементов (в интерфейсе отображается как
                                кнопка)
                            </b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это выглядит в коде</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            <p>
                                Здесь внутри <HL color='orange'>likeButton</HL> есть составляющая, в
                                которой хранится функция <HL color='plum'>toggleLike</HL>. Этого не
                                видно в этой строчке кода, но правым кликом мышки вы можете перейти
                                в то место в коде, где это будет{' '}
                                <Hint>
                                    описано
                                    <Hint.Tooltip>
                                        Как вы знаете, у всех классов есть составляющие и функции.
                                        Чаще всего, составляющие являются приватными (в коде перед
                                        ними стоит слово private), локальными. Так делают, чтобы не
                                        создавать путаницы при использовании классов, чтобы вы могли
                                        переиспользовать названия составляющих и функций в других
                                        частях кода. Получается, что в работе с классами, особенно
                                        если это стандартные классы, которые мы импортировали, мы
                                        обычно имеем дело только с функциями классов. То есть вы
                                        можете не знать, что у кнопки есть составляющая toggleLike,
                                        где хранится описание нужной вам функции, но вы можете
                                        начать писать название необходимой вам функции и, если она
                                        описана в этом классе, редактор кода подставит ее
                                        автоматически. В этом случае функция, переданная как
                                        параметр, по сути является объектом - переменной с которой
                                        мы будем взаимодействовать.
                                    </Hint.Tooltip>
                                </Hint>
                                .
                            </p>
                            <p>
                                <HL color='green'>target</HL> – то, с каким объектом мы произведем{' '}
                                <HL color='light-sky-blue'>действие</HL> (функция класса
                                PostFeedView) на <HL color='aquamarine'>такое действие</HL> с
                                кнопкой likeButton.
                            </p>
                            <p>
                                <HL color='sandy-brown'>self</HL> – ссылка на экземпляр
                                PostFeedView, для которого будут производиться эти действия.
                            </p>
                            <p>
                                <HL color='green-yellow'>UIControl.Event</HL> – в библиотеке UIKit в
                                классе UIControl, ссылка на упрощенный класс Event, в котором как
                                составляющие перечислены действия пользователя на которые могут
                                реагировать стандартные элементы интерфейса. Например,
                                UIControl.Event.
                                <HL color='aquamarine'>touchUpInside</HL> соответствует событию,
                                когда пользователь отпустил палец все еще находясь над областью
                                кнопки.
                            </p>
                            То есть мы задаем параметры кнопки: описываем действия, которые она
                            выполнит для этого объекта при таком взаимодействии с ней пользователя.
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <pre>
                                <HL color='orange'>likeButton</HL>
                                .addTarget(
                                <HL color='green'>target</HL>: <HL color='sandy-brown'>self</HL>,{' '}
                                <HL color='light-sky-blue'>action</HL>:{' '}
                                <HL color='plum'>toggleLike</HL>, for:{' '}
                                <HL color='green-yellow'>UIControl.Event</HL>.
                                <HL color='aquamarine'>touchUpInside</HL>
                                ) -> <br /> <br />
                                class PostFeedCell: UITableViewCell {'{'} <br />
                                {'    ...'} <br /> <br />
                                {'    '}
                                override func{' '}
                                <Hint>
                                    viewDidLoad()
                                    <Hint.Tooltip>
                                        Here is where you can find the above described function in
                                        code.
                                    </Hint.Tooltip>
                                </Hint>
                                {' {'} <br />
                                {'        '}super.viewDidLoad() <br /> <br />
                                {'        '}likeButton.addTarget(self, action: #selector
                                (toggleLike), for: UIControl.Event.touchUpInside) <br />
                                {'    }'} <br />
                                {'}'}
                            </pre>
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>
        <Quiz
            number={9}
            href='https://docs.google.com/forms/d/e/1FAIpQLSfECKIHL7PORLfMNL5mHydhozGXhtr7t9uPPV8Nofx7ZV6pcQ/viewform?usp=sf_link'
        >
            Изменения составляющих и взаимодействие с классами
        </Quiz>
    </>
);
