import React, { useEffect } from 'react';
import { Section } from '@sc/ui';
import { Feedback, Next } from '../../components';
import { useApp } from '../../tools';
import { interceptor } from '../../phone';
import Page from '../Page';
import Part1 from './1-intro';
import Part2 from './2-instagram';
import Part3 from './3-twitter-venmo';
import Part4 from './4-classes';
import Part5 from './5-components-properties';
import Part6 from './6-using-classes';

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
            <Part3 />
            <Part4 />
            <Part5 />
            <Part6 />
            <Feedback />
            <Next />
        </Page>
    );
};
