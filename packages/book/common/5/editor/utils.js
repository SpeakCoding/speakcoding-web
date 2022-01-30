/* eslint-disable no-param-reassign */

import { createContext } from 'react';

export const zoomIn = $element => {
    $element.style.zIndex = 2;
    $element.dataset.active = 'true';
};

export const zoomOut = $element => {
    $element.style.zIndex = 1;
    delete $element.dataset.active;
    setTimeout(() => {
        if (!$element.dataset.active) $element.style.zIndex = 'initial';
    }, 240);
};

export const context = createContext({ id: undefined });
