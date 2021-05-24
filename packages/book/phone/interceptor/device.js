/* eslint-disable no-param-reassign */
import * as dom from './dom';

let ready = false;

export async function init() {
    if (ready) return true;

    return new Promise(resolve => {
        document.addEventListener('sc-phone-event', event => {
            if (event.detail.type === 'ready') {
                ready = true;
                resolve();
            }
        });
    });
}

export async function on() {
    (await dom.getDevice())?.setAttr('interceptor', 'on');
}

export async function off() {
    (await dom.getDevice())?.setAttr('interceptor', 'off');
}

export function reset() {
    const $nodes = document.querySelectorAll('[data-lock]');
    $nodes.forEach($node => {
        delete $node.dataset.lock;
    });
}

export async function lockDisplay() {
    (await dom.getControl('display'))?.setAttr('lock', 'on');
}

export async function unlockDisplay() {
    (await dom.getControl('display'))?.setAttr('lock', 'off');
}

export async function lockScreen() {
    (await dom.getControl('screen'))?.setAttr('lock', 'on');
}

export async function unlockScreen() {
    (await dom.getControl('screen'))?.setAttr('lock', 'off');
}

export async function lockTabs() {
    (await dom.getControl('tabs'))?.setAttr('lock', 'on');
}

export async function unlockTabs() {
    (await dom.getControl('tabs'))?.setAttr('lock', 'off');
}

export async function switchTab(name, resetTab) {
    const $tab = (await dom.getControl('tabs'))?.querySelector(`[data-tab="${name}"]`);
    $tab?.click();
    if (resetTab) $tab?.click();
}

export async function scrollToTop() {
    const $content = (await dom.getControl('screen'))?.querySelector('[data-role=screen-content]');
    if ($content) $content.scrollTop = 0;
}
