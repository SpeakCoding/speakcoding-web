import React, { useCallback, useState } from 'react';
import { Icon, Modal } from '@sc/ui';
import L from '../../localize';
import { useApp } from '../../../tools';
import s from './tutorial.css';

const closeTriggers = [],
    threshold = new Date('2022-06-26T00:00:00Z');

const Tutorial = () => {
    const { profile } = useApp(),
        newUser = new Date(threshold) < new Date(profile.created_at),
        skipped = localStorage.getItem('flag/skip-tutorial') === 'true',
        initial = newUser && profile.is_paid && !skipped,
        [opened, setOpened] = useState(initial);

    const handleClose = useCallback(() => {
        setOpened(false);
        localStorage.setItem('flag/skip-tutorial', 'true');
    }, []);

    return (
        <Modal closeTriggers={closeTriggers} opened={opened} onClose={handleClose}>
            <div className={s.box}>
                <L lang='en'>
                    <h1>Hello!</h1>
                    <p>
                        In front of you is the interactive SpeakCoding textbook. The information
                        here is divided into chapters in the same way as you saw it in the program.
                        You will see individual chapters in the drop-down list at the top left side
                        of the screen. In the textbook you will find tests and written exercises.
                        Quizzes will help you evaluate how clear what you have read was and find
                        what you need to go back to. Tasks will help you practice in working with
                        code.
                    </p>
                    <p>
                        The textbook is available to you in its entirety, but we highly recommend
                        reading the materials and completing the assignments consecutively. This
                        will help you digest the information, and make it easier for you to monitor
                        your own progress.
                    </p>
                    <h3>Good luck!</h3>
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
