/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { HL, Img, Section, Structure, Task } from '@sc/ui';
import Term from '../../glossary/Term';
import img1 from '../../../assets/5-class-period.svg';
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
                    потенциальных характеристик этих объектов.
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
            <Section.Block>
                <Section.Main>
                    <h2>Example</h2>
                    <div className={s.people}>
                        <div>
                            <HL color='light-sky-blue' active>
                                People
                            </HL>
                        </div>
                        <div>// Components</div>
                        <div>
                            <HL color='plum' active>
                                Arms
                            </HL>
                        </div>
                        <div>
                            <HL color='orange' active>
                                Legs
                            </HL>
                        </div>
                        <div>...</div>
                        <div>// Properties (recorded the same way as components)</div>
                        <div>
                            <HL color='aquamarine'>Age</HL>
                        </div>
                        <div>
                            <HL color='green-yellow'>Height</HL>
                        </div>
                        <div>
                            <HL color='thistle'>Gender</HL>
                        </div>
                        <div>...</div>
                    </div>
                    <p>
                        In programming languages, <Term id='component'>components</Term> are defined
                        in the same way as their classes.
                    </p>
                    <p>
                        For example, let’s say that we have a green book: its color is one of its{' '}
                        <Term id='property'>properties</Term>. So the Book{' '}
                        <Term id='class'>class</Term> has the Color{' '}
                        <Term id='property'>property</Term>. When describing a book, we present this
                        as the Book having a color <Term id='component'>component</Term> of the
                        Color <Term id='class'>class</Term>. If you wish, you may start by writing
                        down the class and components separately for your own reference; when you
                        come to rewrite them into a programming language, you will need to describe
                        them in the same way as you did for the other{' '}
                        <Term id='component'>components</Term> of the class.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky center>
                        <Img src={img2} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>
            <Section.Block>
                <Section.Main>
                    <Task>
                        <h2>Quiz #2</h2>
                        <Task.Button icon='question'>Complete quiz</Task.Button>
                    </Task>
                    <Task>
                        <h2>Assignment #2</h2>
                        <p>
                            Create a structured definition of the components and properties for the
                            Post class in Instagram, including as much detail as possible. Assign a
                            title and class to each component.
                        </p>
                        <p>Below is an example of a detailed definition of components:</p>
                        <Structure>
                            <h4>Comment</h4>
                            <ul>
                                <li>user (of class User)</li>
                                <li>creationTime (class Time)</li>
                                <li>text(class Text)</li>
                                <li>set of Likes (of class Likes)</li>
                                <li>(optional) set of Replies (class Comment)</li>
                            </ul>
                        </Structure>
                        <Task.Button icon='chevron-right'>Start assignment</Task.Button>
                    </Task>
                </Section.Main>
                <Section.Side />
            </Section.Block>
        </Section>
    </>
);
