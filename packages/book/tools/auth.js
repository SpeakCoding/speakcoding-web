import { injectScript } from '@sc/tools/dom';

const clientid = '42320260727-j3epvmkvjq64ir4fhju6brhiiviqophu.apps.googleusercontent.com';

export async function init() {
    await injectScript('https://apis.google.com/js/platform.js');

    const { gapi } = window;

    gapi.load('auth2', () => {
        gapi.auth2.init({ client_id: clientid }).then(GoogleAuth => {
            console.log(GoogleAuth);
        });
    });
}

export async function signIn() {
    const { gapi } = window,
        GoogleAuth = gapi.auth2.getAuthInstance();

    const user = await GoogleAuth.signIn({
        scope: 'profile email'
    });

    console.log(user);
}

export function signOut() {
    return window.gapi.auth2.getAuthInstance().signOut();
}
