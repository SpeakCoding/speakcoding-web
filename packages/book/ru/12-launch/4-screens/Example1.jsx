import React from 'react';
import { Code, Grid, HL, Link, Section } from '@sc/ui';

const code1 = `private func [[showAllPostsAsList]](light-sky-blue)(preselectedPostIndex: Int) {`;

const code2 = `
\xa0   let [[postsViewController]](orange) = 
    [[UserPostsViewController]](sandy-brown)(posts: self.posts,
    refreshClosure: nil)
    postsViewController.title = "Posts"
    postsViewController.selectedPostIndex =
    preselectedPostIndex
`;

const code3 = `
\xa0   self.[[navigationController]](green)?.[[pushViewController]](steel-blue)(
        [[postsViewController]](orange), animated: true
    )
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    Давайте посмотрим на первый пример внутри{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/UserProfileViewController.swift'
                        blank
                    >
                        UserProfileViewController
                    </Link>
                    . В нем вы видите функцию <HL color='light-sky-blue'>showAllPostsAsList</HL>, в
                    которой описано, что произойдет, если вы захотите увидеть все посты пользователя
                    списком. Благодаря тому, что мы обернули{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/UserProfileViewController.swift'
                        blank
                    >
                        UserProfileViewController
                    </Link>{' '}
                    в UINavigationController, мы теперь можем обратиться к self.
                    <HL color='green'>navigationController</HL> и воспользоваться его стандартной
                    функций <HL color='steel-blue'>pushViewController</HL>, чтобы перейти к
                    соответствующему экрану.
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
                        мы создаем экземпляр <HL color='sandy-brown'>UserPostsViewController</HL> и
                        помещаем его в переменную <HL color='orange'>postsViewController</HL>.
                    </Grid.Cell>
                    <Grid.Cell hlactive dense='top bottom'>
                        <Code value={code2} />
                    </Grid.Cell>

                    <Grid.Cell border='right' hlactive>
                        мы вызываем стандартную составляющую класса UIViewController (как вы видите
                        в коде, это класс, который наследует наш UserPostsViewController) -{' '}
                        <HL color='green'>navigationController</HL> и его функцию{' '}
                        <HL color='steel-blue'>pushViewController</HL>, в которую передадим
                        сохраненный <HL color='orange'>postsViewController</HL> и которая позволит
                        перейти на нужный нам экран.
                    </Grid.Cell>
                    <Grid.Cell hlactive>
                        <Code value={code3} />
                    </Grid.Cell>
                </Grid>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Благодаря UINavigationController, мы сможем легко дать пользователю перейти к
                    списку постов, потом к списку комментариев поста, потом к профилю одного из
                    комментирующих, потом и к их списку постов, и все эти переходы будут сохранены.
                    Затем, нажимая кнопку “назад”, пользователь сможет прийти обратно ровно к тому,
                    с чего он начал.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
