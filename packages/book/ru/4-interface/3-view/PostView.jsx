import React, { useCallback } from 'react';
import { Section, Structure } from '@sc/ui';
import { interceptor, InterceptorView } from '../../../phone';
import { useApp } from '../../../tools';
import HL from '../../../common/1/post-highlight';

async function onExit() {
    interceptor.close();
    await interceptor.off();
}

export default () => {
    const { profile } = useApp();

    const onEnter = useCallback(async () => {
        await interceptor.on();
        await interceptor.lock();
        await interceptor.setSession(profile.instagram_app_authentication_token, { soft: true });
        await interceptor.switchTab('home', { reset: true });
        await interceptor.scrollToTop();
        interceptor.open();
    }, [profile]);

    return (
        <Section.Block>
            <Section.Main>
                <InterceptorView onEnter={onEnter} onExit={onExit}>
                    <h1>Разбор экрана: из чего состоит view</h1>
                    <p>
                        Разберем подробно, из каких элементов состоит стандартный экран отображения
                        поста (PostFeedView).
                    </p>
                    <Structure>
                        <h4>PostFeedView</h4>
                        <ul>
                            <li>
                                <HL c='red'>User Profile Picture in circle</HL>
                            </li>
                            <li>
                                <HL c='plum'>Username</HL>
                            </li>
                            <br />
                            <li>
                                <HL c='aquamarine'>Post Image</HL>
                            </li>
                            <br />
                            <li>
                                <HL c='sandy-brown'>Like Button</HL>
                            </li>
                            <li>
                                <HL c='turquoise'>Comment Button</HL>
                            </li>
                            <li>
                                <HL c='wheat'>Save Button</HL>
                            </li>
                            <br />
                            <li>
                                <HL c='steel-blue'>Likes Section</HL> (which opens a screen with a
                                list of all likes)
                            </li>
                            <ul>
                                <li>User Pics of some friends who liked</li>
                                <li>Usernames of some friends who liked</li>
                                <li>Number of Likes</li>
                            </ul>
                            <br />
                            <li>
                                <HL c='grey'>Post Caption</HL> (shortened if too long, with “...
                                more” to see full text)
                            </li>
                            <li>
                                <HL c='orange'>View all comments</HL> (with a number of comments)
                            </li>
                            <li>
                                <HL c='green-yellow'>Post Time</HL> (in a special format)
                            </li>
                        </ul>
                    </Structure>
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section.Block>
    );
};
