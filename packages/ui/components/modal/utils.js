import s from './modal.css';

export const modalRoot = document.createElement('div');
modalRoot.classList.add(s.root);

export const // Be sure this is synched with CSS animation settings
    openingTimeout = 400,
    closingTimeout = 240;
