export function debounce(cb, timeout = 0) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => cb(...args), timeout);
    };
}

export function throttle(cb, timeout) {
    let timer;

    return (...args) => {
        if (timer) return;

        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, timeout);
    };
}
