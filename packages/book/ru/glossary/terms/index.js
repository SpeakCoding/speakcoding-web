const context = require.context('.', false, /\.js$/);

const terms = context
    .keys()
    .filter(name => !/index/.test(name))
    .reduce((memo, name) => {
        const module = context(name);

        return {
            ...memo,
            [module.id]: module
        };
    }, {});

export default terms;
