import React, { useCallback, useState } from 'react';
import pt from 'prop-types';
import { Button, TextInput } from '@sc/ui/mobile';
import { useAPI } from '../../tools';
import s from './auth.css';

const Form = ({ action, submitText, onSubmit }) => {
    const fetch = useAPI(),
        [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            setLoading(true);

            const res = await fetch(action, {
                method: 'POST',
                body: {
                    user: {
                        email: event.target.elements.email.value,
                        password: event.target.elements.password.value
                    }
                }
            });

            setLoading(false);
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
                <Button loading={loading} type='submit'>
                    {submitText}
                </Button>
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
