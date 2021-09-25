import React from 'react';
import { Button, Expand, Pre, Section } from '@sc/ui';

const code1 = `
def {{hl:create}}(wheat)
    user = {{hl:User}}(green).{{hl:create}}(wheat)({{hl:user_params}}(light-sky-blue))
    if user.save
        render json: {
            data: UserSerializer.new(user, self).serialize,
            meta: { authentication_token: user.authentication_token }
        }
    else
        render_errors(user.errors)
    end
end
    
def {{hl:user_params}}(light-sky-blue)
    result = params.require(:user).permit(:email, :password, :user_name, :bio, :profile_picture)
end`;

const code2 = `
def {{hl:update}}(wheat)()
    user = {{hl:User}}(green).{{hl:find}}(wheat)({{hl:params[:id]}}(light-sky-blue)))

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
    <>
        <Section.Block>
            <Section.Main hlactive narrow>
                <h2>
                    (Дополнительно) Создание нового пользователя (или Sign up){' '}
                    <Expand.Control htmlFor='11-1-1'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>

                <Expand id='11-1-1'>
                    <Pre value={code1} />
                </Expand>

                <h2>
                    (Дополнительно) Изменения параметров пользователя{' '}
                    <Expand.Control htmlFor='11-1-2'>
                        <Button variant='rounded'>⤵</Button>
                    </Expand.Control>
                </h2>

                <Expand id='11-1-2'>
                    <Pre value={code2} />
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
