import React, { useCallback, useRef, useState } from 'react';
import { Button, Section, Textarea } from '@sc/ui';
import L from '../localize';
import { useAPI, useApp } from '../../tools';
import s from './feedback.css';

const Feedback = () => {
    const [view, setView] = useState('init'),
        $box = useRef(),
        api = useAPI(),
        { courses } = useApp(),
        lang = localStorage.getItem('lang'),
        chapter = courses[lang]?.pos?.chapter,
        [loading, setLoading] = useState(false);

    const handleOpenForm = useCallback(() => {
        setView('form');
        setTimeout(() => {
            $box.current?.querySelector('textarea')?.focus();
        }, 100);
    }, []);

    const handleSubmit = useCallback(async () => {
        const message = $box.current?.querySelector('textarea')?.value;
        if (!message) return;
        setLoading(true);
        await api.post('/feedback_messages.json', {
            theme: `User feedback${chapter ? ` (chapter ${chapter})` : ''}`,
            message
        });
        setLoading(false);
        setView('final');
    }, [chapter]);

    return (
        <Section>
            <Section.Main>
                <div ref={$box}>
                    <L lang='ru'>
                        {/init|form/.test(view) && (
                            <>
                                <h3 className={s.title}>Остались вопросы?</h3>
                                <p className={s.block}>
                                    Если у вас есть вопросы по заданиям или возникли технические
                                    сложности с выполнением задания, пожалуйста, напишите нам
                                    соощение, и мы обязательно свяжемся с вами.
                                </p>
                                {view === 'init' && (
                                    <Button color='black' size='large' onClick={handleOpenForm}>
                                        Задать вопрос
                                    </Button>
                                )}
                                {view === 'form' && (
                                    <>
                                        <div className={s.block}>
                                            <Textarea
                                                placeholder='Ваш вопрос...'
                                                variant='bordered'
                                            />
                                        </div>
                                        <Button
                                            color='black'
                                            size='large'
                                            disabled={loading}
                                            onClick={handleSubmit}
                                        >
                                            Отправить вопрос
                                        </Button>
                                    </>
                                )}
                            </>
                        )}

                        {view === 'final' && (
                            <>
                                <h3 className={s.title}>Спасибо за вопрос!</h3>
                                <p className={s.block}>Мы вернемся с ответом в течение недели.</p>
                                <Button color='black' size='large' onClick={handleOpenForm}>
                                    Задать вопрос
                                </Button>
                            </>
                        )}
                    </L>
                    <L lang='en'>
                        {/init|form/.test(view) && (
                            <>
                                <h3 className={s.title}>Have questions?</h3>
                                <p className={s.block}>
                                    If you have any questions about the tasks or have technical
                                    difficulties with the task, please write us a message and we
                                    will contact you.
                                </p>
                                {view === 'init' && (
                                    <Button color='black' size='large' onClick={handleOpenForm}>
                                        Ask
                                    </Button>
                                )}
                                {view === 'form' && (
                                    <>
                                        <div className={s.block}>
                                            <Textarea
                                                placeholder='Your question...'
                                                variant='bordered'
                                            />
                                        </div>
                                        <Button
                                            color='black'
                                            size='large'
                                            disabled={loading}
                                            onClick={handleSubmit}
                                        >
                                            Send
                                        </Button>
                                    </>
                                )}
                            </>
                        )}

                        {view === 'final' && (
                            <>
                                <h3 className={s.title}>Thank you!</h3>
                                <p className={s.block}>
                                    We will get back with an answer within a week.
                                </p>
                                <Button color='black' size='large' onClick={handleOpenForm}>
                                    Ask
                                </Button>
                            </>
                        )}
                    </L>
                </div>
            </Section.Main>
        </Section>
    );
};

export default Feedback;
