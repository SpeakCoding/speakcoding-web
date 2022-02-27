import React, { useCallback, useMemo, useRef, useState } from 'react';
import pt from 'prop-types';
import { logEvent } from '@sc/tools/amplitude';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import { useAPI, useApp } from '../../tools';
import assignments from '../../assignments';
import Card from '../card';
import Markdown from '../quiz/blocks/Markdown';
import Content from './Content';
import s from './assignment.css';

let start = 0;

const Assignment = ({ id: path }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        assignment = assignments[book]?.[id],
        [opened, setOpened] = useState(false),
        [i, setI] = useState(0),
        { courses, updateCourse } = useApp(),
        answers = courses[book]?.assignments?.[id] || [],
        memo = useRef(answers),
        [currentAnswer, setCurrentAnswer] = useState(memo.current[i]),
        api = useAPI(),
        firstTime = answers.length === 0;

    const openModal = useCallback(() => {
        if (assignment) {
            setI(0);
            setCurrentAnswer(memo.current[0]);
            setOpened(true);
            start = Date.now();
        }
    }, [assignment]);

    const closeModal = useCallback(() => setOpened(false), []);

    const submit = useCallback(
        value => {
            if (JSON.stringify(answers) === JSON.stringify(value)) return;

            updateCourse(book, 'assignment', { id, answers: value });

            const payload = {
                title: assignment.title,
                questions: assignment.questions.map((item, j) => {
                    let mark = '';
                    if (item.ask) mark = `${value[j] ? '✗' : '✓'} `;
                    return { title: item.title, answer: `${mark}${value[j]}` };
                })
            };
            api.post('/assignments/deliver.json', {
                course_id: book,
                assignment_id: id,
                variables: payload
            });
            logEvent('AssignmentSubmission', {
                id: path,
                duration: Date.now() - start
            });
        },
        [assignment, book, id, answers]
    );

    const handleChangeAnswer = useCallback(value => {
        setCurrentAnswer(value);
    }, []);

    const handleConfirmAnswer = useCallback(() => {
        const value = [...memo.current];
        value[i] = currentAnswer;
        memo.current = value;

        setI(i + 1);
        setCurrentAnswer(memo.current[i + 1]);
        if (i === assignment.questions.length - 1) submit(value);
    }, [i, currentAnswer, assignment, submit]);

    const handleBack = useCallback(() => {
        setI(i - 1);
        setCurrentAnswer(memo.current[i - 1]);
    }, [i]);

    if (!assignment) return null;

    const { title, description, questions, time } = assignment;

    return (
        <>
            <Card variant='assignment'>
                <Card.Title>{title}</Card.Title>
                <Markdown>{description}</Markdown>
                <Card.Footer>
                    <Button
                        color='black'
                        variant={firstTime ? 'contained' : 'outlined'}
                        onClick={openModal}
                    >
                        {firstTime && (
                            <>
                                <L lang='en'>Complete assignment</L>
                                <L lang='ru'>Выполнить задание</L>
                            </>
                        )}
                        {!firstTime && (
                            <>
                                <L lang='en'>Change your answer</L>
                                <L lang='ru'>Редактировать ответ</L>
                            </>
                        )}
                    </Button>
                    {time && firstTime && <Card.Time color='black' value={time} />}
                </Card.Footer>
            </Card>

            <Modal opened={opened} onClose={closeModal}>
                <Modal.Title>
                    {time && <Card.Time absolute value={time} />}
                    {title}
                </Modal.Title>

                {questions[i] && (
                    <>
                        <Modal.ScrollView>
                            <div className={s.modal}>
                                {questions.length > 1 && (
                                    <h3 className={s.counter}>
                                        {i + 1}/{questions.length}
                                    </h3>
                                )}
                                <Content
                                    key={i}
                                    {...questions[i]}
                                    answer={memo.current[i]}
                                    onChange={handleChangeAnswer}
                                />
                            </div>
                        </Modal.ScrollView>

                        <Modal.Footer>
                            <div className={s.back}>
                                {i > 0 && (
                                    <Button
                                        icon='arrow-left'
                                        size='large'
                                        variant='text'
                                        onClick={handleBack}
                                    >
                                        <L lang='en'>Back</L>
                                        <L lang='ru'>Назад</L>
                                    </Button>
                                )}
                            </div>

                            {!firstTime && (
                                <div className={s.cancel}>
                                    <Button size='large' variant='text' onClick={closeModal}>
                                        <L lang='en'>Close without changes</L>
                                        <L lang='ru'>Закрыть без изменений</L>
                                    </Button>
                                </div>
                            )}

                            <Button
                                color='black'
                                disabled={currentAnswer === undefined}
                                size='large'
                                variant={
                                    i === assignment.questions.length - 1 ? 'contained' : 'arrow'
                                }
                                onClick={handleConfirmAnswer}
                            >
                                {i === assignment.questions.length - 1 && (
                                    <>
                                        {firstTime && (
                                            <>
                                                <L lang='en'>Submit answers</L>
                                                <L lang='ru'>Отправить ответы</L>
                                            </>
                                        )}
                                        {!firstTime && (
                                            <>
                                                <L lang='en'>Update your answers</L>
                                                <L lang='ru'>Обновить ответы</L>
                                            </>
                                        )}
                                    </>
                                )}
                                {i !== assignment.questions.length - 1 && (
                                    <>
                                        <L lang='en'>Next question</L>
                                        <L lang='ru'>Следующий вопрос</L>
                                    </>
                                )}
                            </Button>
                        </Modal.Footer>
                    </>
                )}

                {!questions[i] && (
                    <div className={s.finish}>
                        <div className={s.hat} />
                        <h2 className={s.message}>
                            <L lang='en'>You’ve completed {title}!</L>
                            <L lang='ru'>Вы завершили {title}!</L>
                        </h2>
                        <Button onClick={closeModal}>
                            <L lang='en'>Back to chapter</L>
                            <L lang='ru'>Вернуться к главе</L>
                        </Button>
                    </div>
                )}
            </Modal>
        </>
    );
};

Assignment.propTypes = {
    id: pt.string.isRequired
};

export default Assignment;
