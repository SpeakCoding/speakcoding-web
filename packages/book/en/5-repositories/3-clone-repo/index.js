import React from 'react';
import { Link, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Branches from './Branches';
import Conflicts from './Conflicts';
import CreateRepo from './CreateRepo';

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h1>Cloning the repository</h1>
                <p>
                    In order to code, you will need to create a local copy of the repository (a
                    procedure known as cloning). The simplest way to do this is to use the GitHub
                    Desktop program, providing a link to the repository (e.g.,{' '}
                    <Link href='https://github.com/SpeakCoding/iphone' blank>
                        https://github.com/SpeakCoding/iphone
                    </Link>
                    ) and the local folder where files should be stored (for example your local
                    Documents folder).
                </p>
            </Section.Main>
        </Section>

        <Assignment
            number={7}
            href='https://docs.google.com/forms/d/e/1FAIpQLSfp-VlR7lnIdU-bdEBwQ1xvLho2n8VrdwzHDv4bhS_FWeP2gQ/viewform'
        >
            Create a local copy of the repository
        </Assignment>

        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        If the online repository is changed, you can update your local version (this
                        can only be done by executing the appropriate command).
                    </p>
                    <p>
                        <b>
                            <i>Fetch</i>
                        </b>
                        : Updates and loads the list of changes available in GitHub. Used when we
                        need to see what other team members have been working on.
                        <br />
                        <b>
                            <i>Pull</i>
                        </b>
                        : Shows local changes versus the current version of the code stored in the
                        cloud. Lines of code that have been changed or added are highlighted, and
                        you can indicate local changes versus the current main version. Thus you can
                        discuss them with your team before deciding which to incorporate into the
                        main branch.
                    </p>
                    <p>
                        If you make changes to local copies of particular files, they then appear in
                        the list of changed files on GitHub Desktop, and you can upload these
                        changes to the main version. To do this, you need to perform the following
                        action sequence:
                    </p>
                    <ul>
                        <li>
                            In the aforementioned list of changed files, select the files with the
                            changes that you wish to upload
                        </li>
                        <li>Name and describe the changes</li>
                        <li>Execute the Commit command</li>
                        <li>Execute the Push command</li>
                    </ul>
                    <p>
                        <b>
                            <i>Push</i>
                        </b>
                        : Uploads your local code changes to the main version in GitHub.
                    </p>
                    <p>
                        All updated code is recorded in the history. You can view them in the
                        History section of GitHub Desktop.
                    </p>
                </Section.Main>
            </Section.Block>

            <Branches />
            <Conflicts />
            <CreateRepo />
        </Section>
    </>
);
