import React, { useCallback, useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import { useAPI, useApp, useAssignment } from '../../tools';
import Content from './Content';
import s from './assignment.css';

const Questions = ({ id, hideAnswer, opened, closeModal }) => {
    const [i, setI] = useState(0),
        { courseID, assignmentID, assignment, answers } = useAssignment(id),
        { updateCourse } = useApp(),
        memo = useRef(answers),
        [currentAnswer, setCurrentAnswer] = useState(memo.current[i]),
        api = useAPI(),
        firstTime = answers.length === 0;

    const submit = useCallback(
        value => {
            if (JSON.stringify(answers) === JSON.stringify(value)) return;

            updateCourse(courseID, 'assignment', { id: assignmentID, answers: value });

            let payload;

            if (assignment.mod === 'final') {
                payload = {
                    variables: {
                        title: assignment.title,
                        question: assignment.questions[0].title,
                        answers: value[0].reduce(
                            (res, _, j) => ({ ...res, [`l${j + 1}`]: value[0][j] }),
                            {}
                        )
                    },
                    final_assignment: true
                };
            } else {
                payload = {
                    variables: {
                        title: assignment.title,
                        questions: assignment.questions.map((item, j) => {
                            let mark = '';
                            if (item.ask) mark = `${value[j] ? '✗' : '✓'} `;
                            return { title: item.title, answer: `${mark}${value[j]}` };
                        })
                    }
                };
            }

            api.post('/assignments/deliver.json', {
                course_id: courseID,
                assignment_id: assignmentID,
                ...payload
            });
        },
        [assignment, courseID, assignmentID, answers]
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

    useEffect(() => {
        if (opened) {
            setI(0);
            setCurrentAnswer(memo.current[0]);
        }
    }, [opened]);

    if (!assignment) return null;

    const { title, questions, mod } = assignment;

    return (
        <>
            {questions[i] && (
                <>
                    <Modal.ScrollView>
                        <div className={classNames(s.modal, s[mod])}>
                            {questions.length > 1 && (
                                <h3 className={s.counter}>
                                    {i + 1}/{questions.length}
                                </h3>
                            )}
                            <Content
                                key={i}
                                question={questions[i]}
                                answer={memo.current[i]}
                                hideAnswer={hideAnswer}
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
                            variant={i === assignment.questions.length - 1 ? 'contained' : 'arrow'}
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
        </>
    );
};

Questions.propTypes = {
    hideAnswer: pt.bool,
    id: pt.string,
    opened: pt.bool,
    closeModal: pt.func
};

Questions.defaultProps = {
    hideAnswer: undefined,
    id: undefined,
    opened: false,
    closeModal: () => {}
};

export default Questions;
