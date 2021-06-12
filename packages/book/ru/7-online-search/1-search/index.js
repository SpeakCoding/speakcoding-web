import React from 'react';
import { Callout, Img, Link, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import img from '../../../assets/7/1-google-search.png';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h1>Как искать необходимую информацию в Интернете</h1>
                    <p>
                        Работая с кодом, вы часто будете сталкиваться с необходимостью уточнить, был
                        ли уже описан тот или иной класс, проверить, как называются некоторые
                        системные команды, а также посмотреть на примеры решения архитектурных
                        задач. Даже программисты с десятками лет опыта регулярно используют
                        профессиональные форумы вроде StackOverflow для поиска ответов на рабочие
                        вопросы. Как и в человеческом языке, в повседневной жизни вы используете
                        гораздо меньше слов, чем знаете. Если вы забыли значение слова, вы просто
                        проверяете его в словаре - так и в программировании.
                    </p>
                    <p>
                        <b>Как искать</b>
                    </p>
                    <p>
                        Попробуйте сначала поискать название языка или подхода, в котором вы хотите
                        разобраться. Первая или вторая ссылка приведёт вас на официальный сайт с
                        общей информацией, историей создания и ключевыми концепциями.
                    </p>
                    <p>
                        Чаще всего вы будете сталкиваться с блог-постами, Q&A и разбором конкретных
                        кейсов.
                    </p>
                    <p>
                        Эти форматы говорят сам за себя и требуют минимального сбора дополнительной
                        информации. Кто-то уже разобрал волнующий вас вопрос и с примерами кода и
                        объяснением логики рассказывает, как его можно решить. Даже если он не
                        полностью повторяет вашу ситуацию, вы можете проследить некоторую логику
                        решения и проверить, сработает ли она.
                    </p>
                    <p>
                        Если вы уже написали какой-то кусок кода и программа выдает ошибку - просто
                        скопируйте ее в браузер. Скорее всего, первыми будут статьи StackOverflow.
                        Это главная база знаний по вопросам программирования, и в абсолютном
                        большинстве случаев вы можете ей доверять.
                    </p>
                    <p>
                        Освежите знания о том, как{' '}
                        <Link href='https://habr.com/en/sandbox/46956/' blank>
                            уточнять
                        </Link>{' '}
                        поисковые запросы. Например, чтобы сократить выборку до конкретного ресурса,
                        поставьте двоеточие между текстом вопроса и ресурсом, которым вы хотите
                        ограничиться, пример “нейросети : medium”. В Google есть и другие трюки,
                        например inurl, intext, site. Мы не будем описывать их все, вы можете найти
                        их самостоятельно.
                    </p>
                    <ul>
                        <li>
                            Не фокусируйтесь на том, как написать что-то. Думайте в первую очередь о
                            том, какое действие программа должна совершить в результате
                        </li>
                        <li>
                            Набросайте примерную структуру того, что вы хотите создать, в
                            псевдо-коде. Вы сможете найти и добавить синтакс позже
                        </li>
                        <li>
                            Не уверены в решении? Скорее всего, вы не единственный, кто столкнулся с
                            этой проблемой. Обращение к форумам поможет вам увидеть другие подходы к
                            решению и избежать похожих ошибок
                        </li>
                        <li>
                            Не копируйте работающие решения бездумно. Постарайтесь разобраться,
                            почему именно оно подходит для конкретной задачи
                        </li>
                    </ul>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky top='60px'>
                        <Img src={img} width={474} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>Подводя итог, еще раз подчеркнем, что:</p>
                    <Callout>
                        <p>
                            Запоминание всего, что потенциально может пригодиться в работе -
                            неэффективный расход вашего ресурса. Никогда не пытайтесь выучить то,
                            что можно быстро найти в Интернете.
                        </p>
                        <p>Фокусируйтесь на том, что вы хотите создать, а не на синтаксисе.</p>
                        <p>Гуглите, спрашивайте - учитесь на ошибках других людей.</p>
                        <p>
                            Как вы знаете, структурно все языки очень похожи. Чем меньше внимания вы
                            будете обращать на синтаксис, тем быстрее и легче вы сможете осваивать
                            новые языки.
                        </p>
                        <p>
                            В программировании много информации, которая постоянно обновляется -
                            подходы к решению, технологии, фреймворки. Ни один человек не знает
                            всего и даже самые опытные программисты постоянно учатся на работе.
                        </p>
                    </Callout>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment
            number={15}
            href='https://docs.google.com/forms/d/e/1FAIpQLSe8jRKd1Q8tYx89FpYdr3ALD7SY7AsCemAzG83QN4i5lP0IyQ/viewform?usp=sf_link'
        >
            Задания на поиск ответов на вопросы
        </Assignment>
    </>
);
