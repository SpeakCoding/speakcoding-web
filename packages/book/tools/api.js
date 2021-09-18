import { createAPI } from '@sc/tools/api';

const api = createAPI({
    apigw: 'https://api.speakcoding.co',
    tokenName: 'book_auth_token'
});

export function useAPI() {
    return api;
}
