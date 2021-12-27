/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import pt from 'prop-types';
import { Structure } from '@sc/ui';
import s from './code.css';
import { context } from './utils';

const Code = ({ step, children }) => {
    const { step: current } = useContext(context);

    return step === current ? children : null;
};

Code.propTypes = {
    step: pt.number
};

Code.defaultProps = {
    step: 1
};

const H = ({ children }) => <span className={s.hl}>{children}</span>;

export const Step1 = ({ children }) => (
    <Code step={1}>
        <Structure>
            <pre>
                Post <br />
                {'  '}User <br />
                {'  '}Time <br />
                {'  '}Image <br />
                {'  '}Set of Images <br />
                {'  '}Video <br />
                {'  '}Set of Likes <br />
                {'  '}Caption <br />
                {'  '}Set of Comments <br />{' '}
            </pre>
        </Structure>
        <div className={s.hint}>{children}</div>
    </Code>
);

export const Step2 = ({ children }) => (
    <Code step={2}>
        <Structure>
            <pre>
                Post <br />
                {'  '}User <br />
                {'  '}Time <br />
                {'  '}Image <br />
                {'  '}
                <H>[]</H>Images <br />
                {'  '}Video <br />
                {'  '}
                <H>[]</H>Likes <br />
                {'  '}Caption <br />
                {'  '}
                <H>[]</H>Comments <br />{' '}
            </pre>
        </Structure>
        <div className={s.hint}>{children}</div>
    </Code>
);

export const Step3 = ({ children }) => (
    <Code step={3}>
        <Structure>
            <pre>
                <H>Class</H> Post <H>{'{'}</H>
                <br />
                {'  '}User <br />
                {'  '}Time <br />
                {'  '}Image <br />
                {'  '}[]Images <br />
                {'  '}Video <br />
                {'  '}[]Likes <br />
                {'  '}Caption <br />
                {'  '}[]Comments <br />
                <H>{'}'}</H>
            </pre>
        </Structure>
        <div className={s.hint}>{children}</div>
    </Code>
);

const N = ({ children }) => (
    <>
        {'  '}
        <span className={s.name}>
            <H>{children}</H>
        </span>
        {'  '}
    </>
);

export const Step4 = ({ children }) => (
    <Code step={4}>
        <Structure>
            <pre>
                Class Post {'{'}
                <br />
                <N>user</N>User <br />
                <N>time</N>Time <br />
                <N>image</N>Image <br />
                <N>setOfImages</N>[]Images <br />
                <N>video</N>Video <br />
                <N>setOfLikes</N>[]Likes <br />
                <N>caption</N>Caption <br />
                <N>setOfComments</N>[]Comments <br />
                {'}'}
            </pre>
        </Structure>
        <div className={s.hint}>{children}</div>
    </Code>
);
