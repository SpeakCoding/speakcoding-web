const apigw = 'http://130.193.44.149:3000';

async function fetch(url, options) {
    const { body, anonymous, ...rest } = options || {},
        token = localStorage.getItem('auth_token');

    const init = {
        ...rest,
        mode: 'cors',
        headers: {
            ...(rest.headers || {}),
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (token) init.headers['Authentication-Token'] = token;
    if (body) init.body = JSON.stringify(body);

    const res = await window.fetch(`${apigw}${url}`, init);

    return res.json();
}

export function useAPI() {
    return fetch;
}
