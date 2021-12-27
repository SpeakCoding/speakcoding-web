import React from 'react';
import { Button, Expand, Pre, Section } from '@sc/ui';

const code1 = `
def {{create}}(hl:wheat)
    user = {{User}}(hl:green).{{create}}(hl:wheat)({{user_params}}(hl:light-sky-blue))
    if user.save
        render json: {
            data: UserSerializer.new(user, self).serialize,
            meta: { authentication_token: user.authentication_token }
        }
    else
        render_errors(user.errors)
    end
end

def {{user_params}}(hl:light-sky-blue)
    result = params.require(:user).permit(:email, :password, :user_name, :bio, :profile_picture)
end`;

const code2 = `
def {{update}}(hl:wheat)()
    user = {{User}}(hl:green).{{find}}(hl:wheat)({{params[:id]}}(hl:light-sky-blue))

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
end

def render_unauthorized()
    render json: {
        errors: [
            {
                detail: "You're not authorized to access this data"
            }
        ]
    }, status: 403
end`;

export default () => (
    <Section.Block>
        <Section.Main hlactive narrow>
            <h2>
                (Additional) Creating a new user profile (or Sign up){' '}
                <Expand.Control htmlFor='11-1-1'>
                    <Button variant='rounded'>read ⤵</Button>
                </Expand.Control>
            </h2>

            <Expand id='11-1-1'>
                <Pre>{code1}</Pre>
            </Expand>

            <h2>
                (Additional) Changing user parameters{' '}
                <Expand.Control htmlFor='11-1-2'>
                    <Button variant='rounded'>read ⤵</Button>
                </Expand.Control>
            </h2>

            <Expand id='11-1-2'>
                <Pre>{code2}</Pre>
            </Expand>
        </Section.Main>
    </Section.Block>
);
