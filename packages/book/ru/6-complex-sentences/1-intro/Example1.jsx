import React from 'react';
import { Code, Grid, HL, Pre, Section } from '@sc/ui';

const code1 = `
var lastUserLike User
lastUserLike = [[post]](red).[[likes]](orange).[[last]](green).[[getUser]](aquamarine)()
`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    <b>Рассмотрим этот пример:</b>
                </p>
                <p>
                    В примере мы хотим найти человека, который последним лайкнул твой пост в
                    Инстаграме.
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
                        <HL color='aquamarine'>Выбрать человека</HL>, который оставил{' '}
                        <HL color='green'>последний лайк</HL> из <HL color='orange'>всех лайков</HL>{' '}
                        <HL color='red'>выбранного поста</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code1} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <HL.Context active>
                        Для этого мы сначала берем все лайки поста (<HL color='red'>post</HL>.
                        <HL color='orange'>likes</HL>), определяем последний лайк (
                        <HL color='red'>post</HL>.<HL color='orange'>likes</HL>.
                        <HL color='green'>last</HL>), а затем уточняем, кто является автором
                        последнего лайка (<HL color='red'>post</HL>.<HL color='orange'>likes</HL>.
                        <HL color='green'>last</HL>.<HL color='aquamarine'>getUser</HL>()).
                    </HL.Context>
                </p>
                <p>
                    <b>
                        Для наглядности, эту последовательность действий можно расписать более
                        подробно:
                    </b>
                </p>
                <Pre>
                    var postLikes [Like] <br />
                    var lastLike Like <br />
                    var user User <br />
                    <br />
                    var postLikes = post.likes <br />
                    var lastLike = postLikes.last <br />
                    var user = lastLike.getUser() <br />
                </Pre>
            </Section.Main>
        </Section.Block>
    </>
);
