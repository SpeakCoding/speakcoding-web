import React from 'react';
import { HL, Img, Pre, Section } from '@sc/ui';
import Term from '../../glossary/Term';
import img from '../../../assets/10/2-active-record-en.svg';

export default () => (
    <Section>
        <Section.Block>
            <Section.Main hlactive>
                <h2>Description of class models on the server</h2>
                <p>Let’s explore this using an example of a description of the User class.</p>
                <p>The User class is described in the file app/models/user.rb.</p>
                <Pre>
                    class User {'<'} <b>ActiveRecord</b> <br />
                    {'    '}has_many("posts") <br />
                    end
                </Pre>
                <p>
                    We expect this class to contain a description of the components of the User
                    class and the functions responsible for reading and writing data about users in
                    the database. Using the standard <b>ActiveRecord</b> class from the{' '}
                    <Term id='ruby-on-rails' tooltip>
                        Ruby on Rails
                    </Term>{' '}
                    library automates the process of reading and writing, and also lets us skip
                    parts of the manual class description, which greatly simplifies the coding
                    requirements.
                </p>
                <p>
                    Most functions of the model classes on the server are identical, so rather than
                    describing these functions individually, we inherit them along with{' '}
                    <b>ActiveRecord</b>.
                </p>
                <p>
                    You may also notice many entries beginning with the word <b>def</b>. The
                    structure may remind you of functions:
                </p>
                <Pre>
                    <HL color='red'>keyword</HL> <HL color='steel-blue'>function name</HL> (inputs){' '}
                    <br />
                    function steps
                </Pre>
                <p>
                    … and that would be absolutely right. <b>def</b> here is a keyword that replaces
                    the familiar func. The word ‘func’ is written before a function definition in
                    numerous languages, including Swift, which we use in our client code.
                </p>
            </Section.Main>
            <Section.Side>
                <Section.Sticky>
                    <Img src={img} />
                </Section.Sticky>
            </Section.Side>
        </Section.Block>

        <Section.Block>
            <Section.Main hlactive narrow>
                <p>
                    <b>Exploring the pieces of code from the example above</b>
                </p>
                <p>
                    The backend User class is inherited from the <b>ActiveRecord</b> class.
                </p>
                <Pre>
                    class User {'<'} <b>ActiveRecord</b> <br />
                    {'    '}has_many("posts") <br />
                    end
                </Pre>
                <p>
                    We don’t see components such as username or email in the model/User file.{' '}
                    <b>ActiveRecord</b> ensures that all components indicated as columns in the
                    table with the same name (Users) as these components are added automatically to
                    the User class.
                </p>
                <p>
                    So if the table in the server-side database contains the component columns that
                    we need, we can refer to the{' '}
                    <HL color='plum' inline={3}>
                        components with the same name
                    </HL>{' '}
                    for a{' '}
                    <HL color='light-sky-blue' inline={3}>
                        specific User instance
                    </HL>
                    , as if the description of the User class on the server contained that
                    component.
                </p>
                <p>Example:</p>
                <Pre>
                    <HL color='light-sky-blue'>new_user</HL> = User.new <br />
                    <HL color='light-sky-blue'>new_user</HL>.<HL color='plum'>username</HL> =
                    "libermans"
                </Pre>
                <p>
                    Thus, all components that can be stored in a database directly in text or number
                    form, such as a user profile picture, can be written in the component column,
                    and the server retrieves them from the table when it compiles the code itself.
                    The columns in the server’s database mean we don’t need to list components in
                    the class (model) description.
                </p>
            </Section.Main>
        </Section.Block>
    </Section>
);
