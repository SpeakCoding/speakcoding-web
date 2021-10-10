import React from 'react';
import { HL, Img, Link, Pre, Section } from '@sc/ui';
import Example1 from './Example1';
import Example2 from './Example2';
import img from './app.png';

const code1 = `func application(_ {{hl:application: UIApplication}}(aquamarine), didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {`;

const code2 = `
\xa0   User.init{{hl:CurrentUser()}}(light-sky-blue)
    
    self.window = UIWindow({{hl:frame: UIScreen.main.bounds}}(orange))
    self.window!.tintColor = UIColor(named: "sc-blue")
    
    if {{hl:User.current == nil}}(light-sky-blue) {
        self.{{hl:showLoginView}}(sandy-brown)()
    } {{hl:else}}(red) {
        self.{{hl:setupUI}}(steel-blue)()
        self.{{hl:window!.rootViewController = self.tabBarController}}(steel-blue)
    }
    self.window!.makeKeyAndVisible()
        
    return true
}`;

const code3 = `
func {{hl:showLoginView}}(aquamarine)() {
    self.tabBarController = nil
    let loginViewController = {{hl:LoginViewController}}(light-sky-blue)(emailAddress: nil) {\t 
        self.setupUI()
        self.window!.rootViewController = self.tabBarController
    }
    let {{hl:loginFlowNavigationController}}(steel-blue) =
        {{hl:UINavigationController}}(orange)(rootViewController: {{hl:loginViewController}}(wheat))
    loginFlowNavigationController.modalPresentationStyle = .{{hl:fullScreen}}(plum)
    loginFlowNavigationController.{{hl:isNavigationBarHidden = true}}(turquoise)
    self.window!.{{hl:rootViewController}}(sandy-brown) = {{hl:loginFlowNavigationController}}(red)
}`;

export default () => (
    <Section>
        <Section.Block>
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
                    <HL color='light-sky-blue'>текущий пользователь</HL> и загрузит его в
                    User.current (“статическая” составляющая класса User). И, если нет -{' '}
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
                    Функция <HL color='sandy-brown'>showLoginView</HL>() описывает все действия,
                    которые нужно совершить для отображения в нашем окне экрана LogIn. В частности,
                    она включает шаг, который кладет в составляющую self.window.
                    <HL color='steel-blue'>rootViewController</HL> контроллер LoginVIew.
                </p>
                <p>
                    Функция setupUI() создает экземпляр стандартного класса UITabBarController. Как
                    вы помните, он отвечает за отображение нижнего меню “табов” нашего приложения
                    (вкладки home, item search (поиск пользователей), userprofile, likes и newpost)
                    и позволяет пользователю переключаться между основными экранами приложения.
                </p>
                <p>
                    Дальше мы подробнее поговорим о шагах этих двух функций и зачем они нужны, но
                    заметьте, что{' '}
                    <b>
                        функция application описывает основное назначение файла и класса AppDelegate
                    </b>
                    :
                </p>
                <ul>
                    <li>
                        то, какие экраны при взаимодействии с программой пользователь увидит
                        первыми,
                    </li>
                    <li>
                        и какие контроллеры нужно запустить для этого отображения и взаимодействия.
                    </li>
                </ul>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <h2>Экраны и переходы экранов</h2>
                <p>
                    Итак, вы можете думать о приложении как о некотором экране, в описании которого
                    мы можем задать, какой ViewController в нем показывать.
                </p>
                <p>
                    В предыдущей функции мы вызвали экран LoginView через функцию{' '}
                    <HL color='aquamarine'>showLoginView</HL>. Ниже в коде следует ее определение.
                    Как видите, в ней мы создаем экземпляр{' '}
                    <HL color='light-sky-blue'>LoginViewController</HL>. Создаем по умолчанию без
                    email и передаем completion функцию, которая выполнится, когда человек успешно
                    войдет в систему.
                </p>
                <Pre value={code3} />
                <p>
                    Затем создаем экземпляр <HL color='orange'>UINavigationController</HL> -{' '}
                    <HL color='steel-blue'>loginFlowNavigationController</HL>, в который мы
                    передадим наш <HL color='wheat'>LoginViewController</HL> (который станет{' '}
                    <HL color='sandy-brown'>rootViewController</HL> созданного
                    UINavigationController). Класс UINavigationController позволит нам сделать
                    переходы между экранами более простыми.
                </p>
                <p>
                    И именно <HL color='red'>loginFlowNavigationController</HL> мы помещаем в{' '}
                    <HL color='sandy-brown'>rootViewController</HL> нашего окна, предварительно
                    установив его параметры: экран займет{' '}
                    <HL color='plum' inline={3}>
                        все отведенное под него пространство (full screen)
                    </HL>
                    , и его <HL color='turquoise'>верхнее меню меню будет по умолчанию спрятано</HL>
                    .
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive>
                <p>
                    После того, как пользователь вошел в приложение, completion функция откроет
                    корневой экран (в нашем случае - экран с пятью вкладками), для этого будут
                    выполнены уже знакомые нам два шага:
                </p>
                <ol>
                    <li>вызовет для этого экрана функцию setupUI</li>
                    <li>поместит в rootviewcontroller составляющую tabbarcontroller.</li>
                </ol>
                <p>
                    Что касается функции setupUI, в ней мы создаем экземпляр UItabBarController и
                    пять кнопок (tab’ов) нижнего меню основного экрана. Мы сохраняем эти вкладки как
                    набор в составляющей “viewcontroller” tabbarcontrollers. Экземпляр этого класса
                    будет помещен в self.tabBarController, и затем в self.window.rootViewController
                    нашего окна. Это означает, что пользователь увидит в окне соответствующий экран
                    (корневой экран с пятью вкладками).
                </p>
                <p>
                    Мы уже поговорили о том, что каждый tab - это экземпляр класса
                    UINavigationController, у которого в составляющую rootViewController помещен
                    экземпляр класса одного из основных наших ViewControllers. Например, для первой
                    вкладки - это FeedViewController. Можно сказать, что мы как бы “обернули”
                    ViewController в NavigationController. Остается для каждой вкладки задать
                    tabBarItem (экземпляр класса UITabBarItem), в которую мы передаем две картинки
                    (для состояния, когда этот tab активен и нет), а также задать идентификационный
                    tag.
                </p>
            </Section.Main>

            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section.Block>

        <Example1 />
        <Example2 />
    </Section>
);
