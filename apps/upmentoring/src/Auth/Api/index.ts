import Cookies from 'js-cookie';
import { API_BASE_URL, LEANJS_API_BASE_URL } from '../../App/Config';

const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = (token: string) =>
  fetch(`${API_BASE_URL}/auth`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export function requireSignup(email) {
  return fetch(`${API_BASE_URL}/auth/require-signup`, {
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
  return fetch(`${LEANJS_API_BASE_URL}/subscribe`, {
    ...defaultOptions,
    body: JSON.stringify(payload),
  });
};

export const isContact = (email) => {
  return fetch(`${LEANJS_API_BASE_URL}/isContact/${email}`).then((response) =>
    response.json()
  );
};

export const isOrgMember = (orgId) => {
  return fetch(`${API_BASE_URL}/org-member`, {
    headers: {
      'x-um-orgid': orgId,
    },
  }).then((response) => response.json());
};
