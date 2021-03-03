import React, { useCallback } from 'react';
import { Button } from '@sc/ui/mobile';
import { useAPI, useRouter } from '../../tools';

const Feed = () => {
    const fetch = useAPI(),
        { reset } = useRouter();

    const handleLogOut = useCallback(() => {
        fetch('/users/forget.json', { method: 'POST' });
        localStorage.removeItem('auth_token');
        reset();
    }, []);

    return (
        <>
            Feed
            <br />
            <Button variant='text' onClick={handleLogOut}>
                Log out
            </Button>
        </>
    );
};

export default Feed;
