import { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useAPI } from '../tools';

const key =
    'pk_live_51Ii7pwBqu9giiF9Su68omb9BAomy4pthUTcOaExyQSiAsatbAjBymqfpBhdduLJkxjuGDbCf4L4HcfZN7J2UEHxS00jJriFOuQ';

const stripePromise = loadStripe(key);

export const usePayment = () => {
    const fetch = useAPI();

    return useCallback(async () => {
        const stripe = await stripePromise,
            { data } = await fetch('/stripe/checkout_sessions.json', { method: 'POST' });

        stripe.redirectToCheckout({ sessionId: data?.id });
    }, []);
};
