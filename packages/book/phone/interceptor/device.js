/* eslint-disable no-param-reassign */
import * as dom from './dom';

export async function init() {
    return new Promise(resolve => {
        document.addEventListener('sc-phone-event', event => {
            if (event.detail.type === 'ready') resolve();
        });
    });
}

export function on() {
    dom.getDevice().setAttr('interceptor', 'on');
}

export function off() {
    dom.getDevice().setAttr('interceptor', 'off');
}

export function reset() {
    const $nodes = document.querySelectorAll('[data-lock]');
    $nodes.forEach($node => {
        delete $node.dataset.lock;
    });
}

export function lockDisplay() {
    dom.getControl('display')?.setAttr('lock', 'on');
}

export function unlockDisplay() {
    dom.getControl('display')?.setAttr('lock', 'off');
}

export function lockScreen() {
    dom.getControl('screen')?.setAttr('lock', 'on');
}

export function unlockScreen() {
    dom.getControl('screen')?.setAttr('lock', 'off');
}

export function lockTabs() {
    dom.getControl('tabs')?.setAttr('lock', 'on');
}

export function unlockTabs() {
    dom.getControl('tabs')?.setAttr('lock', 'off');
}

export function switchTab(name) {
    const $tab = dom.getControl('tabs')?.querySelector(`[data-tab="${name}"]`);
    $tab?.click();
}

export function scrollToTop() {
    const $content = dom.getControl('screen')?.querySelector('[data-role=screen-content]');
    if ($content) $content.scrollTop = 0;
}
