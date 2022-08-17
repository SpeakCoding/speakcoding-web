import React, { useEffect } from 'react';
import pt from 'prop-types';
import qs from 'qs';
import { useAPI } from '../../tools';
import { L } from '../../components';
import LoginButton from '../Button';
import logo from './logo.svg';

const appleURL = `https://appleid.apple.com/auth/authorize?${qs.stringify({
    client_id: 'sid.co.speakcoding.book',
    redirect_uri: 'https://book.speakcoding.co?auth_callback=apple',
    response_type: 'code id_token',
    // scope: 'email name',
    response_mode: 'fragment'
})}`;

const Apple = ({ onSubmit }) => {
    const fetch = useAPI();

    const signIn = async () => {
        const data = qs.parse(window.location.hash.replace(/^#/, ''));

        console.log(data);

        if (!data.id_token) return;

        const res = await fetch('/sign_in/apple.json', {
            method: 'POST',
            body: { id_token: data.id_token }
        });

        onSubmit(res);
    };

    useEffect(() => {
        const query = qs.parse(window.location.search.replace(/^\?/, ''));
        if (query.auth_callback === 'apple') signIn();
    }, []);

    return (
        <LoginButton href={appleURL}>
            <LoginButton.Logo pic={logo} />
            <L lang='en'>Sign in with Apple</L>
            <L lang='ru'>Войти через Apple</L>
        </LoginButton>
    );
};

Apple.propTypes = {
    onSubmit: pt.func.isRequired
};

export default Apple;
