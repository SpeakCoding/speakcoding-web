import React from 'react';
import { Callout, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import img from '../../../assets/11/1-methods-functions-en.svg';
import Additional1 from './SignUp-Update';
import Additional2 from './Follow';
import s from './style.css';

const code1 = `
class UsersController < ApplicationController
end`;

const code2 = `
def show
    userToShow = User.[[find]](sandy-brown)([[params]](light-sky-blue)[:[[id]](steel-blue)])
    userJson = [[UserSerializer]](plum).new([[userToShow]](green-yellow), self).[[serialize]](red)
    render (json: { data: userJson })
end`;

const code3 = `
def current_user()
    authentication_token = request.headers['Authentication-Token']
    return nil if authentication_token.blank?
    return User.find_by(authentication_token: authentication_token)
end`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main hlactive>
                    <h1>Description of the controller class</h1>
                    <p>
                        Let’s explore further how server-side code works. Once we have a description
                        (model) of the main User class, we need to create a controller for this
                        class that determines how the server responds to client requests.
                    </p>
                    <Pre value={code1} />
                    <p>We inherit this controller from the standard ApplicationController class.</p>
                    <p>
                        We need to define the functions in this class that are called in response to
                        requests from our client applications. The functions for the main standard
                        requests have standardized names:
                    </p>
                    <p className={s.requests}>
                        <b>Show:</b>{' '}
                        <span>
                            Responsible for receiving data (in this case, about the user);
                            corresponds to GET requests
                        </span>
                        <b>Create:</b>{' '}
                        <span>
                            Creates (in this case, the user profile); corresponds to POST requests
                        </span>
                        <b>Update:</b>{' '}
                        <span>
                            Changes (in this case, the user profile); corresponds to PUT/PATCH
                            requests
                        </span>
                        <b>Delete:</b>{' '}
                        <span>
                            Deletes entries (in this case, about the user); corresponds to DELETE
                            requests
                        </span>
                    </p>
                    <p>
                        When the server receives a request with the endpoint "/
                        <HL color='aquamarine'>users.json</HL>
                        ", it creates an instance of the <HL color='aquamarine'>Users</HL>
                        Controller class and calls the function that corresponds to the request. For
                        example, if the server receives a method.GET request, and if the user_id:
                        ‘/users/\(id).json is indicated in the endpoint, then the server calls the
                        show function.
                    </p>
                    <Pre value={code2} />
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
                        <b>Exploring the code in this example:</b>
                    </p>
                    <p>
                        The client <HL color='steel-blue'>id</HL> number specified in the endpoint
                        is placed in the set named <HL color='light-sky-blue'>params</HL>; this is
                        where we get the id from. Thus: params[:id].
                    </p>
                    <p>
                        As the User class is inherited from ActiveRecord, it has a static{' '}
                        <HL color='sandy-brown'>find</HL> function, which searches through the
                        entries in the users table.
                    </p>
                    <ul>
                        <li>
                            This function finds an entry with an id that matches the one from the
                            client.
                        </li>
                        <li>
                            Using the data from this entry, the function creates an instance of the
                            User class.
                        </li>
                        <li>
                            We place this instance in the temporary variable{' '}
                            <HL color='green-yellow'>userToShow</HL>.
                        </li>
                        <li>
                            We use the <HL color='plum'>UserSerializer</HL> class and its{' '}
                            <HL color='red'>serialize</HL> function to convert our user instance
                            into the Json type.
                        </li>
                        <li>
                            Then, using the standard render function (of the ApplicationController
                            class), we send JSON to the client. Before sending it, we add it to the
                            list entitled 'data' under the heading 'data’, as this is what our
                            client is expecting.
                        </li>
                    </ul>
                    <Callout>
                        The <b>ActiveRecord</b> class adds various static functions that let us
                        search for users in a database. These functions include <b>find</b> and{' '}
                        <b>where</b> (which let us set more complex search parameters).
                    </Callout>
                </Section.Main>
            </Section.Block>

            <Additional1 />
        </Section>

        <Assignment number={28} href='https://forms.gle/MHeMuhvct2qqfeKA7'>
            Unpack the sign-up and update functions (above) in the show functions example.
        </Assignment>

        <Section>
            <Section.Block>
                <Section.Main narrow>
                    <p>
                        One thing the Controller is responsible for is checking whether the user can
                        perform a particular action on an object. This check is usually performed
                        via the <i>current user</i> function. This function is a component of the
                        authentication/access token, and helps us find and send all information
                        about the current user:
                    </p>
                    <Pre value={code3} />
                </Section.Main>
            </Section.Block>

            <Additional2 />
        </Section>
    </>
);
