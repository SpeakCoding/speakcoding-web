import React, { useCallback, useState } from 'react';
import pt from 'prop-types';
import { Button, TextInput } from '@sc/ui/mobile';
import { useAPI, useApp } from '../../tools';
import { parseError } from './utils';
import s from './auth.css';

const Form = ({ action, submitText, onSubmit }) => {
    const fetch = useAPI(),
        { setProfile } = useApp(),
        [loading, setLoading] = useState(false),
        [error, setError] = useState(null);

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();

            const email = event.target.elements.email.value,
                password = event.target.elements.password.value;

            if (!email || !password) {
                setError({
                    type: 'required',
                    email: !email,
                    password: !password
                });
                return;
            }

            setLoading(true);
            const res = await fetch(action, {
                method: 'POST',
                body: { user: { email, password } }
            });
            setLoading(false);

            setError(parseError(res.errors?.[0]));
            if (res.meta?.authentication_token)
                localStorage.setItem('mobile_auth_token', res.meta.authentication_token);
            if (res.data) {
                setProfile(res.data);
                onSubmit(res.data);
            }
        },
        [action]
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.field}>
                <TextInput
                    invalid={error?.email}
                    name='email'
                    placeholder='Email address'
                    type='email'
                />
            </div>
            <div className={s.field}>
                <TextInput
                    invalid={error?.password}
                    name='password'
                    placeholder='Password'
                    type='password'
                />
            </div>
            <div className={s.submit}>
                <Button block loading={loading} type='submit'>
                    {submitText}
                </Button>
            </div>
            {error && (
                <div className={s.error}>
                    {error.type === 'required' && 'Please fill in all fields'}
                    {error.type === 'match' && 'Wrong email or password'}
                    {error.type === 'taken' && 'User already exists'}
                    {error.type === 'unknown' && 'Something went wrong'}
                </div>
            )}
        </form>
    );
};

Form.propTypes = {
    action: pt.string.isRequired,
    submitText: pt.string,
    onSubmit: pt.func
};

Form.defaultProps = {
    submitText: '',
    onSubmit: () => {}
};

export default Form;
