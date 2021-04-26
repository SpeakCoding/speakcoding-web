export function createAPI({ apigw, tokenName }) {
    return async function fetch(url, options) {
        const { body, anonymous, ...rest } = options || {},
            token = localStorage.getItem(tokenName);

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
    };
}
