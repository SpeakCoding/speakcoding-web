import { injectScript } from '@sc/tools/dom';

const options = {
    clientId: 'sid.co.speakcoding.book',
    redirectURI: 'https://book.speakcoding.co?auth_callback=apple',
    response_type: 'code id_token',
    scope: 'email name',
    usePopup: true
};

export const init = async () => {
    await injectScript(
        'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
    );

    window.AppleID.auth.init(options);
};

export const signIn = async () => window.AppleID.auth.signIn();
