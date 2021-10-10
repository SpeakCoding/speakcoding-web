import React from 'react';
import { Button, Expand, Section } from '@sc/ui';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Дополнительно) Возможные конфликты при отправке изменений в “облачный” сервис{' '}
                    <Expand.Control htmlFor='5-3-2'>
                        <Button variant='rounded'>читать ⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-3-2'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Если изменения в одном и том же файле были произведены и локально, и
                                на сервере, вам потребуется сверять их. Для обновления используются
                                следующие команды:
                            </p>
                            <p>
                                <b>
                                    <i>Stash</i>
                                </b>{' '}
                                - сохранить и спрятать локальные изменения. Это позволит вам скачать
                                обновление и “восстановить” свое обновление поверх, чтобы не терять
                                и не переписывать локальные изменения заново.
                            </p>
                            <p>
                                Изменения сохраняются как версии, построчно. Если несколько человек
                                меняли одни и те же строки, то сверять и выбирать необходимую версию
                                придется вручную.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
