import en from './en.json';
import ru from './ru.json';

const context = require.context('./assets', false, /\.jsx$/);

const assets = context.keys().reduce((res, name) => {
    const module = context(name),
        [, id] = /\.\/(.+?)\.jsx$/.exec(name);
    return { ...res, [id]: module.default };
}, {});

export default { en, ru, assets };
