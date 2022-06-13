import React, { useEffect, useRef, useState } from 'react';
import pt from 'prop-types';
import { Modal } from '@sc/ui';
import L from '../localize';
import { useAssignment } from '../../tools';
import Question from '../assignment/Content';
import s from './review.css';

const ratio = 1662 / 1080,
    verticalPadding = 72 + 32 + 72; // 72px box padding top + 32px box padding bottom + 72px title size

const Review = ({ id, opened }) => {
    const { assignment, answers } = useAssignment(id),
        [style, setStyle] = useState({}),
        $video = useRef();

    useEffect(() => {
        if (!$video.current) return;
        if (opened) {
            const maxWidth = $video.current.offsetWidth,
                maxHeight = window.innerHeight * 0.8 - verticalPadding;

            setStyle(
                maxWidth > maxHeight * ratio ? { width: 'auto', height: `${maxHeight}px` } : {}
            );
        }
    }, [opened, assignment]);

    if (!assignment) return null;

    return (
        <div className={s.box}>
            <div className={s.left}>
                <h2 className={s.title}>{assignment.title}</h2>
                <div ref={$video} className={s.video}>
                    <iframe
                        allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'
                        allowFullScreen
                        className={s.frame}
                        src={assignment.review}
                        style={{
                            aspectRatio: ratio,
                            ...style
                        }}
                        title={assignment.title}
                    />
                </div>
            </div>
            <div className={s.right}>
                <div className={s.content} data-context='modal-review'>
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
    );
};

Review.propTypes = {
    id: pt.string.isRequired,
    opened: pt.bool
};

Review.defaultProps = {
    opened: undefined
};

const ReviewModal = ({ id, opened, onClose }) => (
    <Modal opened={opened} onClose={onClose}>
        <Review id={id} opened={opened} />
    </Modal>
);

ReviewModal.propTypes = {
    id: pt.string.isRequired,
    opened: pt.bool,
    onClose: pt.func
};

ReviewModal.defaultProps = {
    opened: undefined,
    onClose: undefined
};

export default ReviewModal;
