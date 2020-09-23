import Cookies from 'js-cookie';

export const getSession = () => {
  const jwt = Cookies.get('__user');
  let session;
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      // what is window.atob ?
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
      session = JSON.parse(window.atob(base64));
    }
  } catch (error) {
    console.log(error);
  }

  return session;
};

export const deleteSession = () => {
  Cookies.remove('__user');
  //   Cookies.remove("x-um-orgid", {
  //     domain: `.${window.location.hostname.split(".").slice(-2).join(".")}`,
  //   });
};
