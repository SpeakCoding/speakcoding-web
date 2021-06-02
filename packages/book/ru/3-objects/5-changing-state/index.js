import React from 'react';
import { Section } from '@sc/ui';
import { Quiz } from '../../../components';
import EditProfile from './EditProfile';
import WaysToChange from './WaysToChange';
import ReplaceCaption from './ReplaceCaption';

export default () => (
    <>
        <Section>
            <EditProfile />
            <WaysToChange />
            <ReplaceCaption />
        </Section>

        <Quiz
            number={6}
            href='https://docs.google.com/forms/d/e/1FAIpQLScS7IJexsJzyeTEJU-DIIS2toc2QVV-O3P4qn1UMdwbhnk_vg/viewform?usp=sf_link'
        >
            Изменение состояния объектов
        </Quiz>
    </>
);
