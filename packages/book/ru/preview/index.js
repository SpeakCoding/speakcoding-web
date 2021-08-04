import React, { useEffect } from 'react';
import { Section } from '@sc/ui';
import { useApp } from '../../tools';
import { interceptor } from '../../phone';
import Page from '../Page';
import { Next } from '../../components';
import Part1 from '../1-intro-classes/1-intro';
import Part2 from '../1-intro-classes/2-instagram';

export default () => {
    const { profile } = useApp();

    const initPhone = async () => {
        await interceptor.on();
        await interceptor.lock();
        await interceptor.setSession(profile.instagram_app_authentication_token, { soft: true });
        await interceptor.switchTab('home', { reset: true });
        await interceptor.scrollToTop();
    };

    useEffect(() => {
        if (profile) initPhone();
    }, [profile]);

    return (
        <Page chapter={1}>
            <Part1 />
            <Section.Divider />
            <Part2 />
            <Next.Payment />
        </Page>
    );
};
