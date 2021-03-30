function addEventListener(event, handler) {
    document.addEventListener(event, handler);

    return () => document.removeEventListener(event, handler);
}

export function addDragHandlers(watchCursor) {
    let subscribers = [];
    const unsubscribe = () => subscribers.forEach(cb => cb());

    subscribers = [
        addEventListener('mousemove', watchCursor),
        addEventListener('touchmove', watchCursor),
        addEventListener('mouseup', unsubscribe),
        addEventListener('touchend', unsubscribe)
    ];
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
