import React, { useCallback, useEffect, useRef } from 'react';
import { Icon } from '@sc/ui';
import { useRouter } from '../../router';
import s from './camera.css';

const Camera = () => {
    const { focused, navigate, goBack } = useRouter(),
        $video = useRef(null);

    const init = async () => {
        if (!navigator.mediaDevices?.getUserMedia) return;

        try {
            $video.current.srcObject = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: { aspectRatio: { exact: 1 } }
            });
        } catch {
            /**/
        }
    };

    const takeScreenshot = useCallback(() => {
        const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            resolution = { width: $video.current.videoWidth, height: $video.current.videoHeight };

        canvas.width = resolution.width;
        canvas.height = resolution.height;
        ctx.drawImage($video.current, 0, 0, resolution.width, resolution.height);

        $video.current.srcObject.getTracks()[0].stop();
        navigate('post-preview', { image: canvas.toDataURL('image/jpeg') });
    }, []);

    const cancel = useCallback(() => {
        $video.current.srcObject.getTracks()[0].stop();
        goBack();
    }, []);

    useEffect(() => {
        if (focused) init();
    }, [focused]);

    return (
        <div className={s.box}>
            <div className={s.top}>
                <div className={s.cancel} onClick={cancel}>
                    <Icon name='m/times' size={24} />
                </div>
            </div>
            <video ref={$video} autoPlay className={s.video} />
            <div className={s.bottom}>
                <div className={s.button} onClick={takeScreenshot} />
            </div>
        </div>
    );
};

export default Camera;
