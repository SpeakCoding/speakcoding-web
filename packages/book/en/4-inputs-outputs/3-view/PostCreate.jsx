import React, { useCallback } from 'react';
import { Section, Structure } from '@sc/ui';
import { interceptor, InterceptorView } from '../../../phone';
import { useApp } from '../../../tools';
import HL from '../../../common/post-highlight';
import s from './style.css';

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
        // await interceptor.switchTab('home', { reset: true });
        // await interceptor.scrollToTop();
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
                                <li>Post Image preview box</li>
                                <li>Post Caption</li>
                                <br />
                                <li>Location Field</li>
                                <li>Tag Label with Tag Count</li>
                                <br />
                                <li>Share Button</li>
                            </ul>
                        </Structure>
                    </div>
                </InterceptorView>
            </Section.Main>
            <Section.Side />
        </Section.Block>
    );
};
