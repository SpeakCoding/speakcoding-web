import React from 'react';
import { Code, Grid, HL, Icon, Pre, Section } from '@sc/ui';
import Post from '../../../common/2/class-post';
import s from './style.css';

const code1 = `
func (post* {{hl:Post}}(orange)) {{hl:Add Like}}(green)({{hl:user User}}(aquamarine)) { 
    {{hl:new_like = new Like(user)}}(plum)
    {{hl:self.setOfLikes.add(new_like)}}(plum)
}`;

const code2 = `
func {{hl:NumberOfLikes}}(green)() {{hl:Number}}(light-sky-blue) { 
    {{hl:number_of_likes = self.setOfLikes.length}}(plum)
    {{hl:return}}(plum) {{hl:number_of_likes}}(light-sky-blue)
}`;

const code3 = `
class {{hl:User}}(orange) {
    ...

    func {{hl:muteProfile}}(green)() {
        {{hl:posts = self.getPosts()}}(plum)
        {{hl:stories = self.getStories()}}(plum)
        {{hl:posts.mute()}}(plum)
        {{hl:stories.mute()}}(plum)   
    }
}`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main>
                <h2>Примеры описания функции</h2>
                <Grid cols='25% 25% 50%'>
                    <Grid.Cell border='right bottom'>
                        <b>Структура описания функции</b>
                    </Grid.Cell>
                    <Grid.Cell border='right bottom'>
                        <b>Описание функции текстом</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' />
                    <Grid.Cell border='right'>
                        <div className={s.hint}>
                            <span>Функции описываются там же, где класс</span>
                            <Icon name='arrow-right' size={24} />
                        </div>
                    </Grid.Cell>
                    <Grid.Cell>
                        <Post />
                        <pre>...</pre>
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        <ul>
                            <li>
                                <HL color='green'>Название</HL>
                            </li>
                            <li>
                                <HL color='orange'>Класс</HL>, к которому она относится
                            </li>
                            <li>
                                <HL color='plum'>Последовательность/список операций</HL>, которые
                                она совершает
                            </li>
                            <li>
                                <HL color='aquamarine'>Вводные</HL>
                            </li>
                            <li>
                                <HL color='light-sky-blue'>Значение</HL>, которое она передает
                            </li>
                        </ul>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        Функция класса <HL color='orange'>Пост</HL>, которую мы назовем{' '}
                        <HL color='green'>“Добавить Лайк”</HL>, которая если ей{' '}
                        <HL color='aquamarine'>указать пользователя</HL>,{' '}
                        <HL color='plum'>
                            создает лайк от этого пользователя и добавляет его в список лайков этого
                            поста, и ничего не возвращает
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' />
                    <Grid.Cell border='right' hlactive>
                        Или функция класса <HL color='orange'>Пост</HL>, которую мы назовем{' '}
                        <HL color='green'>“Количество Лайков”</HL>,{' '}
                        <HL color='aquamarine'>которой не указывается никаких вводных</HL>,{' '}
                        <HL color='plum'>проверяет количество лайков у поста и сообщает</HL>{' '}
                        <HL color='light-sky-blue'>это число</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code2} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <h2>Пример записи обращения/вызова функции</h2>
                <p>Общий вид обращения:</p>
                <Pre>имя_функции(список_вводных)</Pre>
                <ol>
                    <li>
                        Обращение к функции также можно легко найти по круглым скобкам, они остаются
                        в обращении независимо от того, есть у функции вводные или нет.
                    </li>
                    <li>
                        Перед скобками так же написано имя функции (мы используем имя заданное в ее
                        описании).
                    </li>
                    <li>
                        Перечисление вводных через запятую (в том же порядке как в определении
                        функции).
                    </li>
                    <li>
                        Отличия от определения функции:
                        <ul>
                            <li>нет ключевого слова перед названием функции</li>
                            <li>использовано имя уже использованное ранее в описании</li>
                            <li>в перечислении вводных не написаны классы</li>
                            <li>
                                нет описания шагов, тела функции, соответственно, нет фигурных
                                скобок или двоеточия после круглых скобок
                            </li>
                        </ul>
                    </li>
                    <li>
                        Функции класса описывают действия, которые должны быть совершены по
                        отношению к экземпляру класса. Таким образом, вызов функции всегда
                        происходит по отношению к конкретному экземпляру и в тексте кода обязательно
                        идет с упоминанием экземпляра, для которого мы ее вызываем. В тексте кода
                        обращение к функции пишется через точку после упоминания экземпляра.
                    </li>
                </ol>
            </Section.Main>
            <Section.Side />
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <p>
                    <b>Пример вызова функции</b>
                </p>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>Описание и пояснение функции текстом</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        Функция, которая позволяет временно перестать читать посты пользователя:
                        <br /> <br />
                        Функция <HL color='orange'>класса User</HL>, которую мы назовем{' '}
                        <HL color='green'>“перестать читать юзера”</HL>,{' '}
                        <HL color='plum'>
                            идентифицирует посты и сториз этого юзера и последовательно исключает
                            посты из вашего фида.
                        </HL>
                        .
                    </Grid.Cell>

                    <Grid.Cell hlactive>
                        <Code value={code3} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </Section>
);
