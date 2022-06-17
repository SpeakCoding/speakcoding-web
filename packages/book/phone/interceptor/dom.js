import * as config from './config';

export function getElement(selector = '', options = {}) {
    const maxAttempts = Math.floor((options.timeout || config.timeout) / 100);

    let attempts = 0;

    return new Promise((resolve, reject) => {
        function find() {
            attempts++;
            const $node = document.querySelector(`${config.deviceSelector} ${selector}`);
            if ($node) {
                resolve($node);
                return;
            }
            if (attempts <= maxAttempts) setTimeout(find, 100);
            else reject(new Error(`getElement "${config.deviceSelector} ${selector}" timeout`));
        }

        find();
    });
}

export function getControl(name) {
    return getElement(name === 'device' ? '' : `[data-control="${name}"]`);
}
