import React, { useCallback, useEffect, useMemo, useState } from 'react';
import pt from 'prop-types';
import { logEvent } from '@sc/tools/amplitude';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import { useAPI, useApp } from '../../tools';
import assignments from '../../assignments';
import Card from '../card';
import Content from './Content';
import s from './assignment.css';

let start = 0;

const Assignment = ({ id: path }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        assignment = assignments[book]?.[id],
        [opened, setOpened] = useState(false),
        [i, setI] = useState(0),
        [currentAnswer, setCurrentAnswer] = useState(),
        { courses, updateCourse } = useApp(),
        answers = courses[book]?.assignments?.[id] || [],
        api = useAPI();

    const openModal = useCallback(() => {
        if (assignment) {
            setI(0);
            setOpened(true);
        }
    }, [assignment]);

    const closeModal = useCallback(() => setOpened(false), []);

    const submit = useCallback(
        value => {
            const payload = {
                title: assignment.title,
                questions: assignment.questions.map((item, j) => {
                    let mark = '';
                    if (item.ask) mark = `${value[j] ? '✗' : '✓'} `;
                    return { title: item.title, answer: `${mark}${value[j]}` };
                })
            };
            api.post('/assignments/deliver.json', { variables: payload });
            logEvent('AssignmentSubmission', {
                id: path,
                duration: Date.now() - start
            });
        },
        [assignment]
    );

    const handleChangeAnswer = useCallback(value => {
        setCurrentAnswer(value);
    }, []);

    const handleConfirmAnswer = useCallback(() => {
        const value = [...answers, currentAnswer];
        updateCourse(book, 'assignment', { id, answers: value });
        if (assignment.questions.length === 1) setI(i + 1);
        if (i === assignment.questions.length - 1) submit(value);
    }, [i, currentAnswer, answers, book, id, assignment, submit]);

    const handleNext = useCallback(() => {
        setCurrentAnswer(undefined);
        setI(i + 1);
    }, [i]);

    useEffect(() => {
        if (opened) start = Date.now();
    }, [opened]);

    if (!assignment) return null;

    const { title, description, questions } = assignment;

    return (
        <>
            <Card variant='assignment'>
                <Card.Title>{title}</Card.Title>
                {description}
                <Card.Button onClick={openModal} />
            </Card>

            <Modal opened={opened} onClose={closeModal}>
                <Modal.Title>{title}</Modal.Title>

                {questions[i] && (
                    <>
                        <Modal.ScrollView>
                            <div className={s.modal}>
                                <Content
                                    key={i}
                                    {...questions[i]}
                                    answer={answers[i]}
                                    onChange={handleChangeAnswer}
                                />
                            </div>
                        </Modal.ScrollView>

                        <Modal.Footer>
                            {answers[i] === undefined && (
                                <Button
                                    disabled={currentAnswer === undefined}
                                    onClick={handleConfirmAnswer}
                                >
                                    <L lang='en'>Confirm</L>
                                    <L lang='ru'>Подтвердить</L>
                                </Button>
                            )}
                            {answers[i] !== undefined && (
                                <Button onClick={handleNext}>
                                    <L lang='en'>Next</L>
                                    <L lang='ru'>Далее</L>
                                </Button>
                            )}
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
                        <Button size='large' onClick={closeModal}>
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
