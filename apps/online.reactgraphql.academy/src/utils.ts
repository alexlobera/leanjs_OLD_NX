// TODO MOVE THIS TO A PACKAGE AND REUSE IT IN THE OTHER PROJECTS

export const getURLParameter = (name) => {
  if (typeof window === 'undefined') return;

  return (
    decodeURIComponent(
      (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(
        window.location.href
      ) || [null, ''])[1].replace(/\+/g, '%20')
    ) || null
  );
};

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

