import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import { Button, Card, Modal } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import assignments from '../../assignments';
import Content from './Content';
import s from './assignment.css';

const Assignment = ({ id: path, number, children }) => {
    if (!path)
        return (
            <div style={{ padding: '40px', background: 'lightblue' }}>
                <h1>ASSIGNMENT {number}</h1>
                {children}
            </div>
        );

    const [book, id] = useMemo(() => path.split('/'), [path]),
        assignment = assignments[book]?.[id],
        [opened, setOpened] = useState(false),
        [i, setI] = useState(0),
        [currentAnswer, setCurrentAnswer] = useState(),
        { courses, updateCourse } = useApp(),
        answers = courses[book]?.assignments?.[id] || [];

    const openModal = useCallback(() => {
        if (assignment) {
            setI(0);
            setOpened(true);
        }
    }, [assignment]);

    const closeModal = useCallback(() => setOpened(false), []);

    const handleChangeAnswer = useCallback(value => {
        setCurrentAnswer(value);
    }, []);

    const handleConfirmAnswer = useCallback(() => {
        updateCourse(book, 'assignment', { id, answers: [...answers, currentAnswer] });
        if (assignment.questions.length === 1) setI(i + 1);
    }, [i, currentAnswer, answers, book, id, assignment]);

    const handleNext = useCallback(() => {
        setCurrentAnswer(undefined);
        setI(i + 1);
    }, [i]);

    if (!assignment) return null;

    const { title, description, questions } = assignment;

    return (
        <>
            <Card mode='assignment'>
                <h2>{title}</h2>

                {description}

                <Card.Button onClick={openModal}>
                    <L lang='en'>Complete</L>
                    <L lang='ru'>Пройти</L>
                </Card.Button>
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
