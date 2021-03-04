import React, { useEffect } from 'react';
import { useAPI } from '../../tools';

const Feed = () => {
    const fetch = useAPI();

    const init = async () => {
        const res = await fetch('/posts.json', { method: 'GET' });

        console.log(res);
    };

    useEffect(() => {
        init();
    }, []);

    return <>Feed</>;
};

export default Feed;
