import React, { useCallback, useEffect } from 'react';
import pt from 'prop-types';
import { init, signIn } from '../tools/auth';
import { useAPI } from '../tools';
import { L, Logo } from '../components';
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
                <div className={s.title}>
                    <L lang='en'>Sign in</L>
                    <L lang='ru'>Вход</L>
                </div>
                <div className={s.message}>
                    <L lang='en'>
                        Learn how to read and understand code by exploring how the real apps are
                        built
                    </L>
                    <L lang='ru'>Научитесь читать и понимать код, исследуя настоящие приложения.</L>
                </div>
                <button type='button' className={s.login} onClick={handleSignIn}>
                    <div className={s.google} />
                    <L lang='en'>Sign in with Google</L>
                    <L lang='ru'>Войти через Google</L>
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
