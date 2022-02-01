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
                <h1>Paragraphs</h1>
                <p>
                    Several consecutive sentences with a common context can be grouped into a{' '}
                    <Term id='paragraph' tooltip>
                        paragraph
                    </Term>
                    . Paragraphs are typically marked in text using curly brackets {'{}'}. We start
                    each new paragraph, and each new string within it, with an indent.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Structure>
                    <div className={s.example1}>
                        <Code value={code1} tabs />
                    </div>
                </Structure>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    All variables created in the context of a ‘paragraph’ cease to exist when the
                    paragraph is closed (and can no longer be used in the text).
                </p>
                <h2>Special paragraphs</h2>
                <p>
                    Right before the start of a <Term id='paragraph'>paragraph</Term> (before the
                    curly bracket) there may be a key word (which corresponds to a subordinate
                    conjunction in regular language, e.g., if, then, etc.) that gives this paragraph
                    special properties.
                </p>
            </Section.Main>
        </Section.Block>

        <IfElse />

        <ForWhile />

        <Section.Block>
            <Section.Main narrow>
                <p>
                    <Term id='function'>A function</Term> can be considered as the{' '}
                    <Term id='paragraph'>paragraph</Term> to which we have given a name.
                </p>
                <p>
                    If you wish to write a separate paragraph condition within the paragraph loop,
                    the tab indentation at the start of the string will need to be longer.
                </p>
            </Section.Main>
        </Section.Block>

        <Breaking />
    </Section>
);
