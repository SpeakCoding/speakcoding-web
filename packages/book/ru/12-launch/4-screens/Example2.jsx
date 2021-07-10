import React from 'react';
import { Code, Grid, HL, Link, Section } from '@sc/ui';

const code1 = `
@IBAction private func [[editProfile]](plum)() {
    func handleUserProfileUpdate(...) {
        ...
        self.dismiss(animated: true,
            completion: nil)
    }`;

const code2 = `
\xa0   let [[profileEditor]](orange) =
        [[UserProfileEditorController]](sandy-brown)(
            completion: handleUserProfileUpdate
        )
`;

const code3 = `
\xa0   let navigationController =
        [[UINavigationController]](green)(
            rootViewController: [[profileEditor]](orange)
        )
    ...
`;

const code4 = `
\xa0   [[self]](steel-blue).[[present]](red)(
        [[navigationController]](green), animated: true, completion: nil
    )
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    Альтернативный способ переключения между экранами можно увидеть в другой функции
                    этого файла -{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/UserProfileViewController.swift'
                        blank
                    >
                        <HL color='plum'>EditProfile</HL>
                    </Link>
                    :
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Grid cols='38% 1fr'>
                    <Grid.Cell border='right bottom'>
                        <b>Описание шагов функции словами</b>
                    </Grid.Cell>
                    <Grid.Cell border='bottom'>
                        <b>Как это выглядит в коде</b>
                    </Grid.Cell>

                    <Grid.Cell border='right' />
                    <Grid.Cell hlactive>
                        <Code value={code1} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive dense='top bottom'>
                        вначале мы создаем экземпляр контроллера{' '}
                        <HL color='sandy-brown'>UserProfileEditorController</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive dense='top bottom'>
                        <Code value={code2} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive dense='bottom'>
                        оборачиваем <HL color='orange'>его</HL> в свой{' '}
                        <HL color='green'>navigationController</HL>
                    </Grid.Cell>
                    <Grid.Cell hlactive dense='bottom'>
                        <Code value={code3} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        а затем <HL color='green'>передаем его</HL>{' '}
                        <HL color='steel-blue'>текущему view контроллеру</HL>, чтобы он{' '}
                        <HL color='red'>отобразил</HL> его вместо себя.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code4} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    Функция <HL color='steel-blue'>self</HL>.<HL color='red'>present</HL> заменит
                    отображение текущего view controller на UserProfileEditorController (обернутый в
                    собственный navigation контроллер). А по завершению редактирования поста будет
                    вызвана completion функция handleUserProfileUpdate, которая, в свою очередь,
                    вызовет функцию self.dismiss, возвращающую обратно отражение нашего
                    UserProfileViewController.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
