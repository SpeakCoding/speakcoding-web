import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import { Button, Modal } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import assignments from '../../assignments';
import Card from '../card';
import Markdown from '../quiz/blocks/Markdown';
import Review from '../review';
import Questions from './Questions';

const Assignment = ({ id: path }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        assignment = assignments[book]?.[id],
        [modal, setModal] = useState(undefined),
        { courses } = useApp(),
        answers = courses[book]?.assignments?.[id] || [],
        firstTime = answers.length === 0;

    const closeModal = useCallback(() => setModal(undefined), []);

    const handleEdit = useCallback(() => setModal('change'), []),
        handleReview = useCallback(() => setModal('review'), []);

    if (!assignment) return null;

    const { title, description, time } = assignment;

    return (
        <>
            <Card variant='assignment'>
                <Card.Title>{title}</Card.Title>
                <Markdown>{description}</Markdown>
                <Card.Footer>
                    {!firstTime && (
                        <Button color='black' onClick={handleReview}>
                            <L lang='en'>Watch your review</L>
                            <L lang='ru'>Посмотреть обзор</L>
                        </Button>
                    )}
                    <Button
                        color='black'
                        variant={firstTime ? 'contained' : 'outlined'}
                        onClick={handleEdit}
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

            <Modal opened={modal === 'change'} onClose={closeModal}>
                <Modal.Title>
                    {time && firstTime && <Card.Time absolute value={time} />}
                    {title}
                </Modal.Title>

                <Questions
                    book={book}
                    id={id}
                    assignment={assignment}
                    answers={answers}
                    firstTime={firstTime}
                    opened={modal === 'change'}
                    closeModal={closeModal}
                />
            </Modal>

            <Review id={path} opened={modal === 'review'} onClose={closeModal} />
        </>
    );
};

Assignment.propTypes = {
    id: pt.string.isRequired
};

export default Assignment;
