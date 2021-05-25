import { emit } from '@sc/tools/phone-event';
import { getControl } from './dom';

export async function on() {
    const $el = await getControl('device');
    if ($el) $el.dataset.interceptor = 'on';
}

export async function off() {
    const $el = await getControl('device');
    if ($el) $el.dataset.interceptor = 'off';
}

export function open() {
    emit('open');
}

export function close() {
    emit('close');
}
