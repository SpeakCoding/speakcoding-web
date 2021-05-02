import * as interceptor from './interceptor';

export InterceptorView from './InterceptorView';
export Phone from './Container';
export { interceptor };

if (window.location.hostname === 'localhost') window.interceptor = interceptor;
