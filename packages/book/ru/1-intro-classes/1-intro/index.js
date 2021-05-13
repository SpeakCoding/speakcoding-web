import React from 'react';
import { Callout, Img, Section } from '@sc/ui';
import img from '../../../assets/1/1-numbers.svg';

export default () => (
    <Section>
        <Section.Main>
            <Section.Badge>Часть I Классы и Составляющие</Section.Badge>
            <h1>Вводное слово/ От текста к структуре к описанию через код</h1>
            <p>
                Язык программирования - такой же язык, как и любой другой, которым мы пользуемся.
                Его задача - описывать мир вокруг нас, называть предметы и явления.
            </p>
            <p>
                Человеческий язык очень богатый. Активный словарный запас любого из нас на родном
                языке включает больше <b>10 000 слов</b>. Можно сказать, что язык программирования
                более примитивный. Слова в нем более емкие, точные, что позволяет сделать
                повествование насыщенным, обходясь меньшим количеством знаков.
            </p>
            <p>
                Пытаться сразу писать сложным языком неэффективно. Мы ищем правильные сочетания
                слов, отвлекаемся на подбор точных выражений и быстро устаем.
            </p>
            <p>
                Если мы попробуем для начала описать словами то, на что смотрим, а затем перепишем
                этот повествовательный текст в виде структуры, она отдаленно станет напоминать код.
                Спустя еще несколько этапов станет очевидно, что язык программирования очень похож
                на любой из человеческих языков, только намного проще. Любой язык программирования
                включает меньше <b>1000 слов</b>.
            </p>
            <p>
                Каждый из нас может создавать структурные описания мира. Талантливый программист
                может выбирать наиболее емкие выражения для этих описаний, делать их
                оптимальными/максимально читабельными и понятными для других. Мы вернемся к этой
                мысли в конце нашего обучения.
            </p>
            <p>
                Вначале нам нужно научиться читать текст и разбираться в его структуре. Это один из
                основных навыков программирования. Каковы основные <b>“части речи”</b> в этом языке?
            </p>
            <h2>Составляющие Instagram</h2>
            <p>Давайте посмотрим на Инстаграм и разберем его на составляющие.</p>
            <Callout>
                Откройте Инстаграм. Что вы видите на экране? Опишите это текстом. Нет условно
                «правильного» варианта записи структуры существующей или будущей программы, но есть
                некая логика, которая, мы верим, сформируется у вас по мере обучения.
            </Callout>
        </Section.Main>
        <Section.Side>
            <Section.Sticky>
                <Img src={img} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
