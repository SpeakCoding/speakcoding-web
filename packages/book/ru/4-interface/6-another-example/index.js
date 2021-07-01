import React from 'react';
import { Button, Code, Expand, Grid, HL, Section } from '@sc/ui';

const code1 = `
private func [[updateLikes]](red)() {
    self.likeButton.isSelected = [[self.post.isLiked]](wheat)
`;

const code2 = `
\xa0   let [[likerFollowee]](steel-blue) = [[self.post.likerFollowee]](green)
`;

const code3 = `
\xa0   [[if likerFollowee != nil]](aquamarine) {
        self.likerFolloweeProfilePictureView
        .[[showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)]](blue)

        self.likerFolloweeProfilePictureView.isHidden = false

        let textTemplate = (self.post.[[numberOfLikes > 1]](green-yellow)) ? [["Liked by {user} and {others}" : "Liked by {user}"]](plum)
`;

const code4 = `
\xa0       let [[text]](orange) = [[NSMutableAttributedString]](sandy-brown)([[string: textTemplate]](light-sky-blue), attributes: [[[NSAttributedString.Key.font: UIFont.systemFont]](powder-blue)([[ofSize: 12]](light-sky-blue), [[weight: UIFont.Weight.regular]](grey))])
    }
}`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main>
                <p>
                    (Дополнительно) Еще один{' '}
                    <Expand.Control htmlFor='2-7-1'>
                        <Button variant='rounded'>пример ⤵</Button>
                    </Expand.Control>
                    , в котором мы задаем параметры визуальных элементов в коде.
                </p>

                <Expand id='2-7-1'>
                    <Grid cols='40% 1fr'>
                        <Grid.Cell border='right bottom'>
                            <b>Описание функции текстом</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>Как это отображается в коде</b>
                        </Grid.Cell>

                        <Grid.Cell border='right' hlactive>
                            Приватная функция <HL color='red'>ОбновитьЛайки</HL> определит,{' '}
                            <HL color='wheat'>лайкали ли вы этот пост</HL>
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <Code value={code1} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top' hlactive>
                            а также сохранит в <HL color='steel-blue'>переменной likerFollowee</HL>{' '}
                            <HL color='green'>
                                одного из читателей (фолловеров), лайкнувших конкретный пост
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell dense='top' hlactive>
                            <Code value={code2} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top' hlactive>
                            и,{' '}
                            <HL color='aquamarine'>
                                если среди лайкнувших пост в ленте конкретного юзера есть читатели
                                (фоловеры) этого юзера
                            </HL>
                            , <HL color='blue'>отобразит картинку его профиля</HL>, а также{' '}
                            <HL color='plum'>
                                надпись Liked by {'{user}'} and {'{others}'}
                            </HL>
                            , <HL color='green-yellow'>если таких лайков больше одного</HL>, или{' '}
                            <HL color='plum'>Liked by {'{user}'}</HL>
                        </Grid.Cell>
                        <Grid.Cell dense='top' hlactive>
                            <Code value={code3} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top' hlactive>
                            Для того чтобы использовать <HL color='orange'>текст (textTemplate)</HL>{' '}
                            в нашем интерфейсе, мы должны создать экземпляр стандартного класса{' '}
                            <HL color='sandy-brown'>NSMutableAttributedString</HL>,{' '}
                            <HL color='light-sky-blue'>в который мы передаем текст и задаем</HL>{' '}
                            атрибуты его отображения:{' '}
                            <HL color='powder-blue'>
                                стандартный системный шрифт UIFont.systemFont
                            </HL>{' '}
                            <HL color='light-sky-blue'>12 размера</HL> и{' '}
                            <HL color='grey'>стандартной толщины</HL> и сохранить в нем
                        </Grid.Cell>
                        <Grid.Cell dense='top' hlactive>
                            <Code value={code4} />
                        </Grid.Cell>
                    </Grid>
                </Expand>
            </Section.Main>
        </Section.Block>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    Для того, чтобы не описывать все визуальные параметры элементов интерфейса
                    кодом, в современных редакторах используются встроенные визуальные редакторы (о
                    чем мы подробно напишем в конце следующей части).
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);
