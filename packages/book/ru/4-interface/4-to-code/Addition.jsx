import React from 'react';
import { Button, Expand, Hint, Icon, Pre, Section, Structure } from '@sc/ui';
import Term from '../../glossary/Term';
import s from './style.css';

export default () => (
    <Section.Main>
        <h2>
            (Дополнительно) Наследование классов{' '}
            <Expand.Control htmlFor='2-5-1'>
                <Button variant='rounded'>⤵</Button>
            </Expand.Control>
        </h2>

        <Expand id='2-5-1'>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Post (а вернее в его отображении PostFeedView) мы увидим в ленте постов (а
                        вернее в ее отображении FeedView). Мы могли бы представить PostFeedView как
                        клетку в вертикальной таблице с одним столбцом.
                    </p>
                    <p>
                        Чтобы отобразить пост внутри ленты постов мы используем стандартные классы
                        библиотеки UIKit: UITableView (таблица) и UITableViewCell (ячейка таблицы),
                        которые имеют все необходимые составляющие и функции. И нам необходимо,
                        чтобы эти составляющие и функции были также у наших классов PostFeedView и
                        FeedView. Для этого в программировании используется “наследование классов”.
                    </p>
                    <p>
                        Существуют дочерние и материнские классы.{' '}
                        <Term id='child-class' tooltip>
                            Дочерний класс
                        </Term>{' '}
                        наследует материнский класс: его характеристики, составляющие и функции; но
                        вы также можете добавить новые.
                    </p>
                    <p>
                        <b>Пример</b>: Если мы хотим добавить кнопку в мобильное приложение, мы
                        можем импортировать ее в стандартном виде: она будет прямоугольной, серой, с
                        белым текстом посередине. Чтобы дополнить импортированный{' '}
                        <Term id='parent-class' tooltip>
                            материнский класс
                        </Term>{' '}
                        Button, мы создаем <Term id='child-class'>дочерний класс</Term> и описываем
                        необходимые нам изменения. В случае с кнопкой, мы можем изменить такие
                        состояния ее <Term id='component'>составляющих</Term>/
                        <Term id='property'>характеристик</Term> как цвет или размер. При этом все
                        остальное она наследует от материнского класса.
                    </p>
                    <p>
                        В случае с PostFeedView, мы просто задаем, что он наследует стандартный
                        класс UITableViewCell, а значит и все его свойства . Благодаря этому мы
                        сможем добавлять экземпляры этого класса, они будут как бы “ячейкой” внутри
                        FeedView, который, в свою очередь, унаследует ее от стандартного класса
                        UITableView.
                    </p>
                </Section.Main>
            </Section.Block>

            <div className={s.transformation}>
                <Structure>
                    <h4>FeedView</h4>
                    <ul>
                        <li>ProfilePicture</li>
                        <li>userName</li>
                        <li>Location</li>
                        <li>Post Image</li>
                        <li>Like Button</li>
                        <li>Comment</li>
                        <li>Bookmark</li>
                        <li>@username liked</li>
                        <li>likeCount</li>
                        <li>postText</li>
                        <li>commentCount</li>
                        <li>Date</li>
                    </ul>
                </Structure>
                <Icon name='arrow-right' size={16} />
                <Structure>
                    <h4>PostFeedView</h4>
                    <ul>
                        <li>ProfilePictureView</li>
                        <li>userNameLabel</li>
                        <li>userLocationLabel</li>
                        <li>PostImageView</li>
                        <li>likeButton</li>
                        <li>commentButton</li>
                        <li>bookmarkButton</li>
                        <li>likerProfilePictureView</li>
                        <li>likeCountLabel</li>
                        <li>postTextLabel</li>
                        <li>commentCountLabel</li>
                        <li>postDateLabel</li>
                    </ul>
                </Structure>
                <Icon name='arrow-right' size={16} />
                <Structure>
                    <h4>PostFeedView: UITableViewCell</h4>
                    <ul>
                        <li>ProfilePictureView: UlImage</li>
                        <li>userNameLabel: UILabel</li>
                        <li>userLocationLabel: UILabel</li>
                        <li>postImageView: UIImage</li>
                        <li>likeButton: UIButton</li>
                        <li>commentButton: UIButton</li>
                        <li>bookmarkButton: UIButton</li>
                        <li>likerProfilePictureView: Image</li>
                        <li>likeCountLabel: UILabel</li>
                        <li>postTextLabel: UILabel</li>
                        <li>commentCountLabel: UILabel</li>
                        <li>postDateLabel: UILabel</li>
                    </ul>
                </Structure>
            </div>

            <Section.Block>
                <Section.Main narrow>
                    <p>
                        Если мы хотим добавить функцию, которой нет в материнском классе, мы должны
                        описать функцию с именем, отличающимся от других функций материнского
                        класса. Это важно для правильного чтения кода компилятором. Если же мы хотим
                        заменить имеющуюся в материнском классе функцию на новую, обязательно
                        использовать то же имя, что и в материнском классе. В некоторых современных
                        языках во избежание ошибок вам нужно будет добавить перед наследуемой
                        функцией слово <b>override</b>, что подтвердит замену записи -
                        переопределить - эту функцию в дочернем классе.
                    </p>
                    <p>
                        При чтении кода компилятор будет сравнивать не только имя функции, но и
                        состав вводных. То есть функция с новым набором вводных будет восприниматься
                        как новая функция, а не как функция, заменяющая материнскую.
                    </p>
                    <p>
                        Если мы хотим добавить дополнительные шаги к выполнению функции и сохранить
                        изначально описанные в ней действия, то в дочерней функции нужно дописать их
                        с ключевым словом <b>super</b> (иногда вместе с именем функции через точку).
                        Это слово вызовет все действия, описанные в функции материнского класса.
                    </p>
                    <Pre>
                        override func awakeFromNib() {'{'} <br />
                        {'    '}
                        <Hint>
                            super.awakeFromNib()
                            <Hint.Tooltip>
                                В Swift для вызова действий материнской функции с целью
                                исправления/добавления после super мы указываем полное название
                                функции. Но в некоторых языках достаточно написать super ( ) в
                                первой строке функции, которую мы хотим редактировать через override
                            </Hint.Tooltip>
                        </Hint>
                        <br />
                        {'    '}... <br />
                        {'}'}
                    </Pre>
                    <p>
                        <b>Super</b> означает “включить все, что описано в материнском классе”.
                        Добавляйте это слово, если: 1) вы не знаете точного описания класса 2) если
                        вы хотите расширить (override) какую-то функцию, использовав имеющийся
                        функционал. Если вы переписываете функцию, super добавлять не нужно.
                    </p>
                </Section.Main>
            </Section.Block>
        </Expand>
    </Section.Main>
);
