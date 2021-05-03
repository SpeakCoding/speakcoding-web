function emitEvent(type, payload = {}) {
    document.dispatchEvent(new CustomEvent('sc-phone-event', { detail: { type, payload } }));
}

export function setSession(token) {
    if (localStorage.getItem('mobile_auth_token') === token) return;
    localStorage.setItem('mobile_auth_token', token);
    emitEvent('session-set');
}

export function logout() {
    localStorage.removeItem('mobile_auth_token');
    emitEvent('logout');
}

export function open() {
    emitEvent('open');
}

export function close() {
    emitEvent('close');
}
