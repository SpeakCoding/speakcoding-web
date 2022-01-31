import React from 'react';
import { Button, Expand, Pre, Section } from '@sc/ui';
import s from './style.css';

const code1 = `
var numberOfLikes: Int;
numberOfLikes = 0;`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Дополнительно) Об&nbsp;использовании классов{' '}
                    <Expand.Control htmlFor='3-3-1'>
                        <Button variant='rounded'>читать ⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='3-3-1'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Для создания новых объектов стандартных классов - string, Int/uint,
                                float и bool, которые мы обсуждали в первой части, не требуется
                                запускать функцию-конструктор, а можно напрямую в коде написать
                                соответствующее значение. Например, для текстовой строки можно
                                просто написать ее в кавычках “” (“пример”) или для числового
                                значения написать цифру.
                            </p>
                            <p>
                                <b>Пример кода:</b>
                            </p>
                            <Pre>{code1}</Pre>
                            <p className={s.heading}>Deinit</p>
                            <p>
                                Когда мы удаляем какой-то объект класса, иногда требуется
                                "подчистить" код. Так как внутри этого объекта мы могли использовать
                                обращение к другим объектам, нужно удалить его, чтобы не увеличивать
                                память. Большинство объектов удаляется самостоятельно, но иногда вам
                                потребуется функция deinit. Ее примеры мы рассмотрим позже при
                                чтении кода.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </Section>
);
