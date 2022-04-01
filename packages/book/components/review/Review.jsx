import React, { useMemo } from 'react';
import pt from 'prop-types';
import { Accordion, Icon, Modal } from '@sc/ui';
import L from '../localize';
import { useApp } from '../../tools';
import assignments from '../../assignments';
import Markdown from '../quiz/blocks/Markdown';
import Question from '../assignment/Content';
import s from './review.css';

const Review = ({ id: path, opened, onClose }) => {
    const [book, id] = useMemo(() => path.split('/'), [path]),
        assignment = assignments[book]?.[id],
        { courses } = useApp(),
        answers = courses[book]?.assignments?.[id] || [];

    if (!assignment) return null;

    return (
        <Modal opened={opened} onClose={onClose}>
            <Modal.Title>{assignment.title}</Modal.Title>
            <Modal.ScrollView>
                <div className={s.box}>
                    <iframe src={assignment.review} className={s.frame} title={assignment.title} />

                    {assignment.questions.length > 1 && (
                        <Accordion>
                            {assignment.questions.map((item, i) => (
                                <div key={item.title} className={s.item}>
                                    <Accordion.Label name={i} expanded={i === 0}>
                                        <h3 className={s.label}>
                                            <Markdown>{item.title}</Markdown>
                                        </h3>
                                        <Accordion.Arrow />
                                    </Accordion.Label>
                                    <Accordion.Content name={i}>
                                        <div className={s.space} />
                                        <Question question={item} hideAnswer hideLabel />
                                        <div className={s.answer}>
                                            <b>
                                                <L lang='en'>Your answer:</L>
                                                <L lang='ru'>Ваш ответ:</L>
                                            </b>
                                            <div className={s.value}>{answers[i]}</div>
                                        </div>
                                    </Accordion.Content>
                                </div>
                            ))}
                        </Accordion>
                    )}

                    {assignment.questions.length === 1 && (
                        <div key={assignment.questions[0].title} className={s.item}>
                            <h3 className={s.label}>
                                <Markdown>{assignment.questions[0].title}</Markdown>
                            </h3>
                            <div className={s.space} />
                            <Question question={assignment.questions[0]} hideAnswer hideLabel />
                            <div className={s.answer}>
                                <b>
                                    <L lang='en'>Your answer:</L>
                                    <L lang='ru'>Ваш ответ:</L>
                                </b>
                                <div className={s.value}>{answers[0]}</div>
                            </div>
                        </div>
                    )}
                </div>
            </Modal.ScrollView>
        </Modal>
    );
};

Review.propTypes = {
    id: pt.string.isRequired,
    opened: pt.bool,
    onClose: pt.func
};

Review.defaultProps = {
    opened: undefined,
    onClose: undefined
};

export default Review;
