import * as dom from './dom';
import s from './interceptor.css';

const $hlRoot = document.createElement('div'),
    clonesCache = {};

let timer;

document.body.appendChild($hlRoot);

const $overlay = document.createElement('div');
$overlay.dataset.role = 'overlay';
$overlay.classList.add(s.overlay);

export function darkenDisplay() {
    const $display = dom.getControl('display');
    if ($display) $display.dataset.darken = 'true';
}

export function resetDisplay() {
    const $display = dom.getControl('display');
    if ($display) delete $display.dataset.darken;
}

export function highlightElement(role, options) {
    darkenDisplay();

    if (role in clonesCache) {
        clearTimeout(timer);
        return;
    }

    const $node = dom.getElement(`[data-role=${role}]`);
    if (!$node) return;

    const { color, margin, radius, stroke = 2 } = options;

    const { top, left } = $node.getBoundingClientRect(),
        $box = document.createElement('div');

    $box.classList.add(s.clone);
    $box.style.top = `${top}px`;
    $box.style.left = `${left}px`;
    $box.style.boxShadow = `0 0 0 ${stroke}px var(--bg-${color})`;
    $box.appendChild($node.cloneNode(true));

    if (typeof margin === 'number') {
        $box.style.margin = `-${margin}px`;
        $box.style.padding = `${margin}px`;
    }
    if (typeof radius === 'number') $box.style.borderRadius = `${radius}px`;
    if (typeof radius === 'string') $box.style.borderRadius = radius;

    clonesCache[role] = [...(clonesCache[role] || []), $box];
    $hlRoot.appendChild($box);
}

export function unhighlightElement(role) {
    resetDisplay();
    timer = setTimeout(() => {
        clonesCache[role]?.forEach($node => $node.remove());
        delete clonesCache[role];
    }, 200);
}
