import React, { useCallback } from 'react';
import pt from 'prop-types';
import { Button, TextInput } from '@sc/ui/mobile';
import { useAPI } from '../../tools';
import s from './auth.css';

const Form = ({ action, submitText, onSubmit }) => {
    const fetch = useAPI();

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();

            const res = await fetch(action, {
                method: 'POST',
                body: {
                    user: {
                        email: event.target.elements.email.value,
                        password: event.target.elements.password.value
                    }
                }
            });

            console.log(res);
        },
        [action]
    );

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.field}>
                <TextInput name='email' placeholder='Email address' required type='email' />
            </div>
            <div className={s.field}>
                <TextInput name='password' placeholder='Password' required type='password' />
            </div>
            <div className={s.submit}>
                <Button type='submit'>{submitText}</Button>
            </div>
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
