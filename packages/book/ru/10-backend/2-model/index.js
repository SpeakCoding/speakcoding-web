import React from 'react';
import { HL, Img, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from './active-record.svg';

const code1 = `
class User < ActiveRecord
    has_many("posts")
end`;

const code2 = `
{{ключевое слово}}(hl:red) {{название функции}}(hl:steel-blue) (вводные)
    {{шаги функциии}}(t:text)`;

const code3 = `
{{new_user}}(hl:light-sky-blue) = User.new
{{new_user}}(hl:light-sky-blue).{{username}}(hl:plum) = "libermans"`;

export default () => (
    <Section>
        <Section.Block>
            <Section.Main hlactive>
                <h2>Описание model классов на сервере</h2>
                <p>Разберем это на примере описания класса User.</p>
                <p>Класс User описан в файле app/models/user.rb серверной части кода программы.</p>
                <Pre>{code1}</Pre>
                <p>
                    В этом классе мы ожидаем увидеть описание составляющих класса User и функций,
                    отвечающих за запись и чтение данных о пользователях из базы данных. Однако, с
                    помощью стандартного класса <b>ActiveRecord</b> библиотеки{' '}
                    <Term id='ruby-on-rails' tooltip>
                        Ruby on Rails
                    </Term>
                    , мы можем сильно упростить себе задачу, и он сделает все это за нас.
                </p>
                <p>
                    Так как большинство функций model классов на сервере одинаковые, мы не описываем
                    их отдельно, а наследуем вместе с <b>ActiveRecord</b>.
                </p>
                <p>
                    Кроме этого, внутри файла вы можете заметить много записей, начинающихся со
                    слова <b>def</b>. По структуре это может напомнить вам функции:
                </p>
                <Pre>{code2}</Pre>
                <p>
                    и это абсолютно верно. <b>def</b> здесь - ключевое слово вместо знакомого вам{' '}
                    <b>func</b>, которое пишется перед определением функции во многих языках,
                    включая Swift, используемого в нашем клиентском коде.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    <b>Разбор части кода из примера выше</b>
                </p>
                <p>
                    Итак, серверный класс User унаследован от класса <b>ActiveRecord</b>.
                </p>
                <Pre>{code1}</Pre>
                <p>
                    В файле model/User мы не видим таких составляющих как username или email.{' '}
                    <b>ActiveRecord</b> отвечает за то, чтобы все составляющие, указанные как
                    столбцы в одноименной таблице (Users), были добавлены в класс User
                    автоматически.
                </p>
                <p>
                    То есть, если в таблице базы данных серверной части есть нужные нам
                    столбцы-составляющие, мы сможем обратиться к{' '}
                    <HL color='plum' inline>
                        одноименным составляющим
                    </HL>{' '}
                    для{' '}
                    <HL color='light-sky-blue' inline>
                        конкретного экземпляра User
                    </HL>
                    , как если бы в описании класса User на сервере была такая составляющая.
                </p>
                <p>
                    <b>Пример:</b>
                </p>
                <Pre>{code3}</Pre>
                <p>
                    Таким образом, все составляющие, которые можно сохранить в базе данных в
                    текстовом или числовом виде напрямую, - например, ссылка на картинку user
                    profile picture - можно просто записать в соответствующий столбец, и сервер
                    возьмет их из таблицы при компиляции кода самостоятельно. Столбцы в серверной
                    базе данных позволяют не перечислять составляющие в описании класса (model).
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);
