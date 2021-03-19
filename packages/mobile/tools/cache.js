const cache = new Map();

function set(category, key, value) {
    cache.set(`${category}/${key}`, value);
}

function get(category, key) {
    return cache.get(`${category}/${key}`);
}

export function useCache() {
    return { set, get };
}
