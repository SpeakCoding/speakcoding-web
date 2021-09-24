import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import quizzes from '../../quizzes';
import { MultipleChoice, SingleChoice, TextInput } from './types';
import Card from '../card';
import s from './quiz.css';

const Quiz = ({ id: path }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        quiz = quizzes[book]?.[id],
        [opened, setOpened] = useState(false),
        [i, setI] = useState(0),
        [currentAnswer, setCurrentAnswer] = useState(),
        { courses, updateCourse } = useApp(),
        answers = courses[book]?.quizzes?.[id] || [];

    const openModal = useCallback(() => {
        if (quiz) {
            setI(0);
            setOpened(true);
        }
    }, [quiz]);

    const closeModal = useCallback(() => setOpened(false), []);

    const handleChangeAnswer = useCallback(value => {
        setCurrentAnswer(value);
    }, []);

    const handleConfirmAnswer = useCallback(() => {
        updateCourse(book, 'quiz', { id, answers: [...answers, currentAnswer] });
    }, [i, currentAnswer, answers, book, id]);

    const handleNext = useCallback(() => {
        setCurrentAnswer(undefined);
        setI(i + 1);
    }, [i]);

    if (!quiz) return null;

    const { title, description, questions } = quiz,
        question = questions[i];

    return (
        <>
            <Card variant='quiz'>
                <Card.Title>{title}</Card.Title>
                {description}
                <Card.Button onClick={openModal} />
            </Card>

            <Modal opened={opened} onClose={closeModal}>
                <Modal.Title>{title}</Modal.Title>

                {question && (
                    <>
                        <Modal.ScrollView>
                            <div className={s.modal}>
                                {question.type === 'multiple-choice' && (
                                    <MultipleChoice
                                        key={i}
                                        {...question}
                                        answer={answers[i]}
                                        onChange={handleChangeAnswer}
                                    />
                                )}
                                {question.type === 'single-choice' && (
                                    <SingleChoice
                                        key={i}
                                        {...question}
                                        answer={answers[i]}
                                        onChange={handleChangeAnswer}
                                    />
                                )}
                                {question.type === 'text' && (
                                    <TextInput
                                        key={i}
                                        {...question}
                                        answer={answers[i]}
                                        onChange={handleChangeAnswer}
                                    />
                                )}
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

                {!question && (
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

Quiz.propTypes = {
    id: pt.string.isRequired
};

export default Quiz;
