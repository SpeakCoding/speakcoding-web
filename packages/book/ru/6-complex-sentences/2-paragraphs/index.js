import React from 'react';
import { Code, Section, Structure } from '@sc/ui';
import Term from '../../glossary/Term';
import IfElse from './IfElse';
import ForWhile from './ForWhile';
import Breaking from './Breaking';
import s from './style.css';

const code1 = `class Caption {
    ...
    func edit() {
        if self.live == true {
            return;
        }
    }
}`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h1>Абзацы</h1>
                <p>
                    Несколько подряд идущих предложений, имеющих общий контекст, можно выделить в{' '}
                    <Term id='paragraph' tooltip>
                        “абзац”
                    </Term>
                    . Обычно абзацы выделяются в тексте фигурными скобками {'{}'} Каждый новый абзац
                    мы начинаем с “красной строки”, каждая новая строка отступается tab’ом.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Structure>
                    <div className={s.example1}>
                        <Code value={code1} tabs />
                        <div className={s.block11}>
                            Функция, позволяющая редактировать текст поста
                        </div>
                        <div className={s.block12}>
                            Если пост уже выставлен - редактирование невозможно
                        </div>
                    </div>
                </Structure>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Все переменные, которые созданы в контексте “абзаца”, после закрытия абзаца
                    перестают существовать (дальше в коде их использовать нельзя).
                </p>
                <h2>Специальные абзацы</h2>
                <p>
                    Непосредственно перед началом <Term id='paragraph'>абзаца</Term> (перед фигурной
                    скобкой) может быть написано ключевое слово (аналогия в языке “подчинительные
                    союзы” - если, то и т.д.), что будет задавать специальные характеристики этому
                    абзацу.
                </p>
            </Section.Main>
        </Section.Block>

        <IfElse />

        <ForWhile />

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='function'>Функции</Term> можно считать{' '}
                    <Term id='paragraph'>абзацем</Term>, которому мы дали имя.
                </p>
                <p>
                    Если вы хотите записать отдельный абзац-условие внутри абзаца-цикла, tab-отступ
                    от начала строки в таком случае должен быть длиннее.
                </p>
            </Section.Main>
        </Section.Block>

        <Breaking />
    </Section>
);
