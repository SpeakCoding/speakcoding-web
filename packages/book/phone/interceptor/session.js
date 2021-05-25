import { emit, listen } from '@sc/tools/phone-event';
import * as config from './config';

export function setSession(session, options = {}) {
    if (options.soft && !!localStorage.getItem('mobile_auth_token')) return true;

    return new Promise((resolve, reject) => {
        const unsubscribe = listen(({ detail }) => {
            if (detail.type === 'profile-update') {
                unsubscribe();
                resolve(detail.payload);
            }
        });
        emit('reset', session);
        setTimeout(() => {
            unsubscribe();
            reject(new Error('setSession timeout'));
        }, options.timeout || config.timeout);
    });
}

export function logout(options = {}) {
    return new Promise((resolve, reject) => {
        const unsubscribe = listen(({ detail }) => {
            if (detail.type === 'profile-update') {
                unsubscribe();
                resolve(detail.payload);
            }
        });
        emit('reset');
        setTimeout(() => {
            unsubscribe();
            reject(new Error('logout timeout'));
        }, options.timeout || config.timeout);
    });
}

export function getState(options = {}) {
    return new Promise((resolve, reject) => {
        const unsubscribe = listen(({ detail }) => {
            if (detail.type === 'current-state') {
                unsubscribe();
                resolve(detail.payload);
            }
        });
        emit('get-state');
        setTimeout(() => {
            unsubscribe();
            reject(new Error('getState timeout'));
        }, options.timeout || config.timeout);
    });
}
