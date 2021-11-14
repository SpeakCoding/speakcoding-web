import React from 'react';
import { Button, Expand, Hint, Link, Section } from '@sc/ui';
import { Quiz } from '../../../components';
import Term from '../../glossary/Term';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h1>Файлы и папки</h1>
                <p>
                    Обычно описание каждого класса в{' '}
                    <Term id='repository' tooltip>
                        репозитории
                    </Term>{' '}
                    или редакторе кода{' '}
                    <Expand.Control htmlFor='5-2-1'>
                        <Button variant='rounded'>находится в отдельном файле ⤵</Button>
                    </Expand.Control>
                    . Его принято называть так же, как класс, который в нем описан.
                </p>
                <Expand id='5-2-1'>
                    В случае с кодом нашего приложения все файлы хранятся в одной папке. Иногда
                    файлы группируются таким образом, чтобы файлы с описанием структуры классов
                    хранились в одной папке, а файлы с описанием классов отображения (интерфейса) -
                    в другой (такой пример мы покажем вам в серверной части кода нашего приложения в
                    будущем).
                </Expand>
                <p>
                    <b>Пример</b>: пример описания класса{' '}
                    <Link
                        href='https://github.com/SpeakCoding/iphone/blob/main/App/Post.swift'
                        blank
                    >
                        Post
                    </Link>
                    .
                </p>
                <p>
                    Классы,{' '}
                    <Expand.Control htmlFor='5-2-2'>
                        <Button variant='rounded'>описанные в файлах одной папки ⤵</Button>
                    </Expand.Control>
                    , можно использовать в каждом из файлов этой папки. Так, например, в файле,
                    описывающем класс отображения Post в ленте - PostFeedView.swift, мы используем
                    класс Post (var post: Post) в списке составляющих класса PostFeedView.
                </p>
                <Expand id='5-2-2'>
                    Если файл, который вы хотите использовать, лежит в другой папке, то в некоторых
                    языках вам понадобятся ключевые слова, которые позволят импортировать классы из
                    другой папки. Также, используя определенные ключевые слова, можно импортировать
                    классы напрямую из Интернет-хранилищ (таких как GitHub).
                </Expand>
            </Section.Main>
        </Section>

        <Quiz id='ru/10' />

        <Section>
            <Section.Main narrow>
                <p>
                    Кроме основных, “сущностных” файлов программы, в списке есть несколько
                    функциональных файлов. Чаще всего в них описаны настройки для{' '}
                    <Term id='compiler' tooltip>
                        компилятора
                    </Term>{' '}
                    или настройки самого редактора кода.
                </p>
                <p>
                    Примером одной из настроек можно считать подключение специального режима для
                    работы с кодом. С целью защиты устройств, создавать приложение стало возможно
                    только из подключенного developer mode, он же позволяет сертифицировать
                    приложения. Включить developer mode и выбрать рабочую группу, к которой
                    относится создаваемый или редактируемый вами код, можно непосредственно в
                    настройках редактора. Мы расскажем о работе с ним подробнее в следующих главах.
                    В нашем случае для создания приложений на iOS используется редактор{' '}
                    <Hint>
                        Xcode
                        <Hint.Tooltip>
                            Xcode - редактор, используемый для написания приложений для MacOS. Если
                            у вас другая операционная система, вы можете попробовать скачать
                            редактор Visual Studio Code или просто смотреть на файлы, которые мы
                            обсуждаем в этой главе, онлайн. Ссылка на репозиторий открыта и его
                            может посмотреть любой человек.
                        </Hint.Tooltip>
                    </Hint>
                    . Вы можете найти его в AppStore.
                </p>
                <p>Кроме этого, в нашем репозитории вы увидите:</p>
                <ul>
                    <li>
                        Папку Asset, в которой хранятся отрисованные визуальные элементы,
                        использующиеся в интерфейсе. Мы самостоятельно переносим их туда при
                        создании проекта и даем им имена, которые можем использовать в коде.
                    </li>
                    <li>
                        Storyboard - встроенный редактор, который позволяет разложить дизайны разных
                        экранов (views), схематично описать переходы между ними, добавить кнопки.
                    </li>
                    <li>
                        .plist - файл описания параметров для <Term id='compiler'>компилятора</Term>
                        .
                    </li>
                </ul>
            </Section.Main>
        </Section>
    </>
);
