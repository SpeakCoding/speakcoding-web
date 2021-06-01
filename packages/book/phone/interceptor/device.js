import { emit } from '@sc/tools/phone-event';
import { getControl } from './dom';

export async function lock() {
    const $el = await getControl('display');
    if ($el) $el.dataset.lock = 'on';
}

export async function unlock() {
    const $el = await getControl('display');
    if ($el) $el.dataset.lock = 'off';
}

export async function switchTab(name, { reset } = {}) {
    const $tab = (await getControl('tabs'))?.querySelector(`[data-tab="${name}"]`);
    $tab?.click();
    if (reset) $tab?.click();
}

export async function scrollToTop() {
    const $content = (await getControl('screen'))?.querySelector('[data-role=screen-content]');
    if ($content) $content.scrollTop = 0;
}

export async function navigate(name, params = {}) {
    emit('navigate', { name, params });
}
