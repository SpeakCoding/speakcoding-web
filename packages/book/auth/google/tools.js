import { injectScript } from '@sc/tools/dom';

const clientid = '42320260727-j3epvmkvjq64ir4fhju6brhiiviqophu.apps.googleusercontent.com';

export const init = async () => {
    await injectScript('https://apis.google.com/js/platform.js');

    const { gapi } = window;

    gapi.load('auth2', () => {
        gapi.auth2.init({ client_id: clientid });
    });
};

export const signIn = async () => {
    const { gapi } = window,
        GoogleAuth = gapi.auth2.getAuthInstance(),
        user = await GoogleAuth.signIn({ scope: 'profile email' });

    return user.getAuthResponse().id_token;
};

export const signOut = () => window.gapi.auth2.getAuthInstance().signOut();
