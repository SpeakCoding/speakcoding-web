import React from 'react';
import { Card, Section } from '@sc/ui';
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

        <Card mode='quiz'>
            <h2>Тест №6</h2>
            Изменение состояния объектов
            <Card.Button href='https://docs.google.com/forms/d/e/1FAIpQLScS7IJexsJzyeTEJU-DIIS2toc2QVV-O3P4qn1UMdwbhnk_vg/viewform?usp=sf_link'>
                Пройти
            </Card.Button>
        </Card>
    </>
);
