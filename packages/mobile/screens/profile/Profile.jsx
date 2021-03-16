import React from 'react';
import { Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useRouter } from '../../tools';

const Profile = () => {
    const { goBack } = useRouter();

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                Profile Screen
            </Header>
        </>
    );
};

export default Profile;
