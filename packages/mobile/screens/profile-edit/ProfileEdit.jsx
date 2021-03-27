import React, { useCallback, useState } from 'react';
import { convertToJPEGBase64 } from '@sc/tools/image';
import { Button, Header } from '@sc/ui/mobile';
import { FileUpload } from '@sc/ui';
import { useAPI, useRouter } from '../../tools';
import { Userpic } from '../../components';
import s from './profile-edit.css';

const ProfileEdit = () => {
    const { route, switchTab, goBack } = useRouter(),
        fetch = useAPI(),
        { user, initial } = route.params,
        [img, setImg] = useState('');

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();

            const fields = event.target.elements;

            const data = {
                user_name: fields.user_name.value,
                bio: fields.bio.value
            };

            if (fields.profile_picture.value) data.profile_picture = fields.profile_picture.value;

            await fetch(`/users/${user.id}.json`, { method: 'PUT', body: { user: data } });

            if (initial) switchTab('home', { screen: 'feed' });
            else goBack();
        },
        [initial]
    );

    const handleChooseImage = useCallback(async files => {
        const jpeg = await convertToJPEGBase64(files[0]);
        setImg(jpeg);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Header>
                {!initial && <Header.Left onClick={goBack}>Cancel</Header.Left>}
                {initial ? 'Create profile' : 'Edit profile'}
                <Header.Right>
                    <Button type='submit' variant='text'>
                        Done
                    </Button>
                </Header.Right>
            </Header>

            <div className={s.photo}>
                <div className={s.userpic}>
                    <Userpic href={img || user.profile_picture} size={95} />
                </div>
                <input hidden name='profile_picture' readOnly value={img} />
                <FileUpload accept='image/*' onChange={handleChooseImage}>
                    <Button variant='text'>Change profile photo</Button>
                </FileUpload>
            </div>

            <div className={s.fields}>
                <div className={s.label}>Name</div>
                <input
                    autoComplete='off'
                    className={s.input}
                    defaultValue={user.user_name || ''}
                    name='user_name'
                    placeholder='Name'
                    type='text'
                />

                <div className={s.label}>Bio</div>
                <input
                    autoComplete='off'
                    className={s.input}
                    defaultValue={user.bio || ''}
                    name='bio'
                    placeholder='Bio'
                    type='text'
                />
            </div>
        </form>
    );
};

export default ProfileEdit;
