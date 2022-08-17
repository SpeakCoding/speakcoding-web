import React, { useCallback, useEffect } from 'react';
import pt from 'prop-types';
import { useAPI } from '../../tools';
import { init, signIn } from './tools';
import { L } from '../../components';
import LoginButton from '../Button';
import logo from './logo.svg';

let ready = false;

const Google = ({ onSubmit }) => {
    const fetch = useAPI();

    const handleSignIn = useCallback(async () => {
        try {
            const googleToken = await signIn();

            const res = await fetch('/sign_in/google.json', {
                method: 'POST',
                body: { id_token: googleToken }
            });

            onSubmit(res);
        } catch {
            /**/
        }
    }, [onSubmit]);

    useEffect(() => {
        if (!ready) {
            init();
            ready = true;
        }
    }, []);

    return (
        <LoginButton onClick={handleSignIn}>
            <LoginButton.Logo pic={logo} />
            <L lang='en'>Sign in with Google</L>
            <L lang='ru'>Войти через Google</L>
        </LoginButton>
    );
};

Google.propTypes = {
    onSubmit: pt.func.isRequired
};

export default Google;
