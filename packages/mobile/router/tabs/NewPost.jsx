import React, { useState } from 'react';
import pt from 'prop-types';
import { ActionSheet } from '@sc/ui/mobile';
import { Icon } from '@sc/ui';
import s from './tabs.css';

const NewPost = ({ navigate }) => {
    const [actions, setActions] = useState(false),
        hasCamera = !!navigator.mediaDevices?.getUserMedia;

    return (
        <>
            <div className={s.tab} onClick={() => setActions(true)}>
                <Icon name='m/plus' size={24} />
            </div>

            <ActionSheet opened={actions} onClose={() => setActions(false)}>
                {hasCamera && (
                    <ActionSheet.Option onClick={() => navigate('post-camera')}>
                        Take a photo
                    </ActionSheet.Option>
                )}
                <ActionSheet.Option onClick={() => navigate('post-upload', { openFile: true })}>
                    Upload from Library
                </ActionSheet.Option>
            </ActionSheet>
        </>
    );
};

NewPost.propTypes = {
    navigate: pt.func.isRequired
};

export default NewPost;
