import React from 'react';
import { HL, Img, Pre, Section } from '@sc/ui';
import Example1 from './Example1';
import Example2 from './Example2';
import img from './app.png';

const code1 = `
func [[showLoginView]](aquamarine)() {
    self.tabBarController = nil
    let loginViewController = [[LoginViewController]](light-sky-blue)(emailAddress: nil) {\t 
        self.setupUI()
        self.window!.rootViewController = self.tabBarController
    }
    let [[loginFlowNavigationController]](steel-blue) =
        [[UINavigationController]](orange)(rootViewController: [[loginViewController]](wheat))
    loginFlowNavigationController.modalPresentationStyle = .[[fullScreen]](plum)
    loginFlowNavigationController.[[isNavigationBarHidden = true]](turquoise)
    self.window!.[[rootViewController]](sandy-brown) = [[loginFlowNavigationController]](red)
}`;

export default () => (
    <Section>
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
                <Pre value={code1} />
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
