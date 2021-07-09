import React from 'react';
import { Button, Code, Expand, Pre, Section } from '@sc/ui';

const code1 = `
def create
    user = User.create(user_params)
    if user.save
        render json: {
            data: UserSerializer.new(user, self).serialize,
            meta: { authentication_token: user.authentication_token }
        }
    else
        render_errors(user.errors)
    end
end
    
def user_params
    result = params.require(:user).permit(:email, :password, :user_name, :bio, :profile_picture)
end`;

const code2 = `
def update()
    user = User.find(params[:id])

    if user != current_user()
       render_unauthorized()
       return
    end 

    user.attributes = user_params
    if user.save
        render json: {
            data: UserSerializer.new(user, self).serialize
        }
    else
        render_errors(user.errors)
    end
end`;

export default () => (
    <>
        <Section.Block>
            <Section.Main narrow>
                <h2>
                    (Additional) Creating a new user profile (or Sign up){' '}
                    <Expand.Control htmlFor='11-1-1'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>

                <Expand id='11-1-1'>
                    <Pre.Box>
                        <Code value={code1} />
                    </Pre.Box>
                </Expand>

                <h2>
                    (Additional) Changing user parameters{' '}
                    <Expand.Control htmlFor='11-1-2'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>

                <Expand id='11-1-2'>
                    <Pre.Box>
                        <Code value={code2} />
                    </Pre.Box>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
