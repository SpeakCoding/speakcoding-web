import React from 'react';
import { Button, Expand, Section } from '@sc/ui';

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional) Creating repositories{' '}
                    <Expand.Control htmlFor='5-3-3'>
                        <Button variant='rounded'>read ⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main>
                <Expand id='5-3-3'>
                    <Section.Block>
                        <Section.Main narrow>
                            <p>
                                Having created an account on GitHub, you can create a repository for
                                any of your projects. When creating a new repository on GitHub, we
                                first need to come up with a name. All names within an account need
                                to be unique.
                            </p>
                            <p>
                                When creating a repository, you can add a description. You can
                                choose whether to make the repository public (so the files are
                                visible to all users) or private, and choose to boot with a Readme
                                file. This will help if you work with this repository via the Git
                                program in future, and will allow you to clone the repository onto
                                your computer.
                            </p>
                            <p>
                                So, you’ve created a nearly empty repository containing only one
                                file, named Readme.md.
                            </p>
                            <p>
                                When you create a local folder containing code on your device, you
                                need to link it to the repository on the server; only then will the
                                server copy start to monitor code updates. The local folder does not
                                update automatically – rather you choose which changes to transfer.
                                It’s also easy to set synchronisation between the server and local
                                versions via GitHub Desktop. Changes to the code, whether in the
                                cloud or in your local version, cause a new ‘version’/branch of the
                                code to be created when the ‘commit (update)’ is uploaded. Using
                                GitHub Desktop, you can ‘roll back’ to the required version if the
                                program stopped working when you added the new function.
                            </p>
                            <p>
                                Any programmer working on a specific project can select the required
                                version of the program code. Let’s now look at what you can do with
                                the repository after you’ve downloaded it.
                            </p>
                        </Section.Main>
                    </Section.Block>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
