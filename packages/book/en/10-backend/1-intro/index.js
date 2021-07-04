import React from 'react';
import { HL, Img, Link, Pre, Section } from '@sc/ui';
import img from '../../../assets/10/1-how-it-works-en.svg';

export default () => (
    <Section>
        <Section.Main hlactive>
            <h1>The server side of the program</h1>
            <p>
                To understand how server-side program code is constructed, let’s think back to how
                we create and store information about objects on the server.
            </p>
            <p>
                Let’s imagine that we wish to create and store a new user profile. The program saves
                the data entered into the sign up form fields to a local database on the device
                (e.g. your mobile phone). It then converts this data into text and sends it to the
                server via a <HL color='green'>POST</HL> request:
            </p>
            <Pre>
                let request = makeRequest(method: HTTPMethod.
                <HL color='green'>POST</HL>, endpoint: "/
                <HL color='light-sky-blue'>users</HL>
                .json", authorized: false, parameters: requestParameters)
            </Pre>
            <p>
                The server is constantly “waiting” for such requests, and when it receives one, it
                performs the following actions:
            </p>
            <ol>
                <li>
                    The server checks which class is indicated in the endpoint (
                    <HL color='light-sky-blue'>users</HL>) and type (method) of the request (
                    <HL color='green'>POST</HL>), then launches the function that corresponds to
                    this request. In this case, this is the function to create and add a new user
                    profile to the database. The steps for this function are described in the{' '}
                    <HL color='light-sky-blue'>User</HL>Controller class, which is named similarly
                    to the Controller that we described in the client code. So an instance of the
                    UserController class will be created, and the <b>create</b> function of this
                    class will be launched, which is responsible for creating the new object (user
                    profile).
                </li>
                <li>
                    This function deserializes the string received from a device (such as your
                    mobile phone) and creates a new object of the User class. It then saves this
                    object to the corresponding table in the database (by adding a string containing
                    the data about the object to the corresponding table on the server side).
                </li>
            </ol>
            <p>To enable the server to perform this operation, we need to:</p>
            <ol>
                <li>Describe the function that creates tables in the server’s database.</li>
                <li>
                    Describe the basic structural classes of the server-side program (these classes
                    are called models), including serialization and deserialization functions as
                    well as the functions to write to and read from the database.
                </li>
                <li>
                    Describe the Controllers for structural classes, including the functions to
                    create new instances and read existing ones.
                </li>
                <li>
                    Describe the function that reads requests received from the client (device) and
                    launches the functions of the corresponding controllers. To do this, the
                    function checks the request type (POST/GET/DELETE) and the endpoints of the
                    request URL.
                </li>
            </ol>
            <p>
                Let’s explore each of these points in more detail. The server-side code can be found{' '}
                <Link href='https://github.com/SpeakCoding/speakcoding-backend-instagram' blank>
                    here
                </Link>
                .
            </p>
        </Section.Main>
        <Section.Side>
            <Section.Sticky>
                <Img src={img} />
            </Section.Sticky>
        </Section.Side>
    </Section>
);
