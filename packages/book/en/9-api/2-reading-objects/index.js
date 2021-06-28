import React from 'react';
import { Callout, Code, HL, Hint, Link, Pre, Section } from '@sc/ui';
import { Assignment } from '../../../components';
import Term from '../../glossary/Term';

const code = `
func requestCompletion (result: Any?, metadata: [String : String]?, [[error: Error?]](steel-blue)) { 
    if let postJSONs = result as? [[\u200b[\u200b[]](plum)[[String]](orange): Any[[]\u200b]\u200b]](plum) {
        let posts = postJSONs.[[map]](light-sky-blue) { (postJSON) -> Post in
            Post.instance(withJSON: postJSON)
        }
        feed.posts = posts
        Cache.shared.update(feed: feed)
        completion(posts, nil)
    } else {
        completion(nil, error)
    }
}`;

export default () => (
    <>
        <Section>
            <Section.Main narrow>
                <h2>Reading objects or lists of objects</h2>
                <Callout>
                    GET: Refers to reading information. This request is used to retrieve data from
                    the server. We read an object or a list of objects.
                </Callout>
                <HL.Context active>
                    <p>
                        Let’s say we wish to download <HL color='light-sky-blue'>all posts</HL>{' '}
                        <HL color='thistle'>by a particular user</HL>onto our phone. To do so, we
                        need to write, on the client device, a function and a special request
                        containing a long, detailed address string, similar to the one used in a
                        browser (
                        <Link href='https://api.speakcoding.co/users/1/posts.json' blank>
                            https://api.speakcoding.co/users/1/posts.json
                        </Link>
                        ).
                    </p>
                    <Pre>
                        <HL color='orange'>func getPostsOf</HL>(<HL color='thistle'>user: User</HL>)
                        -> <HL color='light-sky-blue'>[Post]</HL>
                    </Pre>
                    <p>
                        We start by formulating our <HL color='green'>request</HL>, which consists
                        of various parts.
                    </p>
                    <ul>
                        <li>
                            The path to the file on the server, indicating – by way of an{' '}
                            <HL color='sandy-brown'>endpoint</HL> – where on the server side the
                            request will be received;
                        </li>
                        <li>
                            The request type (method), which determines the actions required (i.e.
                            to provide us with all of the posts);
                        </li>
                        <li>
                            The required <HL color='turquoise'>parameters</HL> of the requested
                            data. In this case no additional parameters are needed;
                        </li>
                        <li>
                            Some requests also require the client who is requesting the data to be
                            authorised (more on this later).
                        </li>
                    </ul>
                    <Pre>
                        let <HL color='green'>request</HL> = makeRequest(method:{' '}
                        <HL color='light-sky-blue'>HTTPMethod</HL>.GET,{' '}
                        <HL color='sandy-brown'>endpoint:</HL> "
                        <HL color='sandy-brown'>
                            /users/
                            <Hint>
                                \(user.id)
                                <Hint.Tooltip>
                                    In previous chapters, we combined various text values in a
                                    string using the '+' symbol; here we have done so using the
                                    backslash '\' symbol. This combines textual and numerical
                                    designations and places them in the \ string. After the
                                    backslash, brackets (...) sometimes appear, within which a
                                    particular operation can be performed.
                                </Hint.Tooltip>
                            </Hint>
                            /posts
                        </HL>
                        .json", authorized: true, <HL color='turquoise'>parameters: nil</HL>)
                    </Pre>
                    <p>
                        The GET request describes the operation that the server needs to perform,
                        and the server has a function that describes how it should react to such
                        requests. We can put the request’s link into our browser to get information
                        about the object we need.
                    </p>
                    <p>
                        Having formulated our request, we describe the function that will{' '}
                        <HL color='red'>perform it</HL>.
                    </p>
                    <Pre>
                        <HL color='red'>performRequest</HL>(request: request, completion:
                        requestCompletion)
                    </Pre>
                    <p>
                        To this function we assign the requestCompletion function, which will be
                        performed when the server returns the information about the object (result)
                        or reports an <HL color='steel-blue'>error</HL> if no such object exists.
                    </p>
                    <Pre.Box>
                        <Code value={code} />
                    </Pre.Box>
                </HL.Context>
                <p>
                    The information that the server returns is first presented as a text string
                    written in the JSON format.
                </p>
                <Callout>
                    <Term id='json' tooltip>
                        JSON
                    </Term>
                    : A format convenient for presenting textual information about objects. The
                    format can be presented as a named set in which each name corresponds to the
                    name of a component. Therefore, in the code above, as we are requesting
                    information about all posts, the server’s response – in the Json format – will
                    be plural (hence the double square brackets in the functions shown above).
                </Callout>
                <p>
                    In our example, as we are retrieving a set of posts from the server, and each
                    post is presented as a named set, the result we receive from the server is
                    presented as a set of named sets.
                </p>
                <Pre>
                    Json == String -> [String : Any] <br />
                    [Json == String] -> [ [String : Any] ]
                </Pre>
                <p>
                    We could communicate with the server differently, but thinking of data in
                    conjunction with a particular object makes working with the data simpler.
                </p>
                <p>In modern programming languages, standard sets have standard functions.</p>
                <p>
                    Here the{' '}
                    <HL color='light-sky-blue' active>
                        map
                    </HL>{' '}
                    function goes through all of the objects in its database and executes the lines
                    of code that follow to convert information about these objects into objects of
                    the class that we need (in this case, text). The function returns a set of the
                    new type of elements and sends a response to the device.
                </p>
                <p>
                    The functions Makerequest (which creates an object) and performrequest (which
                    sends an object to the server) are typically standardized, and we can copy them
                    from a repository or library on the Internet. These functions convert the
                    parameters into a form used by the standard functions of the standard libraries
                    that communicate with the server.
                </p>
            </Section.Main>
        </Section>

        <Assignment number={24} href='https://forms.gle/mVGWj6Pqpu8tPwAy6'>
            Which request helps us retrieve the most recent comments to the user’s last post? Using
            the examples above, write the entire request.
        </Assignment>
    </>
);
