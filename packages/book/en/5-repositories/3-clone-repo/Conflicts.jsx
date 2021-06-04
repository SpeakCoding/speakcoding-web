import React from 'react';
import { Button, Expand, Section } from '@sc/ui';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional) Conflicts when uploading changes to the cloud{' '}
                    <Expand.Control htmlFor='5-3-2'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-3-2'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                If changes to the same file were made both locally and on the
                                server, then you will need to compare the versions. They can be
                                updated using the following commands:
                            </p>
                            <p>
                                <b>
                                    <i>Stash</i>
                                </b>
                                : Save and hide local changes. This allows you to download the
                                update and ‘restore’ your update on top in order to avoid losing
                                and/or having to rewrite your local changes.
                            </p>
                            <p>
                                Changes are saved as versions, line-by-line. If multiple people have
                                changed the same lines, then comparing and selecting the required
                                version will need to be done manually.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
