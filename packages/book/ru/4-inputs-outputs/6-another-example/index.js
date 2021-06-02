import React from 'react';
import { Button, Code, Expand, Grid, HL, Section } from '@sc/ui';

const code1 = `
private func [[updateLikes]](red _ 1 3)() {
    self.likeButton.isSelected = [[self.post.isLiked]](wheat _ 1 3)
`;

const code2 = `
\xa0   let [[likerFollowee]](steel-blue _ 1 3) = [[self.post.likerFollowee]](green _ 1 3)
`;

const code3 = `
\xa0   [[if likerFollowee != nil]](aquamarine _ 1 3) {
        self.likerFolloweeProfilePictureView
        .[[showImageAsynchronously(imageURL: likerFollowee?.profilePictureURL)]](blue _ 1 3)

        self.likerFolloweeProfilePictureView.isHidden = false

        let textTemplate = (self.post.[[numberOfLikes > 1]](green-yellow _ 1 3)) ? [["Liked by {user} and {others}" : "Liked by {user}"]](plum _ 1 3)
`;

const code4 = `
\xa0       let [[text]](orange _ 1 3) = [[NSMutableAttributedString]](sandy-brown _ 1 3)([[string: textTemplate]](light-sky-blue _ 1 3), attributes: [[[NSAttributedString.Key.font: UIFont.systemFont]](powder-blue _ 1 3)([[ofSize: 12]](light-sky-blue _ 1 3), [[weight: UIFont.Weight.regular]](grey _ 1 3))])
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
                        <Grid.Cell border='right'>
                            Приватная функция{' '}
                            <HL color='red' active inline={3}>
                                ОбновитьЛайки
                            </HL>{' '}
                            определит,{' '}
                            <HL color='wheat' active inline={3}>
                                лайкали ли вы этот пост
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell>
                            <Code value={code1} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            а также сохранит в{' '}
                            <HL color='steel-blue' active inline={3}>
                                переменной likerFollowee
                            </HL>{' '}
                            <HL color='green' active inline={3}>
                                одного из фолловеров, лайкнувших конкретный пост
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
                            <Code value={code2} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            и,{' '}
                            <HL color='aquamarine' active inline={3}>
                                если среди лайкнувших пост в ленте конкретного юзера есть фоловеры
                                этого юзера
                            </HL>
                            ,{' '}
                            <HL color='blue' active inline={3}>
                                отобразит картинку его профиля
                            </HL>
                            , а также{' '}
                            <HL color='plum' active inline={3}>
                                надпись Liked by {'{user}'} and {'{others}'}
                            </HL>
                            ,{' '}
                            <HL color='green-yellow' active inline={3}>
                                если таких лайков больше одного
                            </HL>
                            , или{' '}
                            <HL color='plum' active inline={3}>
                                Liked by {'{user}'}
                            </HL>
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
                            <Code value={code3} />
                        </Grid.Cell>

                        <Grid.Cell border='right' dense='top'>
                            Для того чтобы использовать{' '}
                            <HL color='orange' active inline={3}>
                                текст (textTemplate)
                            </HL>{' '}
                            в нашем интерфейсе, мы должны создать экземпляр стандартного класса{' '}
                            <HL color='sandy-brown' active inline={3}>
                                NSMutableAttributedString
                            </HL>
                            ,{' '}
                            <HL color='light-sky-blue' active inline={3}>
                                в который мы передаем текст и задаем
                            </HL>{' '}
                            атрибуты его отображения:{' '}
                            <HL color='powder-blue' active inline={3}>
                                стандартный системный шрифт UIFont.systemFont
                            </HL>{' '}
                            <HL color='light-sky-blue' active inline={3}>
                                12 размера
                            </HL>{' '}
                            и{' '}
                            <HL color='grey' active inline={3}>
                                стандартной толщины
                            </HL>{' '}
                            и сохранить в нем
                        </Grid.Cell>
                        <Grid.Cell dense='top'>
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
