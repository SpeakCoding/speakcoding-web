import React, { useCallback } from 'react';
import { Button } from '@sc/ui/mobile';
import { useRouter } from '../../tools';
import Logo from '../../components/logo';
import Form from './Form';
import s from './auth.css';

const LogIn = () => {
    const { navigate } = useRouter();

    const toSignUp = useCallback(() => navigate('signup'), []),
        next = useCallback(() => navigate('feed'), []);

    return (
        <div className={s.box}>
            <Logo />
            <div className={s.title}>Log in</div>
            <Form action='/users/authenticate.json' submitText='Log in' onSubmit={next} />
            <div className={s.message}>
                Don’t have an account?{' '}
                <Button variant='text' onClick={toSignUp}>
                    Sign up
                </Button>
            </div>
        </div>
    );
};

export default LogIn;
