import { useMemo } from 'react';
import { useLocation, useNavigate, useMatch, useParams } from 'react-router-dom';
import qs from 'qs';

const originParts = {
    origin: window.location.origin,
    protocol: window.location.protocol,
    host: window.location.host,
    hostname: window.location.hostname,
    port: window.location.port
};

function useLocationState({ pattern = '' } = {}) {
    const location = useLocation(),
        params = useParams(),
        navigate = useNavigate(),
        match = useMatch(pattern);

    const query = useMemo(() => qs.parse(location.search.replace(/^\?/, '')), [location.search]);

    const state = useMemo(
        () => ({
            ...originParts,
            ...location,
            query,
            params,
            match
        }),
        [location, query, params]
    );

    return [state, navigate];
}

export default useLocationState;
