import Cookies from 'js-cookie';

const umApiBaseUrl =
    process.env.NX_UPMENTORING_GRAPHQL_API_BASE_URL ||
    'https://api2.upmentoring.com';
const apiBaseUrl =
    process.env.NX_LEANJS_API_BASE_URL || 'https://api.leanjs.com';

const defaultOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
};

export const login = (token) =>
    fetch(`${umApiBaseUrl}/auth`, {
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export function requireSignup(email) {
    return fetch(`${umApiBaseUrl}/auth/require-signup`, {
        headers: {
            'x-um-orgid': process.env.GATSBY_UPMENTORING_ORG_ID,
        },
        ...defaultOptions,
        body: JSON.stringify({ email }),
    }).then((response) => response.json());
}

export const triggerSubscribe = ({
    email,
    form = 'login',
    resources = true,
}) => {
    const utm_source = Cookies.get('utm_source');
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    const payload = {
        email,
        form,
        resources,
        path,
        utm_source,
    };
    return fetch(`${apiBaseUrl}/subscribe`, {
        ...defaultOptions,
        body: JSON.stringify(payload),
    });
};

export const isContact = (email) => {
    return fetch(`${apiBaseUrl}/isContact/${email}`).then((response) =>
        response.json()
    );
};
