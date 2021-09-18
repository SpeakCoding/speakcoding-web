export function createAPI({ apigw, tokenName }) {
    async function fetch(resource, options) {
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

        const res = await window.fetch(`${apigw}${resource}`, init);

        return res.json();
    }

    function create(method) {
        return (resource, body, options = {}) => fetch(resource, { method, body, ...options });
    }

    fetch.get = create('GET');
    fetch.post = create('POST');
    fetch.put = create('PUT');
    fetch.patch = create('PATCH');
    fetch.delete = create('DELETE');

    return fetch;
}
