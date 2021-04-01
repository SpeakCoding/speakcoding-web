export function addEventListener(event, handler) {
    document.addEventListener(event, handler);

    return () => document.removeEventListener(event, handler);
}

export function getCursorPosition(event) {
    if (event.touches && event.touches.length) {
        return {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    }

    return {
        x: event.clientX,
        y: event.clientY
    };
}
