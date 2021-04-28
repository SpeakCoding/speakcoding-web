const scheme = {
    en: {
        ch1: { q1: false, a1: false, q2: false, a2: false }
    },
    ru: {
        ch1: { q1: false, a1: false, q2: false, a2: false }
    }
};

export function getDefaultCourse() {
    const lang = window.navigator.language.slice(0, 2);

    return lang in scheme ? lang : 'en';
}
