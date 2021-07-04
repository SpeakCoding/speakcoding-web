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
                    (Дополнительно) Нестандартные запросы - follow{' '}
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
                        Если нам необходимо добавить нестандартный запрос в контроллер
                        UserController, то на стороне клиента мы добавляем имя этого запроса в
                        endpoint, а в контроллере на сервере добавляем функцию с этим же именем.
                    </p>
                    <p>
                        Например, для запроса follow, endpoint “"/users/\(id)/follow.json", и на
                        стороне сервера добавляем функцию UserController follow.
                    </p>
                    <Pre.Box>
                        <Code value={code1} />
                    </Pre.Box>
                    <p>
                        Как и на клиенте, в Controller описываются стандартные функции, отвечающие
                        за взаимодействие с пользователем. В нем мы определяем, что программа должна
                        сделать, чтобы создать/изменить/удалить и т.д. экземпляры наших model
                        классов.
                    </p>
                </Expand>
            </Section.Main>
        </Section.Block>
    </>
);
