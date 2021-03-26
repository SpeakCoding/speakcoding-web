import React, { useCallback } from 'react';
import { Button } from '@sc/ui/mobile';
import { useRouter } from '../../tools';
import Form from './Form';
import s from './auth.css';

const SignUp = () => {
    const { navigate, goBack } = useRouter();

    const toLogIn = useCallback(() => goBack(), []),
        next = useCallback(user => navigate('profile-edit', { user, initial: true }), []);

    return (
        <div className={s.box}>
            <div className={s.title}>Create an account</div>
            <Form action='/users.json' submitText='Next' onSubmit={next} />
            <div className={s.message}>
                Already have an account?{' '}
                <Button variant='text' onClick={toLogIn}>
                    Log in
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
