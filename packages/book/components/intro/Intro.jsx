import React, { useCallback, useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Modal } from '@sc/ui';
import { useApp } from '../../tools';
import s from './intro.css';

const ratio = 16 / 9;

const Intro = ({ pic, video }) => {
    const [opened, setOpened] = useState(false),
        [mode, setMode] = useState(''),
        { admin } = useApp();

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    useEffect(() => {
        if (opened) setMode(window.innerWidth > window.innerHeight * ratio ? 'height' : 'width');
    }, [opened]);

    if (!admin) return null;

    return (
        <>
            <div className={s.box} onClick={open}>
                <img src={pic} alt='Intro pic' className={s.img} />
            </div>

            <Modal opened={opened} onClose={close}>
                <div className={classNames(s.content, s[mode])}>
                    <iframe
                        allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'
                        allowFullScreen
                        className={s.frame}
                        src={video}
                        style={{
                            aspectRatio: ratio
                        }}
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
