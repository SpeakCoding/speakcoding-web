import React, { useCallback } from 'react';
import { Section, Structure } from '@sc/ui';
import { interceptor, InterceptorView } from '../../../phone';
import { useApp } from '../../../tools';
import HL from '../../../common/4/post-create-highlight';
import image from './image.png';
import s from './style.css';

async function onExit() {
    interceptor.close();
    await interceptor.switchTab('home');
    await interceptor.off();
}

export default () => {
    const { profile } = useApp();

    const onEnter = useCallback(async () => {
        await interceptor.on();
        await interceptor.lock();
        await interceptor.setSession(profile.instagram_app_authentication_token, { soft: true });
        await interceptor.navigate('post-form', { image });
        interceptor.open();
    }, [profile]);

    return (
        <Section.Block>
            <Section.Main>
                <InterceptorView onEnter={onEnter} onExit={onExit}>
                    <div className={s.create}>
                        <p>When creating a new post, you’ll see this screen:</p>
                        <Structure>
                            <h4>PostComposerView</h4>
                            <ul>
                                <li>
                                    <HL c='red'>Post Image preview box</HL>
                                </li>
                                <li>
                                    <HL c='green-yellow'>Post Caption</HL>
                                </li>
                                <br />
                                <li>
                                    <HL c='plum'>Location Field</HL>
                                </li>
                                <li>
                                    <HL c='aquamarine'>Tag Label with Tag Count</HL>
                                </li>
                                <br />
                                <li>
                                    <HL c='orange'>Share Button</HL>
                                </li>
                            </ul>
                        </Structure>
                    </div>
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section.Block>
    );
};
