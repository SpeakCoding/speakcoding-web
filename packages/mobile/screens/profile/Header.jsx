import React, { useCallback, useState } from 'react';
import pt from 'prop-types';
import { ActionSheet, Header } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import { useApp, useRouter } from '../../tools';

const ProfileHeader = ({ self, children }) => {
    const { prevRoute, goBack } = useRouter(),
        { reset } = useApp(),
        [actions, setActions] = useState(false);

    return (
        <>
            <Header>
                {prevRoute && (
                    <Header.Left onClick={goBack}>
                        <Icon name='m/arrow-left' size={24} />
                    </Header.Left>
                )}

                {children}

                {self && (
                    <Header.Right onClick={() => setActions(true)}>
                        <Icon name='m/dots-horizontal' size={24} />
                    </Header.Right>
                )}
            </Header>

            <ActionSheet opened={actions} onClose={() => setActions(false)}>
                <ActionSheet.Option>Show Saved Posts</ActionSheet.Option>
                <ActionSheet.Option onClick={reset}>Log Out</ActionSheet.Option>
            </ActionSheet>
        </>
    );
};

ProfileHeader.propTypes = {
    self: pt.bool
};

ProfileHeader.defaultProps = {
    self: false
};

export default ProfileHeader;
