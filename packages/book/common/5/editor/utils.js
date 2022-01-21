/* eslint-disable no-param-reassign */
let zi = 1;

export const updateZIndex = $element => {
    zi++;
    $element.style.zIndex = zi;
};
