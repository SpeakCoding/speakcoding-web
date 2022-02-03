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
        api = useAPI();

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

    if (!assignment) return null;

    const { title, description, questions, time } = assignment;

    return (
        <>
            <Card variant='assignment'>
                <Card.Title>{title}</Card.Title>
                <Markdown>{description}</Markdown>
                <Card.Footer>
                    <Button variant='black' onClick={openModal}>
                        {answers.length === 0 && (
                            <>
                                <L lang='en'>Complete assignment</L>
                                <L lang='ru'>Выполнить задание</L>
                            </>
                        )}
                        {answers.length > 0 && (
                            <>
                                <L lang='en'>Edit answer</L>
                                <L lang='ru'>Редактировать ответ</L>
                            </>
                        )}
                    </Button>
                    {time && <Card.Time color='black' value={time} />}
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
                                <Content
                                    key={i}
                                    {...questions[i]}
                                    answer={memo.current[i]}
                                    onChange={handleChangeAnswer}
                                />
                            </div>
                        </Modal.ScrollView>

                        <Modal.Footer>
                            <Button
                                disabled={currentAnswer === undefined}
                                onClick={handleConfirmAnswer}
                            >
                                {i === assignment.questions.length - 1 && (
                                    <>
                                        <L lang='en'>Confirm</L>
                                        <L lang='ru'>Подтвердить</L>
                                    </>
                                )}
                                {i !== assignment.questions.length - 1 && (
                                    <>
                                        <L lang='en'>Next</L>
                                        <L lang='ru'>Далее</L>
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
