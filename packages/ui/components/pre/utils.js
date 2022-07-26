const specRE = /[[\](){}:;.,|=+*!?'-]/,
    keywordsRE =
        /^(func|function|def|class|var|let|if|end|in|as|else|do|return|new|override|import|weak|private|static|public|required|while)$/,
    funcRE = /^(func|function|def|class)$/,
    mathRE = /^[=+*!?><-]$/,
    numberRE = /^\d+$/,
    stringRE = /^".+"$/,
    classNameRE = /^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё\d_]+$/,
    sqlRE = /^(CREATE|AND|SELECT|OR|DELETE|UPDATE|FROM|WHERE|TABLE)$/,
    reservedRE = /^(true|false|nil|self)$/;

const genID = () => Math.random().toString().slice(2);

const extractSpecialChars = line => {
    const tmp = line.split(specRE);
    let i = 0;

    return tmp.reduce((res, word) => {
        const next = [...res, { id: genID(), value: word }];
        i += word.length;
        if (line[i]) next.push({ id: genID(), type: 'spec', value: line[i] });
        i++;
        return next;
    }, []);
};

export const parseCode = (code = '') => {
    const memo = {};
    let stringOpened = false;

    return code
        .replace(/^\n+|\n+$/g, '')
        .replace(/\{\{(.+?)}}\((\w+?):(.+?)\)/g, (match, value, formatter, params) => {
            const i = Object.keys(memo).length + 1,
                name = `%VAR${i}%`;

            let item = { id: genID(), type: 'custom', value };
            if (formatter === 't') item.type = params;
            else item = { ...item, formatter, params: params.split(':') };
            memo[name] = item;

            return name;
        })
        .split('\n')
        .map(line => {
            const parts = line
                .split(' ')
                .map(item => extractSpecialChars(item))
                .reduce((res, item) => [
                    ...res,
                    { id: genID(), type: 'space', value: ' ' },
                    ...item
                ])
                .flat()
                .filter(item => !!item.value)
                .map(item => {
                    const updated = { ...item };
                    stringOpened = stringOpened || /^"/.test(item.value);
                    if (stringOpened) updated.type = 'string';
                    const [a, b] = item.value.slice(-2);
                    if ((a === '"' && !b) || (a !== '\\' && b === '"')) stringOpened = false;
                    return updated;
                });

            return parts.map((current, i) => {
                const item = { ...current };

                if (memo[item.value]) return memo[item.value];

                if (!item.type) {
                    if (keywordsRE.test(item.value)) item.type = 'keyword';
                    if (mathRE.test(item.value)) item.type = 'math';
                    if (numberRE.test(item.value)) item.type = 'number';
                    if (stringRE.test(item.value)) item.type = 'string';
                    if (classNameRE.test(item.value)) item.type = 'class';
                    if (sqlRE.test(item.value)) item.type = 'sql';
                    if (reservedRE.test(item.value)) item.type = 'reserved';
                }

                if (item.value === '"""') item.type = 'spec';

                if (parts[i - 2]?.type !== 'space' && parts[i - 1]?.value === '.' && !item.type) {
                    if (parts[i + 1]?.value === '(') item.type = 'method';
                    else item.type = 'prop';
                }

                if (funcRE.test(parts[i - 2]?.value) && !item.type) item.type = 'func';

                if (!item.type) item.type = 'text';

                return item;
            });
        })
        .reduce((res, line) => [...res, { id: genID(), type: 'text', value: '\n' }, ...line]);
};
