const name = 'sc-phone-event';

export function emit(type, payload) {
    document.dispatchEvent(new CustomEvent(name, { detail: { type, payload } }));
}

export function listen(handler) {
    document.addEventListener(name, handler);

    return () => {
        document.removeEventListener(name, handler);
    };
}
