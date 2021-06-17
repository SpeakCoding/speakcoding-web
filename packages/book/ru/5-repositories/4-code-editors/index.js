import React from 'react';
import { Img, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import xcode from '../../../assets/5/2-xcode.png';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h1>Редакторы (code environment)</h1>
                <p>Скачанный код можно открыть в любом, самом простом текстовом редакторе.</p>
                <p>
                    Однако существуют специальные редакторы с расширенным функционалом: в них
                    добавили подсветку кода, что позволило увеличить производительность и легче
                    читать код, появилась поддержка автоматического дополнения функций (похоже на
                    подсказки T9 в вашем телефоне), а также моментальное отображение строк с
                    ошибками.
                </p>
                <p>
                    Для создания программ для мобильных телефонов стоит использовать редакторы, в
                    которых есть встроенные визуальные инструменты по созданию интерфейса, а также
                    возможность компиляции и виртуального тестирования программы на разных
                    устройствах.
                </p>
                <p>
                    Как мы уже упоминали, для создания программ для iPhone необходимо использовать
                    редактор Xcode от Apple. Вы можете найти его в AppStore.
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={9}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdOA2V8AFcQojwGq2c5-azlmUqUs2YRCSgIk44RjDk4FquL7w/viewform?usp=sf_link'
        >
            Установите Xcode на свой компьютер. Запустите редактор и откройте проект, указав папку,
            в которую вы скачали репозиторий (например, Documents/SpeakCoding/iphone/).
        </Assignment>

        <Section>
            <Section.Block>
                <Section.Main>
                    <p>
                        <Img src={xcode} width='100%' />
                    </p>
                </Section.Main>
            </Section.Block>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Слева в редакторе отображается дерево файлов вашего проекта. В процессе
                        работы вы часто будете переходить от одного файла к другому, и эта панель
                        позволит легко переключаться, выбрав файл из списка. Вы увидите файлы с
                        названиями наших основных классов (User.swift, Post.swift, etc), а также
                        файлы с названием классов контроллеров нашего приложения
                        (FeedViewController.swift, etc).
                    </p>
                    <p>
                        После того, как вы выбрали файл, его содержимое отобразится в основной
                        центральной части - редакторе кода. Все строки в редакторе пронумерованы,
                        чтобы разработчикам легче было читать код и находить в нем ошибки. Также
                        редактор подсвечивает функциональные слова. Кликнув мышкой/правой кнопкой на
                        любой класс, можно найти опцию Jump to Definition и быстро перейти на
                        описание этого класса (или кликнув левой кнопкой, зажав Control+Command).
                    </p>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment
            number={10}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdbf4B3ETjq2YWODuc0R9Q3_w1WVoRdycWAVeROtcJx5yONsA/viewform?usp=sf_link'
        >
            Откройте скачанный репозиторий в XCode. Откройте файл, содержащий описание класса Post,
            найдите составляющую, в которой хранится пользователь - автор поста, и перейдите к
            описанию класса этой составляющей внутри редактора.
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>
                    Вы также можете открыть визуальный редактор для xib файлов, которые мы обсуждали
                    в предыдущей главе. Например, в файле PostFeedView.xib, вы увидите схематическое
                    визуальное отображение этой части экрана. Можете открыть Asset.xcassets и
                    увидеть список стандартных картинок и иконок, используемых приложением.
                </p>
                <p>
                    В самом верху списка файлов, можно найти сам проект (SpeakCoding). Выбрав его в
                    редакторе, вы увидите набор параметров нашего проекта. Единственный параметр,
                    который вам сейчас предстоит исправить - это “Team”. Вы можете найти его во
                    вкладке Sign-in & Capabilities. Тут вам нужно будет указать ваш Apple ID,
                    который будет использован для верификации приложения, перед тем как вы сможете
                    установить его на свой телефон.
                </p>
                <p>
                    В верхней части редактора и списка файлов вы найдете кнопку для компиляции
                    (выглядит как значок “Проиграть”/Play) и выбор устройств из списка. Вы можете
                    выбрать эмулятор одной из версий операционной системы iPhone или подключить по
                    кабелю свой телефон.
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={11}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdBmk6AmK_ENyUD1T8ax54q8lP2Z-0KXE_GJxus6FQrfd_RRg/viewform?usp=sf_link'
        >
            Откройте проект SpeakCoding в Xcode и запустите эмулятор учебного приложения для
            iPhone11 Pro
        </Assignment>

        <Assignment
            number={12}
            href='https://docs.google.com/forms/d/e/1FAIpQLSdDeNfDafdIeI0wMXtFGjdEW30eXJvFQ5tXLuXkm7Y3HmH0QA/viewform?usp=sf_link'
        >
            Откройте проект SpeakCoding в Xcode и запустите приложение на своем телефоне
        </Assignment>

        <Section>
            <Section.Main narrow>
                <p>
                    Чтобы установить получившееся приложение на ваш телефон, его необходимо
                    подключить через кабель. После чего он появится в списке выбора устройств.
                    Первая попытка будет неудачной (но ее все равно необходимо произвести), так как
                    необходимо разрешить на вашем телефоне установку приложений не из AppStore с
                    вашего компьютера. Для этого на вашем телефоне зайдите в Settings > General >
                    Profiles or Device Management. Там необходимо выбрать появившийся сертификат и
                    подтвердить, что ему можно доверять (Trust). После этого вы сможете повторить
                    установку приложения, и оно будет запущено на вашем телефоне.
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={13}
            href='https://docs.google.com/forms/d/e/1FAIpQLSfa10XrOvGORqbLfbNK0lcmEQw9z4qLxRxkQeTLHKAPSSyIVg/viewform?usp=sf_link'
        >
            Пройдитесь по всем файлам в списке файлов в Xcode (самая левая колонка в редакторе) и
            коротко опишите каждый файл. Например, в файле User.swift хранится описание класса User.
            А в файле UserProfileView - описание отображения профиля пользователя.
        </Assignment>
    </>
);