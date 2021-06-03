import React from 'react';
import { Button, Expand, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Дополнительно) Консоль (Terminal) - командная строка{' '}
                    <Expand.Control htmlFor='5-5-1'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-5-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                <Term id='command-prompt' tooltip>
                                    Командная строка
                                </Term>{' '}
                                позволяет управлять компьютером с помощью текстовых команд. Вместо
                                графического интерфейса, к которому мы с вами привыкли, здесь есть
                                только текстовый интерфейс, но по сути это то же самое, как если бы
                                мы кликали по папкам “мышкой”.
                            </p>
                            <p>
                                В текстовой части командной строки отображается имя пользователя -
                                далее идет название компьютера в системе, и, через знаки ~ $
                                название папки, в которой вы находитесь (~ означает, что мы
                                находимся в локальном каталоге папок пользователя, под которым мы
                                зашли в систему, а $ просто означает разделитель).
                            </p>
                            <p>
                                Стандартных и наиболее часто используемых текстовых команд не так
                                много:
                            </p>
                            <p className={s.commands}>
                                <code>ls</code> <span>- list - отобразить список папок</span>
                                <code>cd</code> <span>- change directory</span>
                                <code>git pull</code> <span>- скачать</span>
                                <code>git push</code> <span>- отправить</span>
                            </p>
                            <p>
                                Когда для написания программы нужны дополнительные библиотеки,
                                существуют приложения, которые помогают их скачать, но они все
                                работают с командной строкой.
                            </p>
                            <p>
                                Кроме описанных выше случаев,{' '}
                                <Term id='command-prompt'>командная строка</Term> также часто
                                используется для запуска работы сервера.
                            </p>
                            <p>
                                Скачивать/отправлять изменения в коде можно также с помощью
                                командной строки.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
