import React, { useContext, useEffect, useRef } from 'react';
import pt from 'prop-types';
import lottie from 'lottie-web';
import { state } from './utils';

const Lottie = ({ animationData, endFramesOffset }) => {
    const $ref = useRef(),
        animation = useRef(null),
        { type, part, intersecting } = useContext(state);

    useEffect(() => {
        animation.current = lottie.loadAnimation({
            animationData,
            loop: false,
            autoplay: false,
            container: $ref.current
        });
    }, [animationData]);

    useEffect(() => {
        if (!animation.current) return;

        if (type === 'scroll') {
            const pos = Math.floor((animation.current.totalFrames - endFramesOffset) * part);
            animation.current.goToAndStop(pos, true);
        }

        if (type === 'intersection') {
            animation.current.setDirection(intersecting ? 1 : -1);
            animation.current.play();
        }
    }, [type, part, intersecting, endFramesOffset]);

    return <div ref={$ref} />;
};

Lottie.propTypes = {
    animationData: pt.object.isRequired,
    endFramesOffset: pt.number
};

Lottie.defaultProps = {
    endFramesOffset: 0
};

export default Lottie;
