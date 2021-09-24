import React from 'react';
import { Code, Grid, HL, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

const code3 = `
func editCaption (newCaption Text)  {
    [[currentCaption]](orange _ 1) = [[newCaption]](light-sky-blue _ 1)
}`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <p>
                    В <Term id='function'>функциях</Term> мы описываем последовательность действий,
                    которые можно производить с конкретными <Term id='instance'>объектами</Term>{' '}
                    (экземплярами) какого-то <Term id='class'>класса</Term>. Изменение объекта - это
                    изменение <Term id='component'>составляющих</Term> и{' '}
                    <Term id='property'>характеристик</Term> этого{' '}
                    <Term id='instance'>объекта</Term>.
                </p>
                <p>
                    При описании действий, которые <Term id='function'>функция</Term> выполняет, мы
                    можем обращаться к <Term id='component'>составляющим</Term> экземпляра напрямую.
                    Так как <Term id='instance'>экземпляр класса</Term> содержит все{' '}
                    <Term id='component'>составляющие</Term>, перечисленные в описании этого класса,
                    нам не нужно будет добавлять их как <Term id='input'>вводные</Term>. Давайте
                    разберем на примере ниже.
                </p>
                <p>
                    Например, мы хотим отредактировать текст поста. Для этого в описании{' '}
                    <Term id='class'>класса</Term> Post мы создадим функцию editCaption(). Для
                    выполнения этой <Term id='function'>функции</Term> нам понадобится обновленный
                    текст поста, то есть он будет являться ее <Term id='input'>вводной</Term>, а
                    сама <Term id='function'>функция</Term> выглядит как последовательность
                    следующих действий:
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <div className={s.function}>
                    <Grid>
                        <Grid.Cell border='right'>
                            <ol>
                                <li>
                                    Взять{' '}
                                    <HL color='orange' active>
                                        нынешний текст
                                    </HL>{' '}
                                    поста
                                </li>
                                <li>
                                    Изменить его на{' '}
                                    <HL color='light-sky-blue' active>
                                        новый
                                    </HL>
                                </li>
                            </ol>
                        </Grid.Cell>
                        <Grid.Cell>
                            <div className={s.example}>
                                <div className={s.code}>
                                    <Code value={code3} />
                                </div>
                            </div>
                        </Grid.Cell>
                    </Grid>
                </div>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Как мы записали, Caption является составляющей класса Post. Поэтому, когда мы
                    создаем конкретный Post, у нас будет доступ ко всем составляющим этого класса.
                </p>
                <p>
                    Получается, нам не нужно добавлять в код шаг указания конкретного текста под
                    этим постом. Поскольку у каждого Поста всегда есть текст, а функция
                    editCaption() описана в классе Post, у нее будет прямой доступ к тексту
                    (Caption) этого конкретного поста.
                </p>
            </Section.Main>
        </Section.Block>
    </>
);
