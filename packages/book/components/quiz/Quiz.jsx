import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import pt from 'prop-types';
import { logEvent } from '@sc/tools/amplitude';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import quizzes from '../../quizzes';
import { MultipleChoice, SingleChoice, TextInput } from './types';
import Card from '../card';
import s from './quiz.css';

let start = 0;

const Quiz = ({ id: path }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        quiz = quizzes[book]?.[id],
        [opened, setOpened] = useState(false),
        [i, setI] = useState(0),
        { courses, updateCourse } = useApp(),
        answers = courses[book]?.quizzes?.[id] || [],
        memo = useRef(answers),
        [currentAnswer, setCurrentAnswer] = useState(memo.current[i]),
        done = quiz.questions.length === answers.length;

    const openModal = useCallback(() => {
        if (quiz) {
            setI(0);
            setOpened(true);
        }
    }, [quiz]);

    const closeModal = useCallback(() => setOpened(false), []);

    const submit = useCallback(() => {
        logEvent('QuizSubmission', {
            id: path,
            duration: Date.now() - start
        });
    }, []);

    const handleChangeAnswer = useCallback(value => {
        setCurrentAnswer(value);
    }, []);

    const handleConfirmAnswer = useCallback(() => {
        const value = [...memo.current];
        value[i] = currentAnswer;
        memo.current = value;

        updateCourse(book, 'quiz', { id, answers: value });
        if (i === quiz.questions.length - 1) submit();
    }, [i, currentAnswer, answers, book, id]);

    const handleNext = useCallback(() => {
        setI(i + 1);
        setCurrentAnswer(memo.current[i + 1]);
    }, [i]);

    const handleBack = useCallback(() => {
        setI(i - 1);
        setCurrentAnswer(memo.current[i - 1]);
    }, [i]);

    useEffect(() => {
        if (opened) start = Date.now();
    }, [opened]);

    if (!quiz) return null;

    const { title, description, questions, time } = quiz,
        question = questions[i];

    return (
        <>
            <Card.Anchor id={path} type='quiz' openEdit={openModal} />
            <Card variant='quiz'>
                <Card.Title>{title}</Card.Title>
                {description}
                <Card.Footer>
                    <Button
                        color='black'
                        variant={done ? 'outlined' : 'contained'}
                        onClick={openModal}
                    >
                        {done && (
                            <>
                                <L lang='en'>See review</L>
                                <L lang='ru'>Посмотреть разбор</L>
                            </>
                        )}
                        {!done && (
                            <>
                                <L lang='en'>Complete quiz</L>
                                <L lang='ru'>Пройти тест</L>
                            </>
                        )}
                    </Button>
                    {time && !done && <Card.Time color='black' value={time} />}
                </Card.Footer>
            </Card>

            <Modal opened={opened} onClose={closeModal}>
                <Modal.Title>
                    {time && <Card.Time absolute value={time} />}
                    {title}
                </Modal.Title>

                {question && (
                    <>
                        <Modal.ScrollView>
                            <div className={s.modal}>
                                {questions.length > 1 && (
                                    <h3 className={s.counter}>
                                        {i + 1}/{questions.length}
                                    </h3>
                                )}
                                {question.type === 'multiple-choice' && (
                                    <MultipleChoice
                                        key={i}
                                        {...question}
                                        answer={memo.current[i]}
                                        onChange={handleChangeAnswer}
                                    />
                                )}
                                {question.type === 'single-choice' && (
                                    <SingleChoice
                                        key={i}
                                        {...question}
                                        answer={memo.current[i]}
                                        onChange={handleChangeAnswer}
                                    />
                                )}
                                {question.type === 'text' && (
                                    <TextInput
                                        key={i}
                                        {...question}
                                        answer={memo.current[i]}
                                        onChange={handleChangeAnswer}
                                    />
                                )}
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

                            {memo.current[i] === undefined && (
                                <Button
                                    disabled={currentAnswer === undefined}
                                    size='large'
                                    onClick={handleConfirmAnswer}
                                >
                                    <L lang='en'>Confirm</L>
                                    <L lang='ru'>Подтвердить</L>
                                </Button>
                            )}
                            {memo.current[i] !== undefined && (
                                <Button
                                    color='black'
                                    size='large'
                                    variant={
                                        i === quiz.questions.length - 1 ? 'contained' : 'arrow'
                                    }
                                    onClick={handleNext}
                                >
                                    {i === quiz.questions.length - 1 && (
                                        <>
                                            <L lang='en'>Finish quiz</L>
                                            <L lang='ru'>Завершить тест</L>
                                        </>
                                    )}
                                    {i !== quiz.questions.length - 1 && (
                                        <>
                                            <L lang='en'>Next question</L>
                                            <L lang='ru'>Следующий вопрос</L>
                                        </>
                                    )}
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

Quiz.propTypes = {
    id: pt.string.isRequired
};

export default Quiz;
