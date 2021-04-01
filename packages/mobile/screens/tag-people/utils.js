import { addEventListener } from '@sc/tools/dom';

export function addDragHandlers(watchCursor, onFinish) {
    let subscribers = [];
    const unsubscribe = () => subscribers.forEach(cb => cb());

    subscribers = [
        addEventListener('mousemove', watchCursor),
        addEventListener('touchmove', watchCursor),
        addEventListener('mouseup', unsubscribe),
        addEventListener('touchend', unsubscribe),
        onFinish
    ];
}

export function fitTag($tag, $box) {
    $tag.style.left = 0;

    setTimeout(() => {
        const tag = $tag.getBoundingClientRect(),
            box = $box.getBoundingClientRect();

        if (tag.left < box.left) $tag.style.left = `${box.left - tag.left}px`;
        else if (tag.right > box.right) $tag.style.left = `${box.right - tag.right}px`;
    }, 100);
}
