export const fixTabs = value => {
    let parts = value.split('\n'),
        shift;

    if (parts[0] === '') parts = parts.slice(1);

    return parts.reduce((res, line, i) => {
        if (i === 0) {
            const [, spaces, codeline] = /^(\s*)(.*)$/.exec(line);
            shift = spaces.length;
            return codeline;
        }
        return `${res}\n${line.slice(shift)}`;
    }, '');
};
