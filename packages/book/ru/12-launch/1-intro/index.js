import React from 'react';
import { Section } from '@sc/ui';

export default () => (
    <Section>
        <Section.Main narrow>
            <h1>Запуск AppDelegate и Main</h1>
            <p>
                У каждого приложения есть файл, с которого начинается работа программы. В
                стандартном случае в этом файле должна была быть описана функция со стандартным
                именем (например, “main”). Это начальная функция, которая запускает работу всей
                программы, - место, где начинаются все операции.
            </p>
            <p>
                По сути, внутри этой функции будут описаны шаги необходимые для запуска приложения и
                вывода на экран основных view, которые пользователь должен увидеть при первом
                взаимодействии с программой. Это может быть функция “показать логин” или основной
                экран приложения с лентой постов.
            </p>
            <p>
                <b>Для iOS приложения выполнять роль этой функции может:</b>
            </p>
            <ul>
                <li>
                    класс, который наследует класс App стандартной библиотеки Foundation. Чтобы
                    компилятору было проще найти, откуда читать код, этот класс должен быть помечен
                    тегом @main.
                </li>
                <li>
                    класс, наследующий класс UIAppDelegate стандартной библиотеки Foundation. Этот
                    класс также должен быть помечен тегом @UIApplicationMain. В нем должна быть
                    описана функция application, с выполнения которой и начнется запуск программы.
                </li>
            </ul>
            <p>
                В случае нашего приложения это файл и одноименный класс AppDelegate. Можно сказать,
                что <b>AppDelegate</b> - это контроллер всей программы.
            </p>
        </Section.Main>
    </Section>
);
