import React from 'react';
import { Code, Grid, HL, Hint, Section } from '@sc/ui';
import Term from '../../glossary/Term';

const code21 = `
class {{hl:Post}}(light-sky-blue) {
    ...
    ...
    func {{hl:showCommentSection}}(wheat) () {
        {{hl:commentsCount =}}(orange)
        {{hl:post.comments.count()}}(orange)
`;

const code22 = `\xa0       {{hl:if (commentsCount > 0) {}}(orange)`;

const code23 = `
\xa0           {{hl:commentSection.show()}}(orange)
        {{hl:}}}(orange)
    }
}`;

const code3 = `
{{hl:func toggleLike}}(red)() {
    if self.isLiked {
        {{hl:self.isLiked = false}}(orange)
        {{hl:self.numberOfLikes -= 1}}(plum)
    } else {
        {{hl:self.isLiked = true}}(light-sky-blue)
        {{hl:self.numberOfLikes += 1}}(green)
    }
    {{hl:Cache.shared.update(post: self)}}(wheat)
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='if-else' tooltip>
                        if и else (логические операторы)
                    </Term>{' '}
                    используются, если часть действий, описанных в абзаце, должна выполняться не
                    всегда, а только при каких-то условиях. If(...) проверяет условие, записанное в
                    скобках и, если результат правдивый (true), выполняется блок кода.
                </p>
                <p>
                    <b>Например</b>: Если у поста есть комментарии, мы отображаем в интерфейсе
                    секцию комментариев, если же нет, то мы не должны отображать эту секцию.
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
                    <Grid.Cell border='right bottom' hlactive>
                        Функция “<HL color='wheat'>Показать секцию с комментариями</HL>{' '}
                        <HL color='light-sky-blue'>поста</HL>”,{' '}
                        <HL color='orange'>
                            если количество комментариев в Set of Comments больше 0, то выполнить
                            функцию, которая отобразит секцию с комментариями
                        </HL>
                        .
                    </Grid.Cell>
                    <Grid.Cell border='bottom' hlactive>
                        <Code value={code21} tabs />
                        <Hint>
                            <Code value={code22} tabs />
                            <Hint.Tooltip>
                                Если логическое выражение в условии верно, то операция выполняется
                                один раз. После этого поток выполнения программы возвращается в
                                основную ветку и выполняет следующие строчки кода
                            </Hint.Tooltip>
                        </Hint>
                        <Code value={code23} tabs />
                    </Grid.Cell>
                    <Grid.Cell border='right' dense='bottom'>
                        Иногда в абзаце может быть несколько условий одновременно:
                    </Grid.Cell>
                    <Grid.Cell />
                    <Grid.Cell border='right' hlactive>
                        <HL color='red'>Функция “лайк”</HL> проверит, есть ли у поста лайки, и,{' '}
                        <HL color='plum'>если лайков меньше единицы</HL>, это означает, что{' '}
                        <HL color='orange'>пост никто не лайкул</HL>, а{' '}
                        <HL color='green'>если больше</HL>, то{' '}
                        <HL color='light-sky-blue'>функция отобразит лайк(и)</HL> и{' '}
                        <HL color='wheat'>отправит эту информацию на сервер</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code3} tabs />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Блок <b>else</b> опишет альтернативный результат работы программы в случае, если
                    условие в скобках не будет выполняться.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
