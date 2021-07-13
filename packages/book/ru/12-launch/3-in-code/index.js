import React from 'react';
import { HL, Link, Pre, Section } from '@sc/ui';

const code1 = `func application(_ [[application: UIApplication]](aquamarine), didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {`;

const code2 = `
\xa0   User.init[[CurrentUser()]](light-sky-blue)
    
    self.window = UIWindow([[frame: UIScreen.main.bounds]](orange))
    self.window!.tintColor = UIColor(named: "sc-blue")
    
    if [[User.current == nil]](light-sky-blue) {
        self.[[showLoginView]](sandy-brown)()
    } [[else]](red) {
        self.[[setupUI]](steel-blue)()
        self.[[window!.rootViewController = self.tabBarController]](steel-blue)
    }
    self.window!.makeKeyAndVisible()
        
    return true
}`;

export default () => (
    <Section>
        <Section.Main hlactive narrow>
            <h2>Как запуск программы выглядит в коде</h2>
            <p>
                Для простоты объяснения, давайте{' '}
                <Link
                    href='https://github.com/SpeakCoding/iphone/blob/main/App/AppDelegate.swift'
                    blank
                >
                    начнем читать код AppDelegate
                </Link>{' '}
                с 29 строки. В ней мы видим описание функции application, c двумя стандартными
                вводными, определенными в классе UIApplication, который мы наследуем:{' '}
                <HL color='aquamarine'>экземпляр application класса UIApplication</HL>, а также
                функцию didFinishLaunchingWithOptions с набором возможных опций для запуска -
                launchOptions.
            </p>
            <Pre value={code1} />
            <p>
                Первым шагом эта функция вызовет User.init
                <HL color='light-sky-blue'>CurrentUser()</HL>, которая определена в классе User
                (соответственно, в файле User.swift). Она проверит, сохранен ли{' '}
                <HL color='light-sky-blue'>текущий пользователь</HL> и загрузит его в User.current
                (“статическая” составляющая класса User). И, если нет -{' '}
                <HL color='sandy-brown'>покажет пользователю экран логина</HL>, а{' '}
                <HL color='red'>если да</HL> -{' '}
                <HL color='steel-blue' inline={3}>
                    окно основного "корневого" интерфейса - window
                </HL>{' '}
                (в нашем случае, это пять табов и лента постов).
            </p>
            <Pre value={code2} />
            <p>
                Как вы помните, для отображения содержимого окна мы должны создать экземпляр
                стандартного класса UIWindow (
                <HL color='orange' inline={3}>
                    согласно параметрам экрана устройства, на котором работает программа
                </HL>
                ), сохранить его в self.window и дальше изменять его составляющую{' '}
                <HL color='steel-blue'>rootViewController</HL>, заменяя на тот ViewController,
                который нам будет необходим.
            </p>
            <p>
                Функция <HL color='sandy-brown'>showLoginView</HL>() описывает все действия, которые
                нужно совершить для отображения в нашем окне экрана LogIn. В частности, она включает
                шаг, который кладет в составляющую self.window.
                <HL color='steel-blue'>rootViewController</HL> контроллер LoginVIew.
            </p>
            <p>
                Функция setupUI() создает экземпляр стандартного класса UITabBarController. Как вы
                помните, он отвечает за отображение нижнего меню “табов” нашего приложения (вкладки
                home, item search (поиск пользователей), userprofile, likes и newpost) и позволяет
                пользователю переключаться между основными экранами приложения.
            </p>
            <p>
                Дальше мы подробнее поговорим о шагах этих двух функций и зачем они нужны, но
                заметьте, что{' '}
                <b>функция application описывает основное назначение файла и класса AppDelegate</b>:
            </p>
            <ul>
                <li>
                    <b>
                        то, какие экраны при взаимодействии с программой пользователь увидит
                        первыми,
                    </b>
                </li>
                <li>
                    <b>
                        и какие контроллеры нужно запустить для этого отображения и взаимодействия.
                    </b>
                </li>
            </ul>
        </Section.Main>
    </Section>
);
