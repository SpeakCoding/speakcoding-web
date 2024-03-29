import React from 'react';
import { Section } from '@sc/ui';

export default () => (
    <Section>
        <Section.Main narrow>
            <h1>Чтение</h1>
            <p>
                Поздравляем, вы дошли до последней главы! :) Это значит, что вы обладаете знаниями
                обо всех частях готового продукта и, надеемся, сможете детально разобраться в
                структуре кода. Мы подготовили эту главу-справку для того, чтобы помочь вам освежить
                в памяти информацию о том, как описываются основные структурные элементы приложения.
                В ней вы найдете некоторые особенности синтаксиса, ключевые слова и конструкции,
                используемые в swift. Все остальное - резюме материалов курса применительно к
                чтению.
            </p>
            <p>
                Итак, вы знаете, что у нас есть три основных типа файлов: models (основные
                структурные классы) - controllers (файлы отображения и взаимодействия с
                пользователем), а также функциональные (ServerAPI, SQLLiteDatabase, Cache,
                AppDelegate), которые необходимы для общей согласованной работы программы.
            </p>
            <p>
                Случается, что вам может недоставать каких-то элементов интерфейса в стандартных
                классах-контроллерах. Тогда, чтобы не раздувать описание стандартных классов, вы
                можете создавать собственные отдельные классы, которые добавят недостающие элементы.
                Обычно они являются расширением к имеющимся контроллерам, в нашем коде это классы
                AsynchronImageView, TaggedImageView, SegmentControl. Теоретически можно было бы
                добавить их в существующие контроллеры, но если этот класс переиспользуется в
                нескольких местах в коде, то для удобства его обычно выносят в отдельный файл.
            </p>
        </Section.Main>
    </Section>
);
