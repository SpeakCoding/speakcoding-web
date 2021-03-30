import React, { useCallback, useState } from 'react';
import { useAPI, useRouter } from '../../tools';
import { QueryFilter, UsersList } from '../../components';
import s from './select-user.css';

const SelectUser = () => {
    const fetch = useAPI(),
        { route, goBack } = useRouter(),
        { onSelect } = route.params,
        [list, setList] = useState([]);

    const handleChangeQuery = useCallback(async value => {
        if (!value) {
            setList([]);
            return;
        }

        const res = await fetch(`/users/search.json?query=${value}`);
        setList(res?.data || []);
    }, []);

    const handleClickUser = useCallback(
        user => {
            onSelect(user);
            goBack();
        },
        [onSelect]
    );

    return (
        <>
            <div className={s.header}>
                <QueryFilter
                    placeholder='Search for a person'
                    onChange={handleChangeQuery}
                    onCancel={goBack}
                />
            </div>

            <UsersList items={list} onClickUser={handleClickUser} />
        </>
    );
};

export default SelectUser;
