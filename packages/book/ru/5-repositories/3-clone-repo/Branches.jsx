import React from 'react';
import { Button, Expand, Section } from '@sc/ui';
import { Assignment } from '../../../components';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Дополнительно) Ветки{' '}
                    <Expand.Control htmlFor='5-3-1'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-3-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Так как этот курс проходят и другие студенты, мы не даем вам
                                возможность менять основную версию кода. Однако вы можете создать
                                свою ветку (копию кода) и вносить изменения в нее. Обычно
                                программисты, которые работают над проектами, так же сначала вносят
                                изменения в свои отдельные ветки.
                            </p>
                            <p>
                                <b>
                                    <i>Checkout</i>
                                </b>{' '}
                                - переходить между ветками (или создавать новую ветку, если ветки с
                                таким именем нету). Checkout ветки обновляет файлы в локальной
                                версии, чтобы она совпадала с серверной.
                            </p>
                            <p>
                                Список существующих веток можно посмотреть, либо в web interface -
                                кнопка выбора ветки находится в левой части экрана, прямо над
                                папками с кодом, или GitHub Desktop, нажав кнопку Current Branch.
                            </p>
                        </Section.Main>
                    </Section.Block>

                    <Assignment
                        number={8}
                        href='https://docs.google.com/forms/d/e/1FAIpQLSczLCE9N5_XL1nE0hrWmkXHbZelIF2Y6fcy9PMo3CKWSZy9xg/viewform?usp=sf_link'
                    >
                        Попробуйте создать свою ветку кода с названием Имя_Фамилия и перейдите на
                        нее
                    </Assignment>

                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Изменения основной ветки не будут попадать в вашу ветку
                                автоматически. Это делается с помощью команды{' '}
                                <b>
                                    <i>Merge</i>
                                </b>
                                . Так же эта команда позволит вам перенести изменения, добавленные в
                                вашу ветку, в основную “main” ветку. Не забудьте перед отправкой
                                пройтись по изменениям в changed files.
                            </p>
                            <p>
                                Как вы могли заметить, процесс работы над кодом с помощью Git
                                коллаборативный, параллельный, но не одновременный.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);