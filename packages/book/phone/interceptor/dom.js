/* eslint-disable no-param-reassign */

const device = '[data-control=device]';

export function setAttr($nodes, name, value) {
    [...$nodes].forEach($node => {
        $node.dataset[name] = value;
    });
}

export function getElement(selector = '') {
    const $node = document.querySelector(`${device} ${selector}`);
    if (!$node) return null;
    $node.setAttr = setAttr.bind(null, $node ? [$node] : []);
    return $node;
}

export function getElements(selector) {
    const $nodes = [...document.querySelectorAll(`${device} ${selector}`)];
    $nodes.setAttr = setAttr.bind(null, $nodes);
    return $nodes;
}

export function getControl(name) {
    return getElement(name === 'device' ? '' : `[data-control="${name}"]`);
}

export function getControls(name) {
    return getElements(name === 'device' ? '' : `[data-control="${name}"]`);
}

export function getDevice() {
    return getControl('device');
}
