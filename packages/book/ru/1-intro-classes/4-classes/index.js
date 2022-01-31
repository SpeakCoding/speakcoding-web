import React from 'react';
import { Section } from '@sc/ui';
import TextToCode from '../../../common/1/text-to-class';
import Term from '../../glossary/Term';
import Example from '../../../common/1/class-examples';
import { Skill } from '../../../components';

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <h2>Класс</h2>
                    <p>
                        Для того чтобы программа позволила вам создавать <i>конкретный</i> пост или,
                        например, регистрировать <i>конкретного</i> нового пользователя, вы должны
                        сначала описать типы этих сущностей - посты, комментарии, пользователи и тд.
                        - в общем виде. Описание сущности в общем виде в программировании называется{' '}
                        <Term id='class' tooltip>
                            классом
                        </Term>
                        . А <i>конкретные</i> пользователи, посты, комментарии являются{' '}
                        <Term id='instance' tooltip>
                            экземплярами классов
                        </Term>
                        . О классе можно думать как о категории вещей. Например, у вас есть машина -
                        синий BMW. Она относится к Классу Машины. Класс описывает общие составляющие
                        и характеристики категории машин, но не является примером конкретной машины.
                        Чтобы описать конкретную машину (ваш синий БМВ), нам нужно создать
                        конкретный <Term id='instance'>экземпляр класса</Term> Машина и записать для
                        нее эти конкретные характеристики.
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <h2>Описание классов в коде</h2>
                    <p>
                        Описание классов выглядит совсем как структура выше. То, что мы только что
                        записали, уже очень близко к программированию. В примерах ниже вы увидите,
                        как это записывается на разных языках программирования.
                    </p>
                </Section.Main>
                <Section.Side />
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <TextToCode>
                        <TextToCode.Step1>
                            Структурное описание класса Post текстом
                        </TextToCode.Step1>
                        <TextToCode.Step2>
                            Все <b>Set of</b> - записываются в коде как квадратные скобки []
                        </TextToCode.Step2>
                        <TextToCode.Step3>
                            Для того, чтобы выделить описание класса, например, в начале стоит
                            ключевое слово “class”, все содержимое пишется с отступом и обрамлено
                            фигурными скобками {'{}'}
                        </TextToCode.Step3>
                        <TextToCode.Step4>
                            Для каждой составляющей будет задан не только ее Класс, но и Имя. Более
                            подробное объяснение этого вы найдете дальше в тексте главы.
                        </TextToCode.Step4>
                    </TextToCode>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        !Не обращайте внимания на слова, которых вы не знаете. Просто заметьте, как
                        текст из описания превращается в код!
                    </p>
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Example />
                </Section.Main>
            </Section.Block>

            <Section.Block>
                <Section.Main narrow>
                    <p>Текст → Структура → Описание через код</p>
                    <p>Это и есть программирование!</p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Skill>
            То, чему вы сейчас научились, пригодится вам для составления технических спецификаций
            продукта
        </Skill>
    </>
);
