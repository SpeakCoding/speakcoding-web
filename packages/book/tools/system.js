export const fixLang = value => (['en', 'ru'].includes(value) ? value : 'en');

export const checkLang = () => {
    const lang = localStorage.getItem('lang') || window.navigator.language.slice(0, 2);
    localStorage.setItem('lang', fixLang(lang));
};
