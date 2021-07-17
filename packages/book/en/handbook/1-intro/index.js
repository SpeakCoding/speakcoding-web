import React from 'react';
import { Section } from '@sc/ui';

export default () => (
    <Section>
        <Section.Main narrow>
            <h1>Reading</h1>
            <p>
                Congratulations on having arrived at the last chapter of our course! :-) This means
                that you’re now knowledgeable about all areas of the finished product and, we hope,
                have a thorough understanding of coding structure. We have created this reference
                chapter to help you brush up on describing an application’s key structural elements.
                It covers numerous aspects of the syntax, keywords, and constructions used in swift,
                as well as a summary of the course material to complement your reading.
            </p>
            <p>
                As you know, we have three main file types: models (the key structural classes),
                controllers (display and user interaction files), and functional files (ServerAPI,
                SQLLiteDatabase, Cache, AppDelegate), which the program needs to function in a
                coordinated way.
            </p>
            <p>
                Occasionally you may find yourself missing certain interface elements from the
                standard controller classes. To avoid bloating the standard-class description, you
                can create your own separate classes that add the missing elements. These are
                typically extensions to existing controllers, and in our code they are the
                AsynchronImageView, TaggedImageView, and SegmentControl classes. We could
                theoretically add them to existing controllers, though if this class is reused in
                numerous places throughout the code, it is generally more convenient to move them to
                a separate file.
            </p>
        </Section.Main>
    </Section>
);
