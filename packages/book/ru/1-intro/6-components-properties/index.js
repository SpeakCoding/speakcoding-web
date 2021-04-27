/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Card, HL, Img, Section, Structure } from '@sc/ui';
import Term from '../../glossary/Term';
import img1 from '../../../assets/5-class-period-ru.svg';
import img2 from '../../../assets/6-human.svg';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Main>
                <h1>Составляющие/Характеристики Класса</h1>
                <p>
                    Давайте рассмотрим <Term id='class'>класс</Term> на примере Поста.
                </p>
                <Structure>
                    <h4>Post</h4>
                    <ul>
                        <li>User</li>
                        <li>Image / Set of images / Video</li>
                        <li>Actions</li>
                        <li>Caption</li>
                        <li>Set of comments</li>
                        <li>Set of likes</li>
                        <li>Time</li>
                    </ul>
                </Structure>
                <p>
                    Из структурной записи выше видно, что Пост - это некоторая сущность, шаблон, в
                    котором мы описываем то, из чего будут состоять все конкретные посты. Как мы
                    упоминали раньше, в программировании это называется{' '}
                    <Term id='class'>классом</Term>. Он описан через перечисление{' '}
                    <Term id='component'>составляющих</Term>, из которых будут состоять все
                    конкретные посты (все экземпляры) этого класса. У{' '}
                    <Term id='component'>составляющей</Term> есть{' '}
                    <HL color='plum' active>
                        название
                    </HL>{' '}
                    и также{' '}
                    <HL color='orange' active>
                        класс
                    </HL>
                    , к которому она в свою очередь относится. Вы можете назвать ее как угодно,
                    программа все равно будет работать. Посмотрите на пример ниже.
                </p>
                <p>
                    Здесь у Периода есть составляющие “дата начала” и “дата окончания”. Хотя это
                    разные составляющие, они обе относятся к классу Date.
                </p>
                <p>
                    Еще один пример из Инстаграма. Возьмем <Term id='class'>класс</Term> - User. Вы
                    помните, что класс - это шаблон, по которому будут описываться все сущности
                    этого “типа”. Одна из <Term id='component'>составляющих</Term> User - Profile
                    Picture, которая, в свою очередь, относится к классу Image.
                </p>
                <p>
                    Когда вы описываете <Term id='class'>класс</Term>, необходимо постараться
                    описывать все потенциальные его <Term id='component'>составляющие</Term>, ведь у
                    машины нет мышления. Т.е мы всегда описываем “шаблон” в полной мере, даже если
                    не в каждом частном случае все ее элементы будут выполняться.
                </p>
                <p>
                    Например, в случае с Постом мы указали в его возможных{' '}
                    <Term id='component'>составляющих</Term> Картинки и Видео, хотя в конкретном
                    посте мы, возможно, будем использовать только Картинки или только Видео.
                </p>
                <p>
                    Для описания некоторых <Term id='class'>классов</Term>, кроме списка{' '}
                    <Term id='component'>составляющих</Term>, также может потребоваться список
                    потенциальных <Term id='characteristic'>характеристик</Term> этих объектов.
                </p>
                <p>
                    Например, у User (Аккаунта) может быть характеристика публичность/закрытость,
                    или мы можем выбрать будет ли аккаунт принадлежать конкретному человеку или
                    некоторой организации/бизнесу.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky center>
                    <Img src={img1} className={s.img1} />
                </Section.Sticky>
            </Section.Side>
        </Section>
        <Section>
            <Section.Main>
                <h2>Пример</h2>
                <div className={s.people}>
                    <div>
                        <HL color='light-sky-blue' active>
                            Люди
                        </HL>
                    </div>
                    <div>// составляющие</div>
                    <div>
                        <HL color='plum' active>
                            Руки
                        </HL>
                    </div>
                    <div>
                        <HL color='orange' active>
                            Ноги
                        </HL>
                    </div>
                    <div>...</div>
                    <div>характеристики (записываются так же, как и составляющие)</div>
                    <div>
                        <HL color='aquamarine'>Возраст</HL>
                    </div>
                    <div>
                        <HL color='green-yellow'>Рост</HL>
                    </div>
                    <div>
                        <HL color='thistle'>Пол</HL>
                    </div>
                    <div>...</div>
                </div>
                <p>
                    При этом в языках программирования при описании классов об их{' '}
                    <Term id='characteristic'>характеристиках</Term> пишут так же, как об их{' '}
                    <Term id='component'>составляющих</Term>.
                </p>
                <p>
                    Например, у нас есть зеленая книга, и ее цвет - это ее{' '}
                    <Term id='characteristic'>характеристика</Term>. Т.е у{' '}
                    <Term id='class'>класса</Term> Книга есть{' '}
                    <Term id='characteristic'>характеристика</Term> Цвет. При составлении ее
                    описания, мы скажем это так, будто у Книги есть{' '}
                    <Term id='component'>составляющая</Term> Цвет (класса Цвета). Если так удобнее,
                    можете сначала, для себя, записать их отдельно, а позже, когда вы перепишите их
                    на языке программирования, их запись будет такой же, как у других{' '}
                    <Term id='component'>составляющих</Term> класса.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky center>
                    <Img src={img2} />
                </Section.Sticky>
            </Section.Side>
        </Section>
        <Card mode='quiz'>
            <h2>Тест №2</h2>
            Описание класса, составляющие и характеристики
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLScoo1vkiq4bAjJsU5kyDeLAr4PnHPIFssLbOXpYURCfrBOIiA/viewform?usp=sf_link'>
                Пройти
            </Card.Button>
        </Card>
        <Card mode='assignment'>
            <h2>Задание №2</h2>
            Опишите в структурном виде максимально детальный список составляющих и характеристик{' '}
            <b>для класса Post</b> в Инстаграме. Для всех составляющих и характеристик придумайте их
            названия и классы.
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLSf30DDnjNqIXlkSQ4rrlpifm_mF96mcD0WfYKTTcDnaZ5Gniw/viewform?usp=sf_link'>
                Пройти
            </Card.Button>
        </Card>
    </>
);
