/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import pt from 'prop-types';
import { Structure } from '@sc/ui';
import { context } from './utils';

const Content = ({ step, children }) => {
    const { step: current } = useContext(context);
    return step === current ? children : null;
};

Content.propTypes = {
    step: pt.number
};

Content.defaultProps = {
    step: 1
};

export const Step1 = () => (
    <Content step={1}>
        <pre>
            <b>FeedView</b>
            <br />
            ↳ ProfilePicture <br />
            ↳ userName <br />
            ↳ Location <br />
            ↳ Post Image <br />
            ↳ Like Button <br />
            ↳ Comment <br />
            ↳ Bookmark <br />
            ↳ @username liked <br />
            ↳ likeCount <br />
            ↳ postText <br />
            ↳ commentCount <br />
            ↳ Date <br />
        </pre>
    </Content>
);

export const Step2 = () => (
    <Content step={2}>
        <pre>
            <b>PostFeedView</b> <br />
            ↳ ProfilePictureView <br />
            ↳ userNameLabel <br />
            ↳ userLocationLabel <br />
            ↳ PostImageView <br />
            ↳ likeButton <br />
            ↳ commentButton <br />
            ↳ bookmarkButton <br />
            ↳ likerProfilePictureView <br />
            ↳ likeCountLabel <br />
            ↳ postTextLabel <br />
            ↳ commentCountLabel <br />
            ↳ postDateLabel <br />
        </pre>
    </Content>
);

export const Step3 = () => (
    <Content step={3}>
        <pre>
            <b>PostFeedView: UITableViewCell</b> <br />
            ↳ ProfilePictureView: UlImage <br />
            ↳ userNameLabel: UILabel <br />
            ↳ userLocationLabel: UILabel <br />
            ↳ postImageView: UIImage <br />
            ↳ likeButton: UIButton <br />
            ↳ commentButton: UIButton <br />
            ↳ bookmarkButton: UIButton <br />
            ↳ likerProfilePictureView: Image <br />
            ↳ likeCountLabel: UILabel <br />
            ↳ postTextLabel: UILabel <br />
            ↳ commentCountLabel: UILabel <br />
            ↳ postDateLabel: UILabel <br />
        </pre>
    </Content>
);
