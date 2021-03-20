import React, { useCallback, useState } from 'react';
import { debounce } from '@sc/tools/function';
import { Button, ScrollView, TextInput } from '@sc/ui/mobile';
import { useAPI, useRouter } from '../../tools';
import Userpic from '../../components/userpic';
import s from './search.css';

const Search = () => {
    const fetch = useAPI(),
        { navigate } = useRouter(),
        [list, setList] = useState([]),
        [key, setKey] = useState(0);

    const handleChange = useCallback(
        debounce(async value => {
            const res = await fetch(`/users/search.json?query=${value}`);

            setList(res?.data || []);
        }, 300),
        []
    );

    const handleCancel = useCallback(() => {
        setList([]);
        setKey(Math.random());
    }, []);

    return (
        <>
            <div className={s.header}>
                <TextInput
                    key={key}
                    icon='m/search'
                    placeholder='Search for a person'
                    variant='ios'
                    onChange={handleChange}
                />
                <Button variant='text' onClick={handleCancel}>
                    Cancel
                </Button>
            </div>

            <ScrollView>
                {list.map(item => (
                    <div
                        key={item.id}
                        className={s.item}
                        onClick={() => navigate('profile', { userid: item.id })}
                    >
                        <Userpic href={item.profile_picture} size={44} />
                        <div>
                            <div className={s.name}>{item.user_name}</div>
                            <div className={s.bio}>{item.bio}</div>
                        </div>
                    </div>
                ))}
            </ScrollView>
        </>
    );
};

export default Search;
