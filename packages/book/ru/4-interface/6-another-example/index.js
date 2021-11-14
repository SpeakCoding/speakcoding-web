import React from 'react';
import { Button, Code, Expand, Grid, HL, Section } from '@sc/ui';

const code1 = `
private func {{hl:updateLikes}}(red)() {
    self.likeButton.isSelected = {{hl:self.post.isLiked}}(wheat)
`;

const code2 = `
\xa0   let {{hl:likerFollowee}}(steel-blue) = {{hl:self.post.likerFollowee}}(green)
`;

const code3 = `
\xa0   {{hl:if likerFollowee != nil}}(aquamarine) {
        self.likerFolloweeProfilePictureView
        .{{hl:showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)}}(blue)

        self.likerFolloweeProfilePictureView.isHidden = false

        let textTemplate = (self.post.{{hl:numberOfLikes > 1}}(green-yellow)) ? {{hl:"Liked by {user} and {others}" : "Liked by {user}"}}(plum)
`;

const code4 = `
\xa0       let {{hl:text}}(orange) = {{hl:NSMutableAttributedString}}(sandy-brown)({{hl:string: textTemplate}}(light-sky-blue), attributes: [[[NSAttributedString.Key.font: UIFont.systemFont}}(powder-blue)({{hl:ofSize: 12}}(light-sky-blue), {{hl:weight: UIFont.Weight.regular}}(grey))])
    }
}`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main>
                <h2>
                    (Дополнительно) Еще один пример, в котором мы задаем параметры визуальных
                    элементов в коде{' '}
                    <Expand.Control htmlFor='2-7-1'>
                        <Button variant='rounded'>читать ⤵</Button>
                    </Expand.Control>
                </h2>

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
                            Чтобы использовать <HL color='orange'>текст (textTemplate)</HL> в нашем
                            интерфейсе, мы должны создать экземпляр стандартного класса{' '}
                            <HL color='sandy-brown'>NSMutableAttributedString</HL>,{' '}
                            <HL color='light-sky-blue'>в который мы передаем текст и задаем</HL>{' '}
                            атрибуты его отображения:{' '}
                            <HL color='powder-blue'>
                                стандартный системный шрифт UIFont.systemFont
                            </HL>{' '}
                            <HL color='light-sky-blue'>12 размера</HL> и{' '}
                            <HL color='grey'>стандартной толщины</HL>, и сохранить их в нем
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
                    Чтобы не описывать все визуальные параметры элементов интерфейса кодом, в
                    современных редакторах используются встроенные визуальные редакторы (о чем мы
                    подробно напишем в конце следующей части).
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);
