import React from 'react';
import { Callout, Code, Grid, HL, Img, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import img from './serialization.svg';

const code1 = `let request = makeRequest(method: {{HTTPMethod.POST}}(hl:light-sky-blue), endpoint: "/ {{posts}}(hl:green).json", authorized: true, parameters: requestParameters)`;

const code2 = `let request = makeRequest(method: {{HTTPMethod.POST}}(hl:light-sky-blue), endpoint: "/ {{posts/\\(post.id)}}(hl:green).json", authorized: true, parameters: requestParameters)`;

const code3 = `
func signUp(emailAddress: String, password: String, completion: @escaping ((User?, Error?) -> Void)) {
    let {{hl:requestParameters}}(green) = [{{hl:"user": ["email": emailAddress, "password": password]}}(light-sky-blue)]
    let request = makeRequest(method: HTTPMethod.{{hl:POST}}(orange), endpoint: "/users.json", authorized: false, parameters: {{hl:requestParameters}}(green))
}`;

export default () => (
    <>
        <Section>
            <Section.Block>
                <Section.Main>
                    <h2>Creating and changing objects</h2>
                    <Callout>
                        POST: This request is used to create (write) objects on the server.
                    </Callout>
                    <p>
                        Let’s say we wish to add a new post. The device first saves, to its local
                        database, the information that we enter into the interface, such as text and
                        pictures for the post. As you remember, The files with which users interact
                        are part of the interface, and are usually called 'view' files'; in this
                        instance, the device saves the information to the View post file. To create
                        the post (write information about the post) on the server, we convert it
                        into text form and send it via a{' '}
                        <HL color='light-sky-blue' active>
                            Post
                        </HL>{' '}
                        request.
                    </p>
                    <Pre>{code1}</Pre>
                    <p>
                        Let’s repeat the steps: we first create a post on the client. The client
                        writes this information into a local database, then immediately converts it
                        into text form and sends it via a Post request to the server. The server
                        then writes the information into its corresponding database. As creating a
                        post on the client entails saving the object's data on the server, these two
                        aspects can be thought of as one and the same process
                    </p>
                    <p>
                        The process of changing an object is similar. The same POST request is used,
                        though the parameters are changed for the new information about the object.
                        To change the information about a particular object, we need its{' '}
                        <HL color='green' active>
                            id, which we add to the endpoint
                        </HL>
                        .
                    </p>
                    <Pre>{code2}</Pre>
                    <p>
                        Returning to the example of the form that the user sees, the process goes
                        thus: the program (client) creates a new object based on the data entered
                        into the field, converts the object into a server request, then uses this
                        request to communicate the new parameters.
                    </p>
                    <p>
                        To delete an object, we take the same URL as in the previous request, with
                        an id, and use the DELETE method. We don’t need to communicate any more
                        parameters to delete the object, as the server performs the deletion by
                        itself.
                    </p>
                    <p>
                        As you can see, the communication process between the device and the server
                        is quite simple. An object is created in the program (such as an example of
                        a class, e.g. a new post) → the serialization function records information
                        about this object in a string and saves it in a local database → we send the
                        string to the server → the server receives the string → the server converts
                        the string into an object → the server saves the object into its database.
                    </p>
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>
                        <Img src={img} />
                    </Section.Sticky>
                </Section.Side>
            </Section.Block>

            <Section.Block>
                <Section.Main>
                    <Grid>
                        <Grid.Cell border='right bottom'>
                            <b>Function description</b>
                        </Grid.Cell>
                        <Grid.Cell border='bottom'>
                            <b>How this is rendered in code</b>
                        </Grid.Cell>
                        <Grid.Cell border='right' hlactive>
                            For example, the Sign up function that we see on the relevant screen of
                            the program interface is essentially no different from creating (
                            <HL color='orange'>POST</HL>) an object of the User class. In the POST
                            request, we send <HL color='green'>parameters</HL> such as{' '}
                            <HL color='light-sky-blue'>email, password, and username </HL> to the
                            server to create a user profile (the user enters these parameters into
                            the signup form).
                        </Grid.Cell>
                        <Grid.Cell hlactive>
                            <Code value={code3} />
                        </Grid.Cell>
                    </Grid>
                </Section.Main>
            </Section.Block>
        </Section>

        <Assignment id='en/25' />
    </>
);
