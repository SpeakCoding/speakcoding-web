import React from 'react';
import { Code, Grid, HL, Img, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from './while.svg';

const code4 = `
func showComments(post Post) {
    var comments = {{hl:post.getComments}}(wheat)()
    {{hl:for}}(green) ({{hl:comment in comments}}(light-sky-blue)) {
        {{hl:comment.display}}(plum)()
    }
}`;

const code5 = `
func showComments(post Post) {
    var comments = post.getComments()
    {{hl:for}}(green) ({{hl:number = 0}}(light-sky-blue); {{hl:number < comments.length()}}(thistle); number = number+1) {
        {{hl:comments[}}(red){{hl:number}}(light-sky-blue){{hl:].display()}}(red)
    }
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='for-while-cycles' tooltip>
                        for, while (циклические операторы)
                    </Term>{' '}
                    используются, когда описанные в абзаце действия необходимо повторить некоторое
                    количество раз.
                </p>
                <p>
                    Например, мы можем хотеть вывести на экран все комментарии к какому-то посту.
                    Тогда действия, которые необходимы для того, чтобы вывести один из комментариев,
                    необходимо повторить для всех комментариев, содержащихся в Set of Comments
                    конкретного поста.
                </p>
                <p>
                    В коде циклы обозначаются стандартными словами, которые могут отличаться для
                    каждого языка. for/ while - самые распространенные.
                </p>
                <p>
                    Обычно то, сколько раз нужно повторять это действие, определяется условием
                    описанным в круглых скобках () идущих после for/while и до открытия абзаца.
                </p>
                <p>
                    <b>while</b>, если условие (логическое выражение) описанное в скобках верно, то
                    выполняется блок кода в {'{}'}, после чего программа опять возвращается к
                    проверке условия. Цикл завершает свою работу только тогда, когда условие
                    (логическое выражение) в скобках (заголовке) перестает быть верным, то есть
                    условие выполнения цикла больше не соблюдается.
                </p>
                <p>
                    <Img src={img} width='70%' />
                </p>
                <p>
                    <b>for</b> используется в тех случаях, когда мы хотим выполнить блок кода, для
                    каждого экземпляра некоторого набора. Например, for each comment in Set of
                    comments.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>Описание функции словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        Функция “показать комментарии” класса Пост{' '}
                        <HL color='wheat'>возьмет все комментарии поста</HL> и{' '}
                        <HL color='green'>для</HL>{' '}
                        <HL color='light-sky-blue'>
                            каждого комментария из набора комментариев поста
                        </HL>{' '}
                        <HL color='plum'>отобразит их на экране</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code4} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    for так же имеет другую форму записи, через которую мы можем указать номер
                    (number) элемента списка, с которого надо начать, и до какого надо продолжать
                    выполнять блок кода.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid>
                    <Grid.Cell border='right bottom'>
                        <b>Описание функции словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>
                    <Grid.Cell border='right' hlactive>
                        Отобразить все комментарии поста, а именно: <HL color='green'>для</HL>{' '}
                        каждого комментария поста, <HL color='light-sky-blue'>начиная с первого</HL>{' '}
                        <HL color='thistle'>и заканчивая последним</HL>,{' '}
                        <HL color='red'>отобразить их на экране</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code5} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>
    </>
);
