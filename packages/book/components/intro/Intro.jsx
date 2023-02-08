import React, { useCallback, useEffect, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { Modal } from '@sc/ui';
import { useLocale } from '../localize';
import s from './intro.css';

const ratios = { en: 19 / 10, ru: 16 / 9 };

const Intro = ({ pic, video }) => {
    const [opened, setOpened] = useState(false),
        [mode, setMode] = useState('');

    const { choose } = useLocale(),
        ratio = choose(ratios);

    const open = useCallback(() => setOpened(true), []),
        close = useCallback(() => setOpened(false), []);

    useEffect(() => {
        if (opened) setMode(window.innerWidth > window.innerHeight * ratio ? 'height' : 'width');
    }, [opened]);

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
