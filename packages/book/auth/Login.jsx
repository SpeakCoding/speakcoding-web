import React, { useCallback, useEffect } from 'react';
import pt from 'prop-types';
import { init, signIn } from '../tools/auth';
import { useAPI } from '../tools';
import { Logo } from '../components';
import s from './login.css';

let ready = false;

const Login = ({ onSuccess }) => {
    const fetch = useAPI();

    const handleSignIn = useCallback(async () => {
        try {
            const googleToken = await signIn();

            const res = await fetch('/sign_in/google.json', {
                method: 'POST',
                body: { id_token: googleToken }
            });

            if (res.meta?.authentication_token)
                localStorage.setItem('book_auth_token', res.meta.authentication_token);

            if (res.data) onSuccess();
        } catch {
            /**/
        }
    }, [onSuccess]);

    useEffect(() => {
        if (!ready) {
            init();
            ready = true;
        }
    }, []);

    return (
        <div className={s.box}>
            <div className={s.logo}>
                Speak <Logo size={80} /> Coding
            </div>
            <div className={s.content}>
                <div className={s.title}>Sign in</div>
                <div className={s.message}>
                    Learn how to read and understand code by exploring how the real apps are built
                </div>
                <button type='button' className={s.login} onClick={handleSignIn}>
                    <div className={s.google} />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

Login.propTypes = {
    onSuccess: pt.func
};

Login.defaultProps = {
    onSuccess: () => {}
};

export default Login;
