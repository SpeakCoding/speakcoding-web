import React from 'react';
import { Img, Section } from '@sc/ui';
import img1 from '../../../assets/12/1-xcode.png';
import img2 from '../../../assets/12/2-layers.svg';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main narrow>
                <h2>Что произойдет при запуске</h2>
                <p>
                    Вы можете проверить это самостоятельно, если подключите свой телефон к
                    компьютеру, на котором установлен Xcode и запустите эмулятор SpeakCoding. Для
                    этого в списке устройств в верхнем меню редактора выберите подключенный телефон,
                    нажмите кнопку build - треугольник, похожий на значок play слева от списка
                    устройств. После чего учебное приложение SpeakCoding появится у вас на телефоне.
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <p>
                    <Img src={img1} />
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Когда вы нажимаете на иконку приложения на своем телефоне, вы видите экран с
                    логином, если открываете это приложение впервые, и экран с лентой постов, если
                    вы уже зарегистрированы в программе. Для того, чтобы отобразить LoginView на
                    экране, нам сначала необходимо создать экземпляр стандартного системного класса
                    UIWindow (окна).
                </p>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <p>
                    Окно включает в себя набор элементов видимых на экране в текущем статическом
                    состоянии. Это становится понятнее, если представить себе текущее состояние как
                    текущее положение ленты постов на экране. В любом положении ленты на экране вы
                    можете видеть только один пост целиком. Его комментарии и лайки будут
                    “свернуты”, и для их просмотра вам нужно будет перейти на отдельный экран. Окно
                    выполняет роль прозрачной прослойки между интерфейсом (view), описанным в
                    программе, и экраном конкретного устройства, на котором запущена программа. У
                    самого окна нет никакого видимого контента. Весь контент на дисплее вашего
                    устройства - это описанные в файле отображения элементы интерфейса.
                </p>
                <p>
                    Создав экземпляр окна (экземпляр класса UIWindow) и задав для него необходимый
                    ViewController, мы укажем системе, какой интерфейс мы хотим отобразить.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img2} />
                </Section.Sticky>
            </Section.Side>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <p>
                    Пользователь увидит экран Login, сможет указать свой email и пароль и отправить
                    их на сервер. Если авторизация пройдет удачно, то приложение получит от сервера
                    экземпляр класса User с ключем (Authentication Token), которые будут сохранены в
                    локальное хранилище (currentUser). После чего пользователь должен увидеть
                    основной экран приложения. Для этого нам потребуется задать окну (UIWindow)
                    новый ViewController. Основной экран нашего приложения состоит из пяти вкладок
                    (tab’ов), каждая из которых представляет один из основных наших view. В первую
                    очередь открывается вкладка с лентой постов тех, кого мы читаем (фолловим) -
                    FeedViewController. Чтобы сделать это, мы создадим экземпляр стандартного класса
                    UITabBarController, укажем для него пять основных view controllers, и сохраним
                    этот экземпляр как основной view для нашего окна.
                </p>
                <p>
                    Каждый наш View мы также предварительно можем поместить в NavigationView
                    (экземпляр класса UINavigationController), в будущем это позволит нам
                    производить простые переходы к второстепенным экранам.
                </p>
                <p>
                    Например, перейдя на пятый таб нашего приложения - экран профиля пользователя
                    (UserProfileViewController), вы можете перейти на экран ленты постов этого
                    пользователя (UserPostsViewController). Так как UserProfileViewController
                    заранее был помещен в UINavigationController, мы можем воспользоваться
                    стандартной функцией этого класса pushViewController и перейти на новый экран.
                    При этом в верхнем меню у пользователя остается возможность перейти обратно на
                    предыдущий экран. Все эта логика интерфейса будет реализована за нас функциями
                    стандартного класса UINavigationController.
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);