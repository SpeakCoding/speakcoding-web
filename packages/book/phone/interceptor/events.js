function emitEvent(type, payload = {}) {
    document.dispatchEvent(new CustomEvent('sc-phone-event', { detail: { type, payload } }));
}

export function setSession(token) {
    emitEvent('set-session', { token });
}

export function logout() {
    emitEvent('logout');
}

export function open() {
    emitEvent('open');
}

export function close() {
    emitEvent('close');
}
