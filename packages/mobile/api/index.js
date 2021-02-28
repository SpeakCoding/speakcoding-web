const apigw = 'http://130.193.44.149:3000';

export async function request(url, options) {
    const { body, anonymous, ...rest } = options || {},
        init = { ...rest },
        token = localStorage.getItem('auth_token');

    if (token) {
        init.headers = {
            ...(init.headers || {}),
            'Authentication-Token': token
        };
    }

    if (body) init.body = JSON.stringify(body);

    const res = await fetch(`${apigw}${url}`, init);

    return res.json();
}
