import React, { useCallback } from 'react';
import { Section } from '@sc/ui';
import Term from '../../glossary/Term';
import { interceptor, InterceptorView } from '../../../phone';
import { useApp } from '../../../tools';

export default () => {
    const { profile } = useApp();

    const onEnter = useCallback(async () => {
        await interceptor.on();
        await interceptor.lock();
        const state = await interceptor.getState();
        if (state.screen !== 'profile-edit') {
            await interceptor.setSession(profile.instagram_app_authentication_token, {
                soft: true
            });
            await interceptor.switchTab('profile', { reset: true });
            (await interceptor.getElement('#profile-edit'))?.click();
        }
        interceptor.open();
    }, [profile]);

    const onExit = useCallback(async () => {
        interceptor.close();
        await interceptor.off();
    }, [profile]);

    return (
        <Section.Block>
            <Section.Main>
                <InterceptorView onEnter={onEnter} onExit={onExit}>
                    <h1>Изменение состояния объектов</h1>
                    <p>
                        Когда у нас появились <i>конкретные</i> <Term id='instance'>объекты</Term>{' '}
                        какого-то <Term id='class'>класса</Term> и мы научились их сохранять, мы
                        можем менять их состояние. Например, когда мы создали аккаунт конкретного
                        юзера, мы можем менять его имя. Это можно делать напрямую, изменяя{' '}
                        <Term id='component'>составляющие объекта</Term>, или через{' '}
                        <Term id='function'>функции</Term> этого класса.
                    </p>
                    <p>
                        Давайте представим, что в Инстаграме есть форма, которая позволяет изменить
                        ваше имя пользователя. В этой форме есть поле ввода нового имени
                        пользователя newUsernameField, и кнопку Save. Форма хранит{' '}
                        <Term id='instance'>объект</Term> (экземпляр) вашего аккаунта (User) в своей{' '}
                        <Term id='component'>составляющей</Term> currentUser{' '}
                        <Term id='class'>класса</Term> User. И в ее <Term id='class'>классе</Term>
                        описана <Term id='function'>функция</Term> onClickSetButton, которая
                        вызывается при нажатии соответствующей кнопки. Эта функция изменит{' '}
                        <Term id='component'>составляющую</Term> username вашего аккаунта (объекта
                        класса User).
                    </p>
                    <ul>
                        <li>
                            Можно заменять <Term id='component'>составляющие</Term> или менять{' '}
                            <Term id='property'>характеристики</Term> напрямую, через добавление
                            соответствующего действия в последовательность шагов функции
                            onClickSetButton.
                        </li>
                    </ul>
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section.Block>
    );
};
