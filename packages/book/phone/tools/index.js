function emitEvent(type, payload = {}) {
    document.dispatchEvent(new CustomEvent('sc-phone-event', { detail: { type, payload } }));
}

export function setSession(token) {
    emitEvent('set-session', { token });
}
