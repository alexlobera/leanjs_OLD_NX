import { getURLParameter } from './url';

export const setCookie = (name, value, days = 100, path = '/') => {
  if (typeof window === 'undefined') {
    return;
  }
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  window.document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    path;
};

export function getCookie(name) {
  if (typeof window === 'undefined') {
    return;
  }
  const found = document.cookie.match(
    '(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)'
  );
  return found ? found.pop() : '';
}

export const getVoucherByPathname = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const voucher = getURLParameter('voucher');
  const { pathname } = window.location;
  const pathNameNoTrailingSlash = pathname.replace(/\/$/, '');
  if (voucher) {
    const expiresInSevenDays = new Date().getTime() + 604800000;
    setCookie(pathNameNoTrailingSlash, voucher, expiresInSevenDays);
    return voucher;
  } else {
    return getCookie(pathNameNoTrailingSlash);
  }
};
