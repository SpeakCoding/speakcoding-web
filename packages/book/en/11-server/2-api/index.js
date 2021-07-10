import React from 'react';
import { Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';

const code1 = `
member do
    post :like, :unlike, :save, :unsave
    get :likers
end`;

const code2 = `
collection do
    get :saved, :tagged
end`;

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h2>API</h2>
                <p>
                    We have covered how to create databases and describe the necessary classes. Now
                    we need to process program requests arriving from the client, and to prepare
                    responses to them.
                </p>
                <p>
                    To do this, we need to define a function on the server to oversee the following:
                </p>
                <ul>
                    <li>Receiving requests;</li>
                    <li>Reading and unpacking URLs according to the parameters communicated;</li>
                    <li>
                        Creating instances of corresponding controllers, and running those of their
                        functions that correspond to the actions that we need to perform (e.g.
                        create, update).
                    </li>
                </ul>
                <p>
                    As we’ve mentioned previously, the server employs the standard library framework{' '}
                    <Term id='ruby-on-rails'>Ruby On Rails</Term> (more on that a little later). As
                    such, all of these actions can perform standard function, we just need to
                    specify the ‘route’ (i.e. to which particular URLs the server program should
                    respond) and the actions required.
                </p>
                <p>In the config/routes.rb file, we define all of these URLs:</p>
                <Pre>resources :posts, only: [:create, :show, :index, :update, :destroy]</Pre>
                <p>
                    Calling the resources function informs the server that we have posts that can be
                    created, displayed, viewed in a list, updated, or deleted. This implies that you
                    have already written a controller named post_controller that has all the
                    requisite functions listed above.
                </p>
                <p>
                    So the server-side program processes requests according to their URL and
                    responds to them according to their JSON endpoints.
                </p>
                <p>
                    We need to indicate what custom functions apply to: the <b>member</b> function
                    indicates that the actions described will be applied to a particular instance.
                </p>
                <Pre value={code1} />
                <p>
                    The <b>collection</b> function will be applied to an entire array of objects.
                </p>
                <Pre value={code2} />
                <p>
                    Always ensure that all classes (users, posts etc.) and their controllers have
                    the same names that you indicated in the function (save/unsave).
                </p>
            </Section.Main>
        </Section>

        <Assignment number={29} href='https://forms.gle/x9HoMf4eNFAv9aQU6'>
            In the server-side code, look at the controller for the User class and the corresponding
            part of the routes.rb configuration file. List the requests that the server might
            process for users, the URLs for these requests, and the request types (GET, POST, etc.).
        </Assignment>
    </>
);
