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

export function injectScript(src, dest = document.body) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');

        script.src = src;
        script.async = true;
        script.type = 'text/javascript';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`${src} load failed`));

        dest.appendChild(script);
    });
}

export function isElementFixed($node) {
    return $node instanceof Element && getComputedStyle($node)?.position === 'fixed';
}

export function getWindowSize() {
    return {
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
    };
}

export function getElementSize($element) {
    const { top = 0, right = 0, bottom = 0, left = 0 } = $element?.getBoundingClientRect() || {};

    return {
        top,
        right,
        bottom,
        left,
        width: right - left,
        height: bottom - top
    };
}
