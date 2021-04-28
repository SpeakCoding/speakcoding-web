export function getDefaultCourse() {
    const supported = ['en', 'ru'],
        lang = window.navigator.language.slice(0, 2);

    return supported.includes(lang) ? lang : supported[0];
}
