import React, { useCallback, useState } from 'react';
import { Icon, Modal } from '@sc/ui';
import L from '../../localize';
import s from './tutorial.css';

const closeTriggers = [];

const Tutorial = () => {
    const initial = localStorage.getItem('flag/skip-tutorial') !== 'true',
        [opened, setOpened] = useState(initial);

    const handleClose = useCallback(() => {
        setOpened(false);
        localStorage.setItem('flag/skip-tutorial', 'true');
    }, []);

    return (
        <Modal closeTriggers={closeTriggers} opened={opened} onClose={handleClose}>
            <div className={s.box}>
                <L lang='en'>
                    <h1>Здравствуйте!</h1>
                    <p>
                        Перед вами интерактивный учебник SpeakCoding. Информация в нем разбита так
                        же, как в программе, по главам. Вы увидите их в общем списке в левой верхней
                        части экрана. В учебнике вы найдете тесты и письменные упражнения. Тесты
                        помогут вам оценить, насколько понятным было то, что вы прочитали, и найти
                        то, к чему стоит вернуться. Задания помогут потренироваться начать работать
                        с кодом.
                    </p>
                    <p>
                        Учебник доступен вам целиком, но мы очень рекомендуем читать материалы и
                        выполнять задания последовательно. Так информация лучше уложится, и вам
                        легче будет следить за собственным прогрессом.
                    </p>
                    <h3>Удачи!</h3>
                </L>
                <L lang='ru'>
                    <h1>Здравствуйте!</h1>
                    <p>
                        Перед вами интерактивный учебник SpeakCoding. Информация в нем разбита так
                        же, как в программе, по главам. Вы увидите их в общем списке в левой верхней
                        части экрана. В учебнике вы найдете тесты и письменные упражнения. Тесты
                        помогут вам оценить, насколько понятным было то, что вы прочитали, и найти
                        то, к чему стоит вернуться. Задания помогут потренироваться начать работать
                        с кодом.
                    </p>
                    <p>
                        Учебник доступен вам целиком, но мы очень рекомендуем читать материалы и
                        выполнять задания последовательно. Так информация лучше уложится, и вам
                        легче будет следить за собственным прогрессом.
                    </p>
                    <h3>Удачи!</h3>
                </L>
                <div className={s.close} onClick={handleClose}>
                    <Icon name='times' size={32} />
                </div>
            </div>
        </Modal>
    );
};

export default Tutorial;
