/* eslint-disable react/prop-types */
import React from 'react';
import pt from 'prop-types';
import s from './code.css';

const H = ({ children }) => <span className={s.hl}>{children}</span>;

const Step1 = () => (
    <>
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
        <div className={s.hint}>Post structure in simple writing</div>
    </>
);

const Step2 = () => (
    <>
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
        <div className={s.hint}>
            All <b>"Set of..."</b> components are written in code as square brackets
        </div>
    </>
);

const Step3 = () => (
    <>
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
        <div className={s.hint}>
            To identify a class definition, the keyword ‘class’ appears at the beginning of a new
            line; all content is then written on indented lines and framed in curly brackets {'{}'}.
        </div>
    </>
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

const Step4 = () => (
    <>
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
        <div className={s.hint}>
            Each component is assigned not only a Class, but also a title. A more detailed
            explanation is given in the next chapter below.
        </div>
    </>
);

const Code = ({ step }) => (
    <div className={s.box} data-step={step}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
    </div>
);

Code.propTypes = {
    step: pt.number
};

Code.defaultProps = {
    step: 1
};

export default Code;
