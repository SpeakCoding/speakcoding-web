export const format = value => {
    const parts = value[0].slice(1).split('\n'),
        offset = parts[0].match(/^\s*/)[0].length;
    return parts.map(line => line.slice(offset)).join('\n');
};
