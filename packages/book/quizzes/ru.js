/* eslint-disable camelcase */
import img_8_1 from './img/8-1.png';

export default {
    1: {
        title: 'Тест №1',
        description: 'Введение: как описать программу',
        questions: [
            {
                type: 'multiple-choice',
                title: 'Инстаграм состоит из:',
                options: [
                    { title: 'Comments' },
                    { title: 'Posts' },
                    { title: 'Feed' },
                    { title: 'Photos' },
                    { title: 'Все вышеперечисленное', correct: true }
                ],
                comment:
                    'Все перечисленные классы - части описания структуры Инстаграма, о которой мы говорили в первой главе. Как вы знаете, все программы состоят из составляющих, которые, в свою очередь, относятся к соответствующим им классам. Подходящий ответ - “все вышеперечисленное”, так как он описывает приложение наиболее полно.'
            },
            {
                type: 'multiple-choice',
                title: 'Пост состоит из:',
                options: [
                    { title: 'Users', correct: true },
                    { title: 'Images/Videos', correct: true },
                    { title: 'Caption', correct: true },
                    { title: 'Stories' }
                ],
                comment:
                    'Stories не являются составляющей поста, они относятся к отдельному классу.'
            }
        ],
        time: '~1 мин'
    },
    2: {
        title: 'Тест №2',
        description: 'Описание класса, составляющие и характеристики',
        questions: [
            {
                type: 'multiple-choice',
                title: 'К характеристикам профилей пользователей в Инстаграме относятся:',
                options: [
                    { title: 'Comment' },
                    { title: "'Business' статус профиля пользователя", correct: true },
                    { title: 'Posts' },
                    { title: 'Bio' },
                    { title: 'Private статус профиля пользователя', correct: true }
                ],
                comment:
                    'Несмотря на то, что при описании класса его характеристики будут записываться так же, как составляющие, вам будет легче разобраться и описать структуру, если вы разделите сущности (например, профиль пользователя) и их свойства (например, приватный профиль).'
            },
            {
                type: 'text',
                title: 'Класс - это...',
                comment:
                    'Вы могли выбрать для описания какие-то другие слова, здесь важно уяснить принцип, по которому мы определяем класс. Это "тип" сущностей, шаблон, который в общем виде описывает то, из чего будут состоять все конкретные объекты такого типа (экземпляры этого класса).'
            },
            {
                type: 'multiple-choice',
                title: 'Представьте свой рабочий стол. Давайте считать, что стол - это класс. Что из списка ниже относится к характеристикам этого класса?',
                options: [
                    { title: 'Цвет', correct: true },
                    { title: 'Компьютер, который стоит на столе' },
                    { title: 'Материал', correct: true },
                    { title: 'Блокнот, лежащий на столе' },
                    { title: 'Высота стола', correct: true }
                ],
                comment:
                    'Цвет, материал, высота стола - качества, с помощью которых мы можем описать особенности конкретного стола (конкретного экземпляра класса "стол").'
            },
            {
                type: 'multiple-choice',
                title: 'Перечислите все элементы, которые могут быть классами:',
                options: [
                    { title: 'Comment', correct: true },
                    { title: 'Сохранение story' },
                    { title: 'Like', correct: true },
                    { title: 'User', correct: true },
                    { title: 'Отправка сообщения другу' },
                    { title: 'Post', correct: true }
                ],
                comment:
                    'Классом может быть любая "категория" вещей/тип объектов, а вот действия с этими объектами (сохранение story или отправка сообщения) к классам уже не относятся.'
            }
        ],
        time: '~2 мин'
    },
    3: {
        title: 'Тест №3',
        description: 'Определение и описание функций',
        questions: [
            {
                type: 'text',
                title: 'Что такое функция?',
                comment:
                    'Вы могли выбрать для описания какие-то другие слова, главное - научиться отличать функцию от класса в коде. Функция описывает то, какие действия можно совершать с экземплярами классов и является перечислением шагов, которые машина должна выполнить для осуществления этих действий.'
            },
            {
                type: 'multiple-choice',
                title: 'Какой из вариантов ответа ниже является функцией?',
                options: [
                    { title: 'Лайк поста друга в Инстаграме' },
                    { title: 'Отправка сообщения другу' },
                    { title: 'Создание Story' },
                    { title: 'Поделиться постом с другом' },
                    { title: 'Все вышеперечисленные', correct: true }
                ],
                comment:
                    'Все перечисленные действия являются функциями, так как описывают то, что можно делать с экземплярами соответствующих классов.'
            },
            {
                type: 'multiple-choice',
                title: 'Какой из вариантов ниже НЕ является функцией?',
                options: [
                    { title: 'Число комментариев', correct: true },
                    { title: 'Создание Story в Инстаграме' },
                    { title: 'Обозначение друга в посте' },
                    { title: 'Изменение имени пользователя' }
                ],
                comment:
                    'Число комментариев не является функцией, ведь оно не описывает возможные действия с комментариями, а является результатом исполнения функции подсчета комментариев.'
            },
            {
                type: 'multiple-choice',
                title: 'Какой порядок действий программа должна совершить, чтобы отметить друга в посте?',
                options: [
                    {
                        title: 'Нажать "создать пост", выбрать друга, нажать "отметить друга", добавить картинку, сохранить'
                    },
                    {
                        title: 'Добавить картинку, нажать "создать пост", выбрать друга, нажать "отметить друга", сохранить'
                    },
                    {
                        title: 'Нажать "создать пост", выбрать картинку, сохранить, нажать "отметить друга", выбрать друга'
                    },
                    {
                        title: 'Добавить картинку, нажать "отметить друга", выбрать друга, сохранить, нажать "создать пост"'
                    },
                    {
                        title: 'Нажать "создать пост", выбрать картинку, нажать "отметить друга", выбрать друга, сохранить',
                        correct: true
                    }
                ],
                comment:
                    'С того момента, как мы создавали этот курс, алгоритм работы Инстаграма мог измениться. Главное, чтобы вы запомнили, что функция не что иное, как список действий, которые программа должна совершить для изменения состояния какого-то объекта (экземпляра класса).'
            },
            {
                type: 'text',
                title: 'Ниже описана функция editCaption класса Post. К какому классу принадлежит значение, которое мы получим в результате исполнения функции?',
                code: `
                func editCaption(newCaption Text) {
                    currentCaption = newCaption
                    post.edit.changecaption(newCaption)
                }`,
                comment:
                    'Правильный ответ - text, так как составляющая caption относится к классу Text.'
            }
        ],
        time: '~3 мин'
    },
    4: {
        title: 'Тест №4',
        description: 'Создание объектов и использование классов',
        questions: [
            {
                type: 'multiple-choice',
                title: 'Зачем мы создаем экземпляры классов?',
                options: [
                    {
                        title: 'Чтобы иметь возможность изменять конкретный экземпляр',
                        correct: true
                    },
                    { title: 'Нам не обязательно создавать экземпляры классов' },
                    { title: 'Чтобы иметь возможность описать класс' },
                    { title: 'Чтобы иметь возможность изменять свойства класса', correct: true }
                ],
                comment:
                    'Изменить конкретный экземпляр или свойство класса мы можем только создав конкретный экземпляр.'
            },
            {
                type: 'multiple-choice',
                title: 'Ниже перед вами - описание класса Post. Представьте, что мы создаем новый экземпляр класса Post: var myPost = new Post(); Какая из составляющих ниже не будет являться частью myPost?',
                code: `
                class {{hl:Post}}(steel-blue) {
                    {{hl:user}}(light-sky-blue)            {{hl:User}}(light-sky-blue)
                    {{hl:time}}(aquamarine)            {{hl:Time}}(aquamarine)
                    {{hl:image}}(green-yellow)           {{hl:Image}}(green-yellow)
                    {{hl:setOfImages}}(green)     [[[]Image}}(green)
                    {{hl:video}}(orange)           {{hl:Video}}(orange)
                    {{hl:setOfLikes}}(sandy-brown)      [[[]Like}}(sandy-brown)
                    {{hl:caption}}(red)         {{hl:Text}}(red)
                    {{hl:setOfComments}}(plum)   [[[]Comment}}(plum)
                }`,
                options: [
                    { title: 'user' },
                    { title: 'tag', correct: true },
                    { title: 'setOfLikes' },
                    { title: 'video' }
                ],
                comment: 'Tag, так как он не указан в перечисленных выше составляющих класса Post.'
            },
            {
                type: 'text',
                title: 'Чего не хватает в функции-конструкторе ниже?',
                code: `
                {{hl:User}}(steel-blue)({{hl:inputUsername Text}}(orange), {{hl:inputEmail Text}}(orange), {{hl:inputPassword Text}}(orange)) {
                    {{hl:self.username = inputUsername}}(red)
                    {{hl:self.password = inputPassword}}(red)
                    {{hl:???}}(red)
                }`,
                comment:
                    'self.email=inputEmail. По аналогии с другими составляющими User, мы должны сохранить полученное в скобках значение email как email этого конкретного пользователя. (self.)'
            },
            {
                type: 'text',
                title: 'На примере с User, описанном в главе, напишите функцию-конструктор для класса Post.',
                comment:
                    'В функции-конструкторе мы указываем те вводные, которые потребуются для создания экземпляра класса пост - пользователь, текст поста, картинка и/или видео поста, дата создания, локация. В большинстве случаев дата присваивается автоматически, а локацию можно выбрать относительно автоматически определяющего положение устройства. Позже, при работе с кодом приложения SpeakCoding, вы увидите, как это записывается в коде.'
            }
        ],
        time: '~3 мин'
    },
    5: {
        title: 'Тест №5',
        description: 'Временное хранение объектов',
        questions: [
            {
                type: 'multiple-choice',
                title: 'Какому классу принадлежит экземпляр, который мы сохранили в переменной: var nameUser?',
                options: [
                    { title: 'Post' },
                    { title: 'User', correct: true },
                    { title: 'Name' },
                    { title: 'Caption' }
                ],
                comment:
                    'Как вы помните, у переменных есть название и класс объектов, которые в ней можно хранить. Обычно название идет первым, с маленькой буквы, а класс вторым, с большой - названиеКласс.'
            },
            {
                type: 'single-choice',
                title: 'Какое значение нужно вставить вместо знаков вопроса ниже?',
                code: `
                func addLike(user User) {
                    var newLike {{hl:???}}(red)
                    newLike = new Like(user)
                    self.likes.add(newLike)
                }`,
                options: [
                    { title: 'User' },
                    { title: 'Post' },
                    { title: 'Like' },
                    { title: '[]Likes', correct: true }
                ],
                comment:
                    'Так как у поста может быть много лайков, правильным будет выбрать класс []Likes (набор лайков). Но, если вы выбрали Like, это тоже можно считать правильным ответом, подробнее о наборах мы поговорим в следующих главах.'
            }
        ],
        time: '~1 мин'
    },
    6: {
        title: 'Тест №6',
        description: 'Изменение состояния объектов',
        questions: [
            {
                type: 'single-choice',
                title: 'У вас есть переменная currentPost, хранящая экземпляр Поста, и переменная newCaption, хранящая новый текст для этого поста. Какой операцией можно обновить текст этого поста?',
                options: [
                    { title: 'currentPost = newCaption' },
                    { title: 'newCaption = currentPost' },
                    { title: 'currentPost.caption = newCaption', correct: true },
                    { title: 'currentPost.user(currentPost)' }
                ],
                comment:
                    'У поста есть составляющая - caption, мы обратимся к ней (запись через точку . означает обращение к составляющим или функциям этого объекта, в нашем случае - конкретного поста, и сохраним в ней новое значение (новый текст поста) - newCaption.'
            }
        ],
        time: '~30 сек'
    },
    7: {
        title: 'Тест №7',
        description: 'Все отображения поста',
        questions: [
            {
                type: 'multiple-choice',
                title: 'На каком экране/экранах пользователь может подписаться на другого пользователя?',
                options: [
                    { title: 'Список лайков', correct: true },
                    { title: 'Профиль пользователя', correct: true },
                    { title: 'Список фолловеров пользователя', correct: true },
                    { title: 'Лента постов' }
                ],
                comment:
                    "Вы можете легко проверить это, найдя  кнопку 'follow' в интерфейсе Инстаграма. Обратите внимание на экраны, между которыми вы перемещаетесь, все они описаны в файлах интерфейса соответствующих классов. Мы будем постоянно обращаться к экранам и views в процессе прохождения курса."
            }
        ],
        time: '~1 мин'
    },
    8: {
        title: 'Тест №8',
        description: 'Разбор экрана: из чего состоит view',
        questions: [
            {
                type: 'single-choice',
                title: 'Ниже описан класс PostEditorController - экрана редактирования поста. Что из перечисленного НЕ является составляющей этого класса?',
                img: img_8_1,
                options: [
                    { title: 'Post Image' },
                    { title: 'Post CaptionField' },
                    { title: 'Like Button', correct: true },
                    { title: 'Location Field' }
                ],
                comment:
                    'Кроме описания класса в файле [PostEditorController](https://github.com/SpeakCoding/iphone/blob/main/App/PostEditorController.swift), вы также можете проверить это, зайдя в Инстаграм.'
            }
        ],
        time: '~3 мин'
    },
    9: {
        title: 'Тест №9',
        description: 'Изменения составляющих и взаимодействие с классами',
        questions: [
            {
                type: 'single-choice',
                title: 'Для какого элемента интерфейса PostFeedView необходимо добавить исполнение функции при двойном быстром нажатии на этот элемент?',
                options: [
                    { title: 'Like Button' },
                    { title: 'Image', correct: true },
                    { title: 'Add a Comment' },
                    { title: 'User Picture' }
                ],
                comment: 'Image. Вы можете проверить это самостоятельно, зайдя в Инстаграм.'
            }
        ],
        time: '~15 сек'
    },
    10: {
        title: 'Тест №10',
        description: 'Файлы и папки',
        questions: [
            {
                type: 'multiple-choice',
                title: 'Какие из перечисленных файлов описывают наши основные (Model) классы?',
                options: [
                    { title: 'User.swift', correct: true },
                    { title: 'UserProfileView.swift' },
                    { title: 'PostTileCell.swift' },
                    { title: 'Post.swift', correct: true }
                ],
                comment:
                    'Обычно в названии файлов model классов присутствует только имя основного структурного элемента, который они описывают - поста, пользователя, комментария. Правильный ответ - User.swift, Post.swift.'
            },
            {
                type: 'single-choice',
                title: 'Сколько файлов, описывающих View и/или Controller классы для нашего основного класса User, находится в нашем репозитории?',
                options: [
                    { title: '7', correct: true },
                    { title: '3' },
                    { title: '10' },
                    { title: '1' }
                ],
                comment:
                    'Вы можете сосчитать их самостоятельно, открыв список всех файлов по ссылке на гитхаб, которой мы с вами поделились. Должно получиться семь: UserProfileView, UserSearchView, UserProfileEditorController, UsersListsViewController, UsersLookupViewController, UserCellView, UserCellView+FollowButton.'
            }
        ],
        time: '~7 мин'
    },
    11: {
        title: 'Тест №11',
        description: 'Сложноподчиненные предложения',
        questions: [
            {
                type: 'text',
                title: 'Что мы пытаемся сделать в коде ниже?',
                code: `
                var lastFollower User
                lastFollower = myAccount.getFollowers().last.getUserName()`,
                comment:
                    'Получить имя последнего подписавшегося на конкретный профиль пользователя.'
            },
            {
                type: 'text',
                title: 'Что мы пытаемся сделать в коде ниже?',
                code: `
                var lastPostLikes Set[Like]
                lastPostLikes = myAccount.getLastPost().getLikes()`,
                comment: 'Получить последние лайки к последнему посту конкретного пользователя.'
            },
            {
                type: 'text',
                title: 'Какая функция отсутствует в строчке ниже?',
                code: `
                var mutedSubscriptions Set[User]
                mutedSubscriptions = myAccount.{{hl:???}}(red).muted()`,
                comment: 'getFollowers.'
            },
            {
                type: 'text',
                title: 'К какому классу принадлежит commentReply?',
                code: `
                var commentReply {{hl:???}}(red)
                commentReply = myLastPost.getComment().last.getReply()`,
                comment: 'К классу Comment.'
            },
            {
                type: 'text',
                title: 'Что нужно добавить к коду ниже, чтобы получить ответы на ваши последние сториз?',
                code: `
                var storyReplies Set[Comment]
                storyReplies = myAccount.getStories().{{hl:???}}(red)`,
                comment: 'myAccount.getStories().**last.getReply()**'
            }
        ],
        time: '~5 мин'
    }
};
