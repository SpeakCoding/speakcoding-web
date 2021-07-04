import React from 'react';
import { Button, Code, Expand, Pre, Section } from '@sc/ui';

const code1 = `
def follow
    other_user = User.find(params[:id])
    current_user.follow(other_user)

    render json: {
        data: UserSerializer.new(other_user.reload, self).serialize
    }
end`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional) Custom requests - follow{' '}
                    <Expand.Control htmlFor='11-1-3'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>
            </Section.Main>
        </Section.Block>

        <Section.Block>
            <Section.Main narrow>
                <Expand id='11-1-3'>
                    <p>
                        If we need to add a custom request to the UserController controller, then on
                        the client side we add the name of this request to the endpoint, and on
                        server-side we add a function with that same name to the controller.
                    </p>
                    <Pre.Box>
                        <Code value={code1} />
                    </Pre.Box>
                    <p>
                        Standard functions responsible for interacting with the user are written in
                        the Controller, just as they are in the client. In the Controller, we define
                        what the program needs to do to create/change/delete etc. instances of our
                        model classes.
                    </p>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
