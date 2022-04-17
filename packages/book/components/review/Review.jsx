import React from 'react';
import pt from 'prop-types';
import { Modal } from '@sc/ui';
import L from '../localize';
import { useAssignment } from '../../tools';
import Question from '../assignment/Content';
import s from './review.css';

const Review = ({ id, opened, onClose }) => {
    const { assignment, answers } = useAssignment(id);

    if (!assignment) return null;

    return (
        <Modal opened={opened} onClose={onClose}>
            <div className={s.box}>
                <div className={s.left}>
                    <h2 className={s.title}>{assignment.title}</h2>
                    <iframe src={assignment.review} className={s.frame} title={assignment.title} />
                </div>
                <div className={s.right}>
                    <div className={s.content}>
                        {assignment.questions.map((item, i) => (
                            <div key={item.title} className={s.item}>
                                <Question question={item} answer={answers[i]} hideAnswer />
                                <b>
                                    <L lang='en'>Your answer:</L>
                                    <L lang='ru'>Ваш ответ:</L>
                                </b>
                                <div className={s.answer}>
                                    {item.ask &&
                                        (answers[i] || (
                                            <>
                                                <L lang='en'>Yes</L>
                                                <L lang='ru'>Да</L>
                                            </>
                                        ))}
                                    {!item.ask && answers[i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
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
