import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import { Button, Card, Modal } from '@sc/ui';
import L from '../../localize';
import { MultipleChoice, SingleChoice } from './types';
import quizzes from '../../../quizzes';
import s from './quiz.css';

const Quiz = ({ id: path }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        quiz = quizzes[book]?.[id],
        [opened, setOpened] = useState(false),
        [i, setI] = useState(0),
        [currentAnswer, setCurrentAnswer] = useState(),
        [answers, setAnswers] = useState({});

    const openModal = useCallback(() => {
        if (quizzes[book]?.[id]) {
            setI(0);
            setOpened(true);
        }
    }, [path]);

    const closeModal = useCallback(() => setOpened(false), []);

    const handleChangeAnswer = useCallback(value => {
        setCurrentAnswer(value);
    }, []);

    const handleConfirmAnswer = useCallback(() => {
        setAnswers(current => ({ ...current, [i]: currentAnswer }));
    }, [i, currentAnswer]);

    const handleNext = useCallback(() => {
        setCurrentAnswer(undefined);
        setI(i + 1);
    }, [i]);

    if (!quiz) return null;

    const { title, description, questions } = quiz,
        question = questions[i];

    return (
        <>
            <Card mode='quiz'>
                <h2>{title}</h2>

                {description}

                <Card.Button onClick={openModal}>
                    <L book='en'>Complete</L>
                    <L book='ru'>Пройти</L>
                </Card.Button>
            </Card>

            <Modal opened={opened} onClose={closeModal}>
                <Modal.Title>{title}</Modal.Title>

                {question && (
                    <>
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
                        </div>

                        <Modal.Footer>
                            {answers[i] === undefined && (
                                <Button
                                    disabled={currentAnswer === undefined}
                                    onClick={handleConfirmAnswer}
                                >
                                    <L book='en'>Confirm</L>
                                    <L book='ru'>Подтвердить</L>
                                </Button>
                            )}
                            {answers[i] !== undefined && (
                                <Button onClick={handleNext}>
                                    <L book='en'>Next</L>
                                    <L book='ru'>Далее</L>
                                </Button>
                            )}
                        </Modal.Footer>
                    </>
                )}

                {!question && (
                    <div className={s.finish}>
                        <div className={s.img} />
                        <h2 className={s.message}>
                            <L book='en'>You’ve completed {title}!</L>
                            <L book='ru'>Вы завершили {title}!</L>
                        </h2>
                        <Button size='large' onClick={closeModal}>
                            <L book='en'>Back to chapter</L>
                            <L book='ru'>Вернуться к главе</L>
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
