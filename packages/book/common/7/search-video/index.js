import React from 'react';
import file from './search.mp4';

const Video = () => (
    <video autoPlay muted loop width={474} height={365}>
        <source src={file} type='video/mp4' />
    </video>
);

export default Video;
