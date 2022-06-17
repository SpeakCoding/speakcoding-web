import * as config from './config';

export function getElement(selector = '', options = {}) {
    const maxAttempts = Math.floor((options.timeout || config.timeout) / 100);

    let attempts = 0;

    return new Promise(resolve => {
        function find() {
            attempts++;
            const $node = document.querySelector(`${config.deviceSelector} ${selector}`);

            if ($node) resolve($node);
            else if (attempts <= maxAttempts) setTimeout(find, 100);
            else {
                console.error(`getElement "${config.deviceSelector} ${selector}" timeout`);
                resolve(null);
            }
        }

        find();
    });
}

export function getControl(name) {
    return getElement(name === 'device' ? '' : `[data-control="${name}"]`);
}
