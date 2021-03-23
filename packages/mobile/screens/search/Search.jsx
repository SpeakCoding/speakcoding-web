import React, { useCallback, useState } from 'react';
import { useAPI } from '../../tools';
import { QueryFilter, UsersList } from '../../components';
import s from './search.css';

const Search = () => {
    const fetch = useAPI(),
        [list, setList] = useState([]);

    const handleChange = useCallback(async value => {
        if (!value) {
            setList([]);
            return;
        }

        const res = await fetch(`/users/search.json?query=${value}`);
        setList(res?.data || []);
    }, []);

    return (
        <>
            <div className={s.header}>
                <QueryFilter placeholder='Search for a person' onChange={handleChange} />
            </div>

            <UsersList items={list} />
        </>
    );
};

export default Search;
