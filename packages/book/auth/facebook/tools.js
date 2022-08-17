import { injectScript } from '@sc/tools/dom';

const appId = '393596709385236';

export const init = async () => {
    window.fbAsyncInit = () => {
        const { FB } = window;
        FB.init({ appId, version: 'v14.0' });
        FB.AppEvents.logPageView();
    };

    return injectScript('https://connect.facebook.net/en_US/sdk.js');
};

export const signIn = () =>
    new Promise(resolve => {
        const { FB } = window;

        FB.getLoginStatus(current => {
            if (current?.status !== 'connected') {
                FB.login(
                    res => {
                        resolve(res?.authResponse?.accessToken);
                    },
                    { scope: 'email,public_profile' }
                );
            } else resolve(undefined);
        });
    });

export function signOut() {
    return window.FB.logout();
}
