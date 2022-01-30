import React from 'react';
import { Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';
import Terminal from './Terminal';
import EditorExample from '../../../common/5/editor';
import s from './style.css';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h1>Layout и работа с визуальными редакторами</h1>
                </Section.Main>
            </Section.Block>

            <EditorExample variant={2}>
                <Section.Block>
                    <Section.Main>
                        <p>
                            Здесь <EditorExample.Link name='tree'>слева</EditorExample.Link> вы
                            видите список файлов, в которых хранится описание классов.{' '}
                            <EditorExample.Link name='xib'>
                                Файл с визуальным редактором
                            </EditorExample.Link>{' '}
                            элементов интерфейса имеет расширение{' '}
                            <Term id='xib' tooltip>
                                .xml/.html/.xib
                            </Term>{' '}
                            (.xib - это то же самое, что xml/html, расширение .xib специфично для
                            iOS). Как вы помните, это файлы, позволяющие вам задавать и
                            редактировать визуальное расположение элементов какого-либо view.
                        </p>
                        <p>
                            Кликнув на любой{' '}
                            <EditorExample.Link name='interface'>
                                элемент интерфейса
                            </EditorExample.Link>{' '}
                            PostFeedView (на картинке или в списке), вы увидите{' '}
                            <EditorExample.Link name='parameters'>меню</EditorExample.Link> справа,
                            где будут описаны его параметры. Так как интерфейс состоит из
                            стандартных классов, параметры элементов будут стандартными. По
                            необходимости вы можете менять их так, как посчитаете нужным.
                        </p>
                    </Section.Main>
                    <Section.Side />
                </Section.Block>
                <Section.Block />
            </EditorExample>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        По сути, .xib является дополнением файла view - в нем будут все те элементы
                        отображения, которые мы уже описали, но они будут представлены графически,
                        что упрощает работу по созданию интерфейса. Файл .xib не является
                        обязательным, можно было бы описать все это кодом и добавить описание в
                        файлы view. Как вы уже знаете, такой вариант описания элементов интерфейса
                        менее наглядный и более трудоемкий, поэтому со временем развились
                        инструменты, подобные редакторам работы с изображениями.
                    </p>
                    <p>
                        <b>Так может выглядеть порядок действий при создании интерфейса:</b>
                    </p>
                    <div className={s.steps}>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Шаг 1:</b>
                            </div>
                            <div className={s.text}>Добавил элемент в список</div>
                        </div>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Шаг 2:</b>
                            </div>
                            <div className={s.text}>Добавил в layout</div>
                        </div>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Шаг 3:</b>
                            </div>
                            <div className={s.text}>Задал необходимые визуальные параметры</div>
                        </div>
                        <div className={s.step}>
                            <div className={s.number}>
                                <b>Шаг 4:</b>
                            </div>
                            <div className={s.text}>
                                После чего связал элементы из списка с описанными ранее
                                составляющими класса. Это позволяет нам не описывать эту связь
                                кодом.
                            </div>
                        </div>
                    </div>
                    <p>
                        Также в этом визуальном редакторе вы можете связать действия с теми или
                        иными элементами интерфейса с функциями соответствующего класса.
                    </p>
                    <p>
                        <b>Пример:</b> У likebutton есть действие “нажать”. Визуальный редактор
                        позволяет просто добавить это действие, не описывая эту связь в коде. Тогда
                        то, что мы поясняли в предыдущей главе, не потребует от вас записи всех этих
                        шагов в коде.
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='ru/14' />

        <Section>
            <Terminal />
        </Section>
    </>
);
