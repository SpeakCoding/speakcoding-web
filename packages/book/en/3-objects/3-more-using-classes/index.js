import React from 'react';
import { Pre, Section } from '@sc/ui';
import s from './style.css';

export default () => (
    <Section.Block>
        <Section.Main>
            <h2>More about using classes</h2>
            <p>
                To create new objects of the standard classes (string, Int/uint, float, and bool),
                which we discussed in the first part, we don’t need to launch the constructor
                function; instead, we can write the corresponding value directly into the code. For
                example, for a text string, we can simply write the value in quote marks
                (“example”), while for numerical values we can write the number.
            </p>
            <p>Example code:</p>
            <Pre>
                var numberOfLikes: Int; <br />
                numberOfLikes = 0;
            </Pre>
            <p className={s.heading}>Deinit</p>
            <p>
                When we delete a particular object belonging to a class, we sometimes need to clean
                up the code. As we could access other public variables within this object, we should
                delete it to avoid increasing the amount of memory used. Most objects delete
                themselves, but occasionally the deinit function is required.
            </p>
        </Section.Main>
    </Section.Block>
);
