import React, { useCallback, useState } from 'react';
import pt from 'prop-types';
import { Modal } from '@sc/ui';
import s from './intro.css';

const Intro = ({ pic, video }) => {
    const [opened, setOpened] = useState(false);

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    return (
        <>
            <div className={s.box} onClick={open}>
                <img src={pic} alt='Intro pic' className={s.img} />
            </div>

            <Modal opened={opened} onClose={close}>
                <div className={s.content}>
                    <iframe
                        allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'
                        allowFullScreen
                        className={s.frame}
                        src={video}
                        title='Intro video'
                    />
                </div>
            </Modal>
        </>
    );
};

Intro.propTypes = {
    pic: pt.string.isRequired,
    video: pt.string.isRequired
};

export default Intro;
