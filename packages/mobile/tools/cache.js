import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const cache = new Map();

const context = createContext({
    get: () => {},
    update: () => {},
    add: () => {}
});

export const CacheProvider = ({ children }) => {
    const [rand, setRand] = useState(0);

    const value = useMemo(
        () => ({
            get(category, id) {
                return cache.get(`${category}/${id}`);
            },
            update(category, id, fields) {
                cache.set(`${category}/${id}`, {
                    ...(cache.get(`${category}/${id}`) || {}),
                    ...fields
                });
                setRand(Math.random());
            },
            add(category, data) {
                const items = Array.isArray(data) ? data : [data],
                    filtered = items.filter(item => !cache.has(`${category}/${item.id}`));

                if (filtered.length > 0) {
                    filtered.forEach(item => {
                        cache.set(`${category}/${item.id}`, item);
                    });
                    setRand(Math.random());
                }
            }
        }),
        [rand]
    );

    return <context.Provider value={value}>{children}</context.Provider>;
};

export function useCache() {
    return useContext(context);
}

export function useCacheState(category, id) {
    const { get, update } = useContext(context),
        updateItem = useCallback(fields => update(category, id, fields), [category, id]);

    return [get(category, id), updateItem];
}
